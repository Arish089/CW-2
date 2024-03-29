import React, { useState } from "react";

import "./style.css";

const data = [
    {
      "id": 1,
      "title": "HealthVit Keto Fat Burner Capsule",
      "info": "bottle of 60 capsules",
      "rating": "97rating",
      "imgURL": "https://onemg.gumlet.io/image/upload/a_ignore,w_100,h_100,c_fit,q_auto,f_auto/v1600767666/cropped/vy7omzxieyisfu4sehn9.jpg",
      "mrp": "₹1500.00",
      "sellingPrice": "₹1125.00",
      "discount": "25% off",
      "star": 4.5
    },
    {
      "id": 2,
      "title": "HealthVit Apple Cider Vinegar ",
      "info": "bottle of 500 ml Liquid",
      "rating": "122rating",
      "imgURL": "https://onemg.gumlet.io/image/upload/a_ignore,w_100,h_100,c_fit,q_auto,f_auto/v1637776838/enifrnkht8xlqqamnr2k.jpg",
      "mrp": "₹ 450.00",
      "sellingPrice": "₹ 316.00",
      "discount": "29%off",
      "star": 2.1
    },
    {
      "id": 3,
      "title": "HealthVit C-Vitan Natural Vitamin C...",
      "info": "bottle of 20 Effervescent...",
      "rating": "97rating",
      "imgURL": "https://onemg.gumlet.io/image/upload/a_ignore,w_100,h_100,c_fit,q_auto,f_auto/v1601232336/cropped/cojrtmk74ajkg3sfbikx.png",
      "mrp": "₹ 350.00",
      "sellingPrice": "₹ 252.00",
      "discount": "28%off",
      "star": 4.1
    },
    {
      "id": 4,
      "title": "HealthVit Omega 3 Fish Oil 1000mg Softgel",
      "info": "bottle of 60 soft gelatin c...",
      "rating": "105rating",
      "imgURL": "https://onemg.gumlet.io/image/upload/a_ignore,w_100,h_100,c_fit,q_auto,f_auto/v1633092673/mqfocyu5rjzv0saptnlh.jpg",
      "mrp": "₹ 800.00",
      "sellingPrice": "₹ 583.00",
      "discount": "27%off",
      "star": 4.4
    },
    {
      "id": 5,
      "title": "HealthVit Cenvitan Women Multivitamin Tablet",
      "info": "bottle of 60 tablets",
      "rating": "81rating",
      "imgURL": "https://onemg.gumlet.io/image/upload/a_ignore,w_100,h_100,c_fit,q_auto,f_auto/v1613501787/xfiayqtoofqahefnpfoq.jpg",
      "mrp": "₹ 550.00",
      "sellingPrice": "₹ 401.00",
      "discount": "27%off",
      "star": 3.1
    },
    {
      "id": 6,
      "title": "B Natural Mixed Fruit Juice 1 L",
      "info": "bottle of 60 tablets",
      "rating": "203rating",
      "imgURL": "https://onemg.gumlet.io/image/upload/a_ignore,w_100,h_100,c_fit,q_auto,f_auto/v1600172283/cropped/baifswerx176fr98htej.jpg",
      "mrp": "₹ 400.00",
      "sellingPrice": "₹ 284.00",
      "discount": "29%off",
      "star": 4.3
    }
  ]
  


const ProductDetails = () => {
  return (
    <div>
      <div className="sunny">
        <p className="topdeal">Top Sellers From Healthvit</p>
      </div>
      <div className="maincontainer">
        <div className="container">
          {/* map through the data and display the cards */}
          {data.map((item) => (
            <div className="card" key={item.id}>
              <div className="card-image">
                <img src={item.imgURL} alt={item.name} />
              </div>
              <div className="card-title">{item.title}</div>
              <div className="card-info">{item.info}</div>
              <div className="card-rating">
                <span>
                  {item.star}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="15"
                    viewBox="0 0 51 48"
                  >
                    <path
                      fill="#ffffff"
                      stroke="none"
                      d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                    ></path>
                  </svg>
                </span>
                <span>{item.rating}</span>
              </div>
              <div className="price">
                <div className="card-mrp">
                  <span>MRP</span>
                  <span>{item.mrp}</span>
                  <span className="card-discount">{item.discount}</span>
                </div>
                <div className="card-price">
                  <span>{item.sellingPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;