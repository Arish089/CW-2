import React, { useState } from "react";
import "./style.css";

const trending = [
    {
      "id": 1,
      "imgURL": "https://onemg.gumlet.io/image/upload/a_ignore,w_100,h_100,c_fit,q_auto,f_auto/v1645793069/jwsvucxwnxv5xztau8qy.jpg",
      "title": "Mom&Herbs Onion Hair Oil",
      "link": "https://www.1mg.com/otc/tata-1mg-multivitamin-supreme-zinc-calcium-and-vitamin-d-immunity-booster-capsule-otc503409",
      "info": " bottle of 50 ml oil",
      "mrp": "195",
      "rating": "335rating",
      "discount": "82%off",
      "sellingPrice": "₹35",
      "star": 3.5
    },
    {
      "id": 2,
      "imgURL": "https://onemg.gumlet.io/image/upload/a_ignore,w_100,h_100,c_fit,q_auto,f_auto/v1600137906/cropped/ckrjzacxu5okokbtdgku.jpg",
      "title": "Dabur Pudin Hara Pearls",
      "link": "https://www.1mg.com/otc/tata-1mg-calcium-vitamin-d3-zinc-magnesium-and-alfalfa-tablets-for-joint-health-immunity-otc536094",
      "info": "strip of 10 soft gelatin ca..",
      "mrp": "₹25",
      "rating": "672rating",
      "discount": "4%off",
      "sellingPrice": "₹24",
      "star": 4.5
    },
    {
      "id": 3,
      "imgURL": "https://onemg.gumlet.io/image/upload/a_ignore,w_100,h_100,c_fit,q_auto,f_auto/v1619726560/ugzlvtqh0pchrv4aksi5.jpg",
      "title": "Colgate MaxFresh Plax MouthWash Peppermint",
      "link": "https://www.1mg.com/otc/tata-1mg-bis-approved-ffp2-n95-mask-head-loop-10-mask-otc701780",
      "info": "bottle of 500ml Mouth Wash",
      "mrp": "₹285",
      "rating": "90rating",
      "discount": "14%off",
      "sellingPrice": "₹243",
      "star": 3.4
    },
    {
      "id": 4,
      "imgURL": "https://onemg.gumlet.io/image/upload/a_ignore,w_100,h_100,c_fit,q_auto,f_auto/v1645466994/tz0wequkkxtcyapsavgv.jpg",
      "title": "Glucon-D Instant Energy Health Drink Tangy Orange with Free Sipper",
      "link": "https://www.1mg.com/otc/tata-1mg-women-s-multivitamin-zinc-vitamin-c-calcium-vitamin-d-and-iron-immunity-booster-tablet-otc555721",
      "info": " box of 1kg powder",
      "mrp": "₹352",
      "rating": "458rating",
      "discount": "12%off",
      "sellingPrice": "₹310",
      "star": 3.5
    },
    {
      "id": 5,
      "imgURL": "https://onemg.gumlet.io/image/upload/a_ignore,w_100,h_100,c_fit,q_auto,f_auto/v1613566715/w84792bbroguuvsqyyh8.jpg",
      "title": "Horlicks Health and Nutrition Drink Classic Malt",
      "link": "https://www.1mg.com/otc/tata-1mg-salmon-omega-3-fish-oil-capsule-otc503411",
      "info": "packet of 500 gm",
      "mrp": "₹ 120",
      "rating": "278rating",
      "discount": "5%off",
      "sellingPrice": "₹ 199",
      "star": 4.0
    },
    {
      "id": 6,
      "imgURL": "https://onemg.gumlet.io/image/upload/a_ignore,w_100,h_100,c_fit,q_auto,f_auto/v1632981764/noekunzlypna6hkheoft.jpg",
      "title": "Dabur Hajmola Imli",
      "link": "https://www.1mg.com/otc/tata-1mg-bis-approved-ffp2-n95-mask-for-kids-5-mask-otc692293",
      "info": "bottle of 120 tablets",
      "mrp": "₹49",
      "rating": "1340rating",
      "discount": "14%off",
      "sellingPrice": "₹ 295",
      "star": 4.1
    }
  ]

const Trending = () => {
  return (
    <div style={{overflow:'hidden'}}>
      <div className="sunny">
        <p className="topdeal">Trending now</p>
      </div>
      <div className="maincontainer">
        <div className="container">
          {/* map through the data and display the cards */}
          {trending.map((item) => (
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
export default Trending;