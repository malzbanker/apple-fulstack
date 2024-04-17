import React from "react";
// import '../../assets/images/home/ipodPronew.jpg'
import "../../assets/images/home/ipodPronew-sm.jpg"

const First = () => {
  return (
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
  );
};

export default First;
