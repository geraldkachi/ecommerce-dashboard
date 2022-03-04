import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {

  const state = useSelector((state: any) => state.addItem)

  const itemList = (item: any)=> {
    <div className="list-group-item d-flex justify-content-between 1h-sm">
      <div>
        <h6 className="my-0">Product name</h6>
        <div className="text-muted">{item.title}</div>
      </div>
      <span className="text-muted">${item.price}</span>
    </div>
  }

  return (
    <form className="needs-validation">
      <div className="row">
        {/* <div className="col-md-7">

        </div> */}
        <div className="row g-3">
          <div className="col-sm-6 my-4">
            <label className="form-label">First name</label>
            <input type="text" className="form-control" id="firstName" placeholder="" value="" />
            <div className="invalid-feedback">
              Valid first name is required.
            </div>
          </div>

          <div className="col-sm-6">
            <label className="form-label">Last name</label>
            <input type="text" className="form-control" id="lastName" placeholder="" value="" />
            <div className="invalid-feedback">
              Valid last name is required.
            </div>
          </div>

          <div className="col-12">
            <label className="form-label">Username</label>
            <div className="input-group has-validation">
              <span className="input-group-text">@</span>
              <input type="text" className="form-control" id="username" placeholder="Username" />
              <div className="invalid-feedback">
                Your username is required.
              </div>
            </div>
          </div>

          <div className="col-12">
            <label className="form-label">Email <span className="text-muted">(Optional)</span></label>
            <input type="email" className="form-control" id="email" placeholder="you@example.com" />
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div className="col-12">
            <label className="form-label">Address</label>
            <input type="text" className="form-control" id="address" placeholder="1234 Main St" />
            <div className="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

          <div className="col-12">
            <label className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
            <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
          </div>

          <div className="col-md-5">
            <label className="form-label">Country</label>
            <select className="form-select" id="country">
              <option value="">Choose...</option>
              <option>United States</option>
            </select>
            <div className="invalid-feedback">
              Please select a valid country.
            </div>
          </div>

          <div className="col-md-4">
            <label className="form-label">State</label>
            <select className="form-select" id="state">
              <option value="">Choose...</option>
              <option>California</option>
            </select>
            <div className="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>

          <div className="col-md-3">
            <label className="form-label">Zip</label>
            <input type="text" className="form-control" id="zip" placeholder="" />
            <div className="invalid-feedback">
              Zip code required.
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="same-address" />
          <label className="form-check-label">Shipping address is the same as my billing address</label>
        </div>

        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="save-info" />
          <label className="form-check-label">Save this information for next time</label>
        </div>

        <hr className="my-4" />

        <h4 className="mb-3">Payment</h4>

        <div className="my-3">
          <div className="form-check">
            <input id="credit" name="paymentMethod" type="radio" className="form-check-input" />
            <label className="form-check-label">Credit card</label>
          </div>
          <div className="form-check">
            <input id="debit" name="paymentMethod" type="radio" className="form-check-input" />
            <label className="form-check-label">Debit card</label>
          </div>
          <div className="form-check">
            <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" />
            <label className="form-check-label">PayPal</label>
          </div>
        </div>

        <div className="row gy-3">
          <div className="col-md-6">
            <label className="form-label">Name on card</label>
            <input type="text" className="form-control" id="cc-name" placeholder="" />
            <small className="text-muted">Full name as displayed on card</small>
            <div className="invalid-feedback">
              Name on card is required
            </div>
          </div>

          <div className="col-md-6">
            <label className="form-label">Credit card number</label>
            <input type="text" className="form-control" id="cc-number" placeholder="" />
            <div className="invalid-feedback">
              Credit card number is required
            </div>
          </div>

          <div className="col-md-3">
            <label className="form-label">Expiration</label>
            <input type="text" className="form-control" id="cc-expiration" placeholder="" />
            <div className="invalid-feedback">
              Expiration date required
            </div>
          </div>

          <div className="col-md-3">
            <label className="form-label">CVV</label>
            <input type="text" className="form-control" id="cc-cvv" placeholder="" />
            <div className="invalid-feedback">
              Security code required
            </div>
            {/* col 2 */}
            <div className="col-md-5 col-lg-4 order-md-last">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Your cart</span>
                <span className="badge bg-primary rounded-pill">3</span>
              </h4>
              <ul className="list-group mb-3">
                {state.map(itemList)}
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">Product name</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">$12</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">Second product</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">$8</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">Third item</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">$5</span>
                </li>
                <li className="list-group-item d-flex justify-content-between bg-light">
                  <div className="text-success">
                    <h6 className="my-0">Promo code</h6>
                    <small>EXAMPLECODE</small>
                  </div>
                  <span className="text-success">−$5</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>$20</strong>
                </li>
              </ul>

              <form className="card p-2">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Promo code" />
                  <button type="submit" className="btn btn-secondary">Redeem</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>

      <hr className="my-4" />

      <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
    </form>
  )
}

export default Checkout