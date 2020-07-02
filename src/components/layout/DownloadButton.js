import React, { Fragment, useEffect, useState } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import pokemonApp from '../../releases/PokeApp.apk';

const DownloadButton = () => {
  const [isLoading, setLoading] = useState(true);
  const [counter, setCounter] = useState(7);

  useEffect(() => {
    function simulateNetworkRequest() {
      setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);
    }
    if (counter > 0) {
      simulateNetworkRequest();
    } else {
      setLoading(false);
      setCounter(7);
    }
  }, [counter]);
  return (
    <Fragment>
      <AwesomeButton
        className="text-decoration-none"
        href={pokemonApp}
        type="primary"
        size="large"
        disabled={isLoading}
        download
      >
        {isLoading ? `wait ${counter} seconds...` : 'Download APK'}
      </AwesomeButton>
    </Fragment>
  );
};

export default DownloadButton;
