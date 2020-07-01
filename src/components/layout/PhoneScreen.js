import React, { Fragment } from 'react';
import FastcatchPerfectthrow from '../../videos/fastcatch_perfectthrow.mp4';
import FeatList from '../../videos/feat_list.mp4';
import Noballdrop from '../../videos/noballdrop.mp4';
import QuickPowerup from '../../videos/quick_powerup.mp4';
import TransferEverything from '../../videos/transfer_everything.mp4';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './PhoneScreen.css';
/* 
          <Slide index={0}>
            <ReactPlayer
              url={TransferEverything}
              height="100%"
              width="100%"
              playing={true}
              loop="true"
            />
          </Slide>
          <Slide index={1}>
            <ReactPlayer
              url={TransferEverything}
              height="100%"
              width="100%"
              playing={true}
              loop="true"
            />
          </Slide>
          <Slide index={2}>
            <ReactPlayer
              url={TransferEverything}
              height="100%"
              width="100%"
              playing={true}
              loop="true"
            />
          </Slide>
*/
const PhoneScreen = () => {
  const videoList = [
    FastcatchPerfectthrow,
    FeatList,
    Noballdrop,
    QuickPowerup,
    TransferEverything,
  ];
  return (
    <Fragment>
      <CarouselProvider
        naturalSlideWidth={320}
        naturalSlideHeight={572}
        totalSlides={videoList.length}
        infinite={true}
      >
        <Slider>
          {videoList.map((video, index) => (
            <Slide key={index} index={index}>
              <video
                className="video"
                src={video}
                preload="auto"
                autoPlay={true}
                muted={true}
                loop={true}
              ></video>
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </Fragment>
  );
};

export default PhoneScreen;
