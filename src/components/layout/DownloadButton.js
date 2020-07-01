import React, { Fragment, useEffect, useState } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import pokemonApp from '../../releases/PokeApp.apk';
const DownloadButton = () => {
  const [isLoading, setLoading] = useState(true);
  const [counter, setCounter] = useState(7);
  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }

  useEffect(() => {
    if (counter > 0) {
      simulateNetworkRequest().then(() => {
        setCounter(counter - 1);
      });
    } else {
      setLoading(false);
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
