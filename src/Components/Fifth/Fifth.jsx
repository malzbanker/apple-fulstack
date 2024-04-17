import React from "react";
import tv from '../../assets/images/icons/apple-tv-logo.png'
import banker from '../../assets/images/home/banker.png'
import watch from '../../assets/images/icons/watch-series5-logo.png'
import '../../assets/images/home/actors.jpg'
import '../../assets/images/home/watch.jpg'

const Fifth = () => {
  return (
    <section class="fifth-heghlight-wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="left-side-wrapper col-sm-12 col-md-6">
            <div class="left-side-container">
              <div class="top-logo-wrapper">
                <div class="logo-wrapper">
                  <img src={tv} />
                </div>
              </div>

              <div class="tvshow-logo-wraper">
                <img src={banker} />
              </div>

              <div class="watch-more-wrapper">
                <a href="#">Watch now on the Apple TV App</a>
              </div>
            </div>
          </div>
          <div class="right-side-wrapper col-sm-12 col-md-6">
            <div class="right-side-container">
              <div class="top-logo-wrapper">
                <div class="logo-wrapper">
                  <img src={watch} />
                </div>
              </div>
              <div class="description-wraper">
                With the Always-On Retina display.
                <br />
                You’ve never seen a watch like this.
              </div>
              <div class="links-wrapper">
                <ul>
                  <li>
                    <a href="">learn more</a>
                  </li>
                  <li>
                    <a href="">Buy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fifth;
