import React from 'react'
import './style.css'


const Compare = ({ products, compare, remaining }) =>
  <div className="row compare">
    <div className="col-12 mt-5 text-center">
      <table className="table">

        <tbody>
          <tr>
            <th>
              <div className="titleCompare">Compare</div>
              <div className="titleProductsLength">{products.length} items selected</div>
            </th>
            {products.map(product =>
              <th key={product.id}>
                <button className="close" aria-label="Close" onClick={() => compare(product)}>
                  <span  aria-hidden="true">&times;</span>
                </button>
                <img width="100%" src={product.imageUrl} alt={product.name} />
              </th>
            )}
            {products.length === 1 ? <td><div className="blank"></div></td> : null}
          </tr>
          <tr className="headerBorder">
            <th />
            {products.map(product =>
              <td key={product.id}>
                {product.title.title}
              </td>
            )}
            {products.length === 1 ? <td width="30%"><div className="addproduct">Add a product</div></td> : null}
          </tr>
          <tr className="headerBorder">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
            <label className="labelDifference"> Show Only Differences</label>

            {products.map(product =>
              <td key={product.id}>

                <div className="finalPrice">
                  <span class="customTextfield">
                    &#x20B9;
              </span>
                  {product.pricingSummary.finalPrice}
                </div>
                <div className="initialPrice">
                  <span class="customTextfield">
                    &#x20B9;
              </span>
                  {product.pricingSummary.price}
                </div>

                <div className="discount">
                  {product.pricingSummary.totalDiscount}
                  <span class="customTextfield">
                    &#37; off
              </span>
                </div>
              </td>
            )}
            {products.length === 1 ? <td width="30%"><div><select onChange={(event) => compare(JSON.parse(event.target.value))} id="dropdown">
              <option>Choose a product</option>
              {remaining.map(product => <option value={JSON.stringify(product)}>{product.title.title}</option>)}
            </select></div></td> : null}
          </tr>
          {Object.keys(products[0].features).map(mainfeature =>
            <>
              <tr className="noBorder">
                <th width="30%" className="mainfeature">{mainfeature.toUpperCase()}</th>
                {products.map(product => <th className="mainfeature"></th>)}
              </tr>
              {Object.keys(products[0].features[mainfeature]).map(subFeature => <tr className="noBorder"><th>{subFeature}</th>
                {products.map(product => <td>{product.features[mainfeature][subFeature]}</td>)}
              </tr>

              )}

            </>
          )}

        </tbody>
      </table>
    </div>
  </div>;

export default Compare
