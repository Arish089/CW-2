import React, { useState } from "react";
import "./style.css";

const tatamg =[
    {
      "id": 1,
      "imgURL": "https://onemg.gumlet.io/image/upload/l_watermark_110,w_100,h_700/a_ignore,w_100,h_100,c_pad,q_auto,f_auto/v1642507775/gmkrpf1imjj9djwvq4gq.jpg",
      "title": "Tata 1mg Multivitamin Supreme, Zinc",
      "link": "https://www.1mg.com/otc/tata-1mg-multivitamin-supreme-zinc-calcium-and-vitamin-d-immunity-booster-capsule-otc503409",
      "info": " bottle of 60 capsules",
      "mrp": "₹995",
      "rating": "335rating",
      "discount": "55%off",
      "sellingPrice": "₹ 448",
      "star": 4.5
    },
    {
      "id": 2,
      "imgURL": "https://onemg.gumlet.io/image/upload/a_ignore,w_100,h_100,c_fit,q_auto,f_auto/v1637324194/gc3u9gfc331wtsipnljl.jpg",
      "title": "Tata 1mg Calcium + Vitamin D3, Zinc ",
      "link": "https://www.1mg.com/otc/tata-1mg-calcium-vitamin-d3-zinc-magnesium-and-alfalfa-tablets-for-joint-health-immunity-otc536094",
      "info": " bottle of 60 capsules",
      "mrp": "₹ 595",
      "rating": "672rating",
      "discount": "60%off",
      "sellingPrice": "₹ 238",
      "star": 2.1
    },
    {
      "id": 3,
      "imgURL": "https://onemg.gumlet.io/image/upload/a_ignore,w_130,h_100,c_fit,q_auto,f_auto/v1643307171/ffel0eytbg8gvbjxlykh.jpg",
      "title": "Tata 1mg BIS Approved FFP2 N95 Mask",
      "link": "https://www.1mg.com/otc/tata-1mg-bis-approved-ffp2-n95-mask-head-loop-10-mask-otc701780",
      "info": "box of 10 masks",
      "mrp": "₹ 900",
      "rating": "50rating",
      "discount": "50%off",
      "sellingPrice": "₹ 450",
      "star": 4.4
    },
    {
      "id": 4,
      "imgURL": "https://onemg.gumlet.io/image/upload/a_ignore,w_100,h_100,c_fit,q_auto,f_auto/v1645272788/qh1au45w8u7cfvf3lg3i.jpg",
      "title": "Tata 1mg Women's Multivitamin, Zinc",
      "link": "https://www.1mg.com/otc/tata-1mg-women-s-multivitamin-zinc-vitamin-c-calcium-vitamin-d-and-iron-immunity-booster-tablet-otc555721",
      "info": " bottle of 60 capsules",
      "mrp": "₹ 995",
      "rating": "98rating",
      "discount": "60%off",
      "sellingPrice": "₹ 398",
      "star": 3.1
    },
    {
      "id": 5,
      "imgURL": "https://onemg.gumlet.io/image/upload/a_ignore,w_100,h_100,c_fit,q_auto,f_auto/v1642507827/fwram2p7rbkoigjg6zas.jpg",
      "title": "Tata 1mg Salmon Omega 3 Fish Oil Capsule",
      "link": "https://www.1mg.com/otc/tata-1mg-salmon-omega-3-fish-oil-capsule-otc503411",
      "info": " bottle of 60 capsules",
      "mrp": "₹ 400",
      "rating": "78rating",
      "discount": "51%off",
      "sellingPrice": "₹ 196",
      "star": 4.0
    },
    {
      "id": 6,
      "imgURL": "https://onemg.gumlet.io/image/upload/a_ignore,w_100,h_100,c_fit,q_auto,f_auto/v1638444070/nwhioxrxmwjkaxitryag.jpg",
      "title": "Tata 1mg BIS Approved FFP2 N95 Mask for Kids ",
      "link": "https://www.1mg.com/otc/tata-1mg-bis-approved-ffp2-n95-mask-for-kids-5-mask-otc692293",
      "info": "box of 5 masks",
      "mrp": "₹ 995",
      "rating": "456rating",
      "discount": "70%off",
      "sellingPrice": "₹ 295",
      "star": 3.2
    }
  ]
  

const TataMg = () => {
  return (
    <div>
      <div className="sunny">
        <p className="topdeal">Tata 1mg health products</p>
      </div>
      <div className="maincontainer">
        <div className="container">
          {/* map through the data and display the cards */}
          {tatamg.map((item) => (
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
export default TataMg;