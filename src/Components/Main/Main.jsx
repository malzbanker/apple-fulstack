import React from "react";
import "../../assets/images/home/ipodPronew-sm.jpg";
import "../../assets/images/home/macbookair-new.jpg";
import "../../assets/images/home/iphone11-colored.jpg";
import "../../assets/images/home/apple-blue-logo.jpg";
import tv from "../../assets/images/icons/apple-tv-logo.png";
import banker from "../../assets/images/home/banker.png";
import watch from "../../assets/images/icons/watch-series5-logo.png";
import "../../assets/images/home/actors.jpg";
import "../../assets/images/home/watch.jpg";
import arcad from "../../assets/images/icons/arcade.png";
import "../../assets/images/home/apple-card-monthly.jpg";
import "../../assets/images/home/spyder.jpg";

const Main = () => {
  return (
    <>
      {/* alert section */}
      <section className="alert-section top-50">
        <div className="container">
          <div class="alert-title">We’re open for you.</div>
          <div className="alert-text">
            Our retail stores are closed, but you can buy our products here
            online and get fast, free delivery. If you need help finding the
            right product or have a question on your order, chat online with a
            Specialist or call 1-800-MY-APPLE.
            <br />
            For service and support, visit{" "}
            <a href="https://support.apple.com/">support.apple.com</a>.
          </div>
        </div>
      </section>

      {/* first highlight section */}
      <section class="first-hightlight-wrapper">
        <div class="container">
          {/* <FirstLink name="New"/> */}

          <div class="new-alert">New</div>

          {/* <FirstLink brand="iPad Pro "/> */}
          <div class="title-wraper bold black">iPad Pro</div>

          <div class="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Order</a>
              </li>
            </ul>
          </div>

          <div class="ipod-caption row">
            <div class="col-sm-12 col-md-6 text-md-right">
              iPad Pro available starting 3.25
            </div>
            <div class="col-sm-12 col-md-6 text-md-left">
              Magic Keyboard coming in May
            </div>
          </div>
        </div>
      </section>
      {/* second highlight section */}
      <section className="second-hightlight-wrapper">
        <div className="container">
          <div className="new-alert">New</div>

          <div className="title-wraper bold black">MacBook Air</div>

          <div className="description-wrapper black">
            Twice the speed. Twice the storage.
          </div>

          <div className="price-wrapper grey">From $999.</div>

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* thrid highlight section */}
      <section class="third-hightlight-wrapper">
        <div class="container">
          <div class="title-wraper bold">iPhone 11 Pro</div>

          <div class="description-wrapper">
            Pro cameras. Pro display. Pro performance.
          </div>

          <div class="price-wrapper">
            From $24.95/mo. or $599 with trade‑in.
          </div>

          <div class="links-wrapper">
            {/* <LearnLink/>
             */}
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
      </section>
      {/* forth highlight section */}

      <section class="fourth-heghlight-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="left-side-wrapper col-sm-12 col-md-6">
              <div class="left-side-container">
                <div class="title-wraper">iPhone 11</div>
                <div class="description-wraper">
                  Just the right amount of everything.
                </div>
                <div class="price-wrapper">
                  From $18.70/mo. or $499 with trade‑in.<sup>1</sup>
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
            <div class="right-side-wrapper col-sm-12 col-md-6">
              <div class="right-side-container">
                <div class="title-wraper white">
                  Get the latest CDC response to COVID-19.
                </div>

                <div class="links-wrapper white">
                  <ul>
                    <li>
                      <a href="">Watch the PSA</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* fifth highlight section */}
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
      {/* sixth highlight section */}
      <section class="sixth-heghlight-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="left-side-wrapper col-sm-12 col-md-6">
              <div class="left-side-container">
                <div class="top-logo-wrapper">
                  <div class="logo-wrapper">
                    <img src={arcad} />
                  </div>
                </div>
                <div class="description-wraper white">
                  Agent 8 is a small hero on a big mission.
                </div>
                <div class="links-wrapper">
                  <ul>
                    <li>
                      <a href="">
                        Play now<sup>2</sup>
                      </a>
                    </li>
                    <li>
                      <a href="">Learn about Apple Arcade</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="right-side-wrapper col-sm-12 col-md-6">
              <div class="right-side-container">
                <div class="title-wraper">Apple Card Monthly Installments</div>
                <div class="description-wraper">
                  Pay for your next iPhone over time, interest-free with Apple
                  Card.
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
    </>
  );
};

export default Main;
