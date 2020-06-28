import React, { Fragment } from 'react';
import googleLogo from '../../img/googleplay.svg';
const Features = () => {
  return (
    <Fragment>
      <style type="text/css">
        {`
    .features {
      background-color: black !important;
        margin:0;
        padding:0;
    }
    `}
      </style>
      <div className="features py-4 px-4">
        <div className="container py-2 px-2">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="feature">
                <div className="big-icon text-success">
                  <i className="fab fa-android"></i>
                </div>
                <h5 className="text-white">Made for Android</h5>
                <p className="text-secondary">
                  Amazing features you've never seen before! Perfect throws?
                  Yes! Pokémon doesn't move, attack nor dodges? That's correct.
                  Instant Catch as well? You bet it!
                </p>
                <p className="text-danger medium font-italic">
                  A rooted device is required to run this application.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="feature">
                <div className="big-icon text-secondary">
                  <i className="fas fa-star"></i>
                </div>
                <h5 className="text-white">Improved Experience</h5>
                <p className="text-secondary">
                  Whether you're a legit or spoofer player we've got you
                  covered. Say goodbye to the huge amount of boring tasks
                  Pokémon GO's got!
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="feature">
                <div className="big-icon text-primary">
                  <i className="fas fa-thumbs-up"></i>
                </div>
                <h5 className="text-white">No Modded Pokémon GO</h5>
                <p className="text-secondary">
                  Get started quickly and easily! Get Pokémon Go straight from
                  the Play Store, run Pokemod, attach and you're ready to go.
                </p>
                <a href="https://play.google.com/store?utm_source=emea_Med&utm_medium=hasem&utm_content=Feb2017&utm_campaign=Evergreen&pcampaignid=MKT-DR-emea-pt-1001280-Med-hasem-py-Evergreen-Feb2017-Text_Search_BKWS%7cONSEM_kwid_43700008752168780&gclid=Cj0KCQjw3Nv3BRC8ARIsAPh8hgL-dUhQrh5INXGGRwDFuiUZpTJPZucz43Py8wbfeg1XdMNppJb96VUaAseSEALw_wcB&gclsrc=aw.ds">
                  <img
                    src={googleLogo}
                    width="150"
                    height="150"
                    className="d-inline-block"
                    alt="google"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Features;
