import React, { Fragment } from 'react';
import FastcatchPerfectthrow from '../../videos/fastcatch_perfectthrow.webm';
import FeatList from '../../videos/feat_list.webm';
import Noballdrop from '../../videos/noballdrop.mp4';
import QuickPowerup from '../../videos/quick_powerup.webm';
import TransferEverything from '../../videos/transfer_everything.webm';
import ReactPlayer from 'react-player';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
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
        naturalSlideWidth={250}
        naturalSlideHeight={500}
        totalSlides={videoList.length}
        infinite={true}
      >
        <Slider>
          {videoList.map((video, index) => (
            <Slide index={index}>
              <ReactPlayer
                url={video}
                height="100%"
                width="100%"
                muted
                playing={true}
                loop="true"
              />
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </Fragment>
  );
};

export default PhoneScreen;
