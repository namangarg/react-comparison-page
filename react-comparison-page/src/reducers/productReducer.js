import * as types from '../constants/types'

const INITIAL_STATE = {
  products: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      const compareSummary =  action.payload.compareSummary;
      const featureList = action.payload.featuresList;
      const images = compareSummary.images;
      const titles = compareSummary.titles;
      const productPricingSummary =  compareSummary.productPricingSummary;
      const ids = Object.keys(compareSummary.images);
      var customFeatureList = {}
      ids.map(id=>{
        featureList.map(feature=>{
          var obj = {} 
          feature.features.map(subFeature=>{
            obj[subFeature.featureName] = (subFeature.values[id])
          })
          if(customFeatureList[id] === undefined){
            customFeatureList[id] = {}
          }
          customFeatureList[id][feature.title] = obj 
          console.log(customFeatureList)
        })
      }
      )
      debugger;
      return {
        ...state, products: ids.map(id =>
          ({id, compare: false, imageUrl: images[id], title:titles[id], pricingSummary:productPricingSummary[id], features:customFeatureList[id]
          })
        )
      };

    case types.COMPARE_PRODUCT:
      return {
        ...state, products: state.products.map(product =>
          product.id === action.product.id ?
            ({...product, compare: !product.compare}) :
            product
        )
      };
    default:
      return state
  }
}
