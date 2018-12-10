import React, { Fragment } from 'react'

const MainComponent = () => (
  <Fragment>
    <section className="mt-3 row">
      <div className="col-12">
        <h1>Typography</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas commodo nunc est, id pretium sapien fermentum eget. Nulla sed arcu massa. Nulla facilisi. Aliquam erat volutpat. Nunc rutrum purus vel diam imperdiet, ut tincidunt lacus egestas. Sed vitae mauris efficitur, sodales libero vel, gravida ante. Pellentesque convallis orci consequat est pretium, sit amet gravida massa dapibus.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas commodo nunc est, id pretium sapien fermentum eget. Nulla sed arcu massa. Nulla facilisi. Aliquam erat volutpat. Nunc rutrum purus vel diam imperdiet, ut tincidunt lacus egestas. Sed vitae mauris efficitur, sodales libero vel, gravida ante. Pellentesque convallis orci consequat est pretium, sit amet gravida massa dapibus.</p>

        <h1>H1 Bootstrap heading</h1>
        <h2>H2 Bootstrap heading</h2>
        <h3>H3 Bootstrap heading</h3>
        <h4>H4 Bootstrap heading</h4>
        <h5>H5 Bootstrap heading</h5>
        <h6>H6 Bootstrap heading</h6>
      </div>
    </section>
    <section className="mt-5 row">
      <div className="col-12 mt-3">
        <h1>Buttons</h1>
        <button type="button" className="btn btn-primary mr-3">Primary</button>
        <button type="button" className="btn btn-secondary mr-3">Secondary</button>
        <button type="button" className="btn btn-success mr-3">Success</button>
        <button type="button" className="btn btn-danger mr-3">Danger</button>
        <button type="button" className="btn btn-warning mr-3">Warning</button>
        <button type="button" className="btn btn-info mr-3">Info</button>
        <button type="button" className="btn btn-light mr-3">Light</button>
        <button type="button" className="btn btn-dark mr-3">Dark</button>
      </div>
      <div className="col-12 mt-3">
        <button type="button" className="btn btn-outline-primary mr-3">Primary</button>
        <button type="button" className="btn btn-outline-secondary mr-3">Secondary</button>
        <button type="button" className="btn btn-outline-success mr-3">Success</button>
        <button type="button" className="btn btn-outline-danger mr-3">Danger</button>
        <button type="button" className="btn btn-outline-warning mr-3">Warning</button>
        <button type="button" className="btn btn-outline-info mr-3">Info</button>
        <button type="button" className="btn btn-outline-light mr-3">Light</button>
        <button type="button" className="btn btn-outline-dark mr-3">Dark</button>
      </div>
      <div className="col-12 mt-3">
        <button type="button" className="btn btn-lg btn-primary mr-3">Primary Lg</button>
        <button type="button" className="btn btn-primary mr-3">Primary md</button>
        <button type="button" className="btn btn-sm btn-primary mr-3">Primary Sm</button>
      </div>
    </section>
    <section className="row mt-5">
      <div className="col-4">
        <h1>Forms</h1>
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div className="form-group form-check custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Check this custom checkbox</label>
              </div>
              <div className="form-group form-check">
                <div className="custom-control custom-radio custom-control-inline pl-1">
                  <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="customRadio1">Yes</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="customRadio2">No</label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </Fragment >
)

export default MainComponent