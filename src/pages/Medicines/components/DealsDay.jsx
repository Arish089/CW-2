import React, { useState } from "react";
import "./style.css";

const dealsday = [
  {
    "id": 1,
    "title": "HealthVit Keto Fat Burner Capsule",
    "info": "bottle of 60 capsules",
    "rating": "97rating",
    "imgURL": "https://onemg.gumlet.io/image/upload/a_ignore,w_100,h_100,c_fit,q_auto,f_auto/v1600767666/cropped/vy7omzxieyisfu4sehn9.jpg",
    "mrp": "₹1500.00",
    "sellingPrice": "₹1125.00",
    "discount": "25%off",
    "star": 4.1
  },
  {
    "id": 2,
    "title": "HealthVit Apple Cider Vinegar ",
    "info": "bottle of 500 ml Li",
    "rating": "122rating",
    "imgURL": "https://onemg.gumlet.io/image/upload/a_ignore,w_100,h_100,c_fit,q_auto,f_auto/v1637776838/enifrnkht8xlqqamnr2k.jpg",
    "mrp": "₹450.00",
    "sellingPrice": "₹ 316.00",
    "discount": "29%off",
    "star": 4.3
  },
  {
    "id": 3,
    "title": "HealthVit C-Vitan Natural Vitamin C...",
    "info": "bottle of 20 Effervescent...",
    "rating": "97rating",
    "imgURL": "https://onemg.gumlet.io/image/upload/a_ignore,w_100,h_100,c_fit,q_auto,f_auto/v1601232336/cropped/cojrtmk74ajkg3sfbikx.png",
    "mrp": "₹350.00",
    "sellingPrice": "₹ 252.00",
    "discount": "28%off",
    "star": 4.2
  },
  {
    "id": 4,
    "imgURL": "https://onemg.gumlet.io/image/upload/a_ignore,w_100,h_100,c_fit,q_auto,f_auto/v1613566715/w84792bbroguuvsqyyh8.jpg",
    "title": "Horlicks Health and Nutrition Drink",
    "link": "https://www.1mg.com/otc/tata-1mg-salmon-omega-3-fish-oil-capsule-otc503411",
    "info": "packet of 500 gm powder",
    "mrp": "₹ 120",
    "rating": "278rating",
    "discount": "5%off",
    "sellingPrice": "₹ 199",
    "star": 3.3
  },
  {
    "id": 5,
    "imgURL": "https://onemg.gumlet.io/image/upload/a_ignore,w_100,h_100,c_fit,q_auto,f_auto/v1632981764/noekunzlypna6hkheoft.jpg",
    "title": "Dabur Hajmola Imli",
    "link": "https://www.1mg.com/otc/tata-1mg-bis-approved-ffp2-n95-mask-for-kids-5-mask-otc692293",
    "info": "bottle of 120 tablets",
    "mrp": "₹49",
    "rating": "1340rating",
    "discount": "14%off",
    "sellingPrice": "₹ 295",
    "star": 3.1
  },
  {
    "id": 6,
    "imgURL": "https://onemg.gumlet.io/image/upload/a_ignore,w_130,h_100,c_fit,q_auto,f_auto/v1600089684/cropped/pvae0u3lqct2buryvo0r.jpg",
    "title": "Electral Power",
    "link": "https://www.1mg.com/otc/1mg-high-fiber-with-pre-probiotics-with-inulin-guar-gum-resistant-maltodextrin-unflavoured-unflavoured-with-resistant-maltodextrin-inulin-and-guar-gum-otc640226",
    "info": "sachet of 21.8gm powder",
    "mrp": "₹19.84",
    "rating": "2361rating",
    "discount": "19%off",
    "sellingPrice": "₹16",
    "star": 4.3
  }
]
const DealsDay = () => {
  return (
    <div>
      <div className="sunny">
        <p className="topdeal">Deals of the day</p>
      </div>
      <div className="maincontainer">
        <div className="container">
          {/* map through the data and display the cards */}
          {dealsday.map((item) => (
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
export default DealsDay;