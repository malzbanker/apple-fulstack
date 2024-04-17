
import React from "react";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
function Iphone() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch("../../../public/Iphone.json")
      .then((data) => data.json())
      .then((data) => {
        setVideos(() => data.products); // Update the state with the website HTML
      })

      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);
  console.log(videos);
  let flip = true;
  return (
    // product_id, product_url,product_name, description_id,product_brief_description,product_description,product_link,
    // starting_price, price_range
    <div className="mac p-40 mt-5">
      <h1 className="text-center">Iphones: </h1>
      <h4 className="text-center">The best for the brightest.</h4>
    <div className="">
        {videos?.map((product) => {
          let display1 = 1;
          let display2 = 2;
          if (flip) {
            display1 = 2;
            display2 = 1;
            flip = !flip;
          } else {
            flip = !flip;
          }
          // let Vid = applevideo.id.videoId;
          // let vd_link = https://www.youtube.com/watch?v=${Vid};
          let fetchproduct = (
            <div className="p-5">
              <div key={product.product_url}></div>
              {/* <div>
                  <a href={vd_link}>Watch Video</a>
                </div>  */}
              <div className="row class">
                <div
                  className={`grid col-md-6  p-3 mb-5  col-sm-12  order-${display1}`}
                >
                  <img
                    src={product.product_img}
                    alt="Video Thumbnail"
                    className="appleimag"
                  />
                </div>
                <div
                  className={`  col-md-6  p-3 mb-5  rainbow  order-${display2}`}
                >
                  <div>
                    <h1>{product.product_name}</h1>
                  </div>
                  <div className="textstyle">
                    <div>
                      <p>{product.product_brief_description}</p>
                    </div>
                    <div>
                      <p>{product.product_description}</p>
                    </div>
                    <Link to="{product.product_link}">Link</Link>
                    <br />
                    <Link to={`/iphone/${product.product_url}`}>
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
          return fetchproduct;
        })}
      </div>
    </div>
  );
}
export default Iphone;
