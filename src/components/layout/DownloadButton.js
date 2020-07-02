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
    const ac = new AbortController();
    if (counter > 0) {
      simulateNetworkRequest();
    }

    if (counter < 1) {
      setLoading(false);
    }
    return () => ac.abort();
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
