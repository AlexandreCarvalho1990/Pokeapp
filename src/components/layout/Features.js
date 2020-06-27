import React, { Fragment } from 'react';

const Features = () => {
  return (
    <Fragment>
      <div className="features bg-warning py-4 px-4">
        <div className="container py-2 px-2">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="feature">
                <div className="big-icon text-success">
                  <i className="fab fa-android"></i>
                </div>
                <h5 className="text-success">Made for Android</h5>
                <p className="lead">
                  Amazing features you've never seen before! Perfect throws?
                  Yes! Pokémon doesn't move, attack nor dodges? That's correct.
                  Instant Catch as well? You bet it!
                </p>
                <p className="bg-warning text-danger medium font-italic">
                  A rooted device is
                  <strong>required</strong>
                  to run this application.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="feature">
                <div className="big-icon text-secondary">
                  <i className="fas fa-star"></i>
                </div>
                <h5 className="text-secondary">Improved Experience</h5>
                <p className="lead">
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
                <h5 className="text-primary">No Modded Pokémon GO</h5>
                <p className="lead">
                  Get started quickly and easily! Get Pokémon Go straight from
                  the Play Store, run Pokemod, attach and you're ready to go.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Features;
