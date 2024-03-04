import React, { useState } from "react";
import "./style.css";


const combodeals = [
    {
      "id": 1,
      "imgURL": "https://onemg.gumlet.io/image/upload/a_ignore,w_100,h_100,c_fit,q_auto,f_auto/v1629975380/cp6ivak8ii869hnhsmpa.jpg",
      "title": "Dettol First Aid Kit",
      "link": "https://www.1mg.com/otc/tata-1mg-multivitamin-supreme-zinc-calcium-and-vitamin-d-immunity-booster-capsule-otc503409",
      "info": " combo pack of 2 pack",
      "mrp": "515",
      "rating": "515 rating",
      "discount": "8%off",
      "sellingPrice": "₹474",
      "star": 4.3
    },
    {
      "id": 2,
      "imgURL": "https://onemg.gumlet.io/image/upload/a_ignore,w_100,h_100,c_fit,q_auto,f_auto/v1648730308/pfqnfyojsqwtn6hrce32.jpg",
      "title": "Combo Pack of Sri Sri Tattva Tulasi Arka 30ml ",
      "link": "https://www.1mg.com/otc/tata-1mg-calcium-vitamin-d3-zinc-magnesium-and-alfalfa-tablets-for-joint-health-immunity-otc536094",
      "info": "combo pack of 2 bottles",
      "mrp": "₹405",
      "rating": "672 rating",
      "discount": "52%off",
      "sellingPrice": "₹194",
      "star": 4.1
    },
    {
      "id": 3,
      "imgURL": "https://onemg.gumlet.io/image/upload/a_ignore,w_130,h_100,c_fit,q_auto,f_auto/v1613386948/frivljebqevwdptjkodu.jpg",
      "title": "Nivea Soft Light Moisturiser and 1mg ",
      "link": "https://www.1mg.com/otc/tata-1mg-bis-approved-ffp2-n95-mask-head-loop-10-mask-otc701780",
      "info": "combo pack of 2 pack",
      "mrp": "₹460",
      "rating": "90 rating",
      "discount": "41%off",
      "sellingPrice": "₹270",
      "star": 4.5
    },
    {
      "id": 4,
      "imgURL": "https://onemg.gumlet.io/image/upload/a_ignore,w_100,h_100,c_fit,q_auto,f_auto/v1602583485/qir6i2zlhzeddxa4mqt0.jpg",
      "title": "Immunity Care Combo of 1mg Panch Tulsi",
      "link": "https://www.1mg.com/otc/tata-1mg-women-s-multivitamin-zinc-vitamin-c-calcium-vitamin-d-and-iron-immunity-booster-tablet-otc555721",
      "info": " combo pack of 2 pack",
      "mrp": "₹335",
      "rating": "458 rating",
      "discount": "22%off",
      "sellingPrice": "₹260",
      "star": 4.0
    },
    {
      "id": 5,
      "imgURL": "https://onemg.gumlet.io/image/upload/a_ignore,w_100,h_100,c_fit,q_auto,f_auto/v1601161815/cropped/zolg3xv8s5klfpfqzoil.jpg",
      "title": "safola oats 1 kg with 400gm free",
      "link": "https://www.1mg.com/otc/tata-1mg-salmon-omega-3-fish-oil-capsule-otc503411",
      "info": "combo pack of 2 pack",
      "mrp": "₹ 215",
      "rating": "110 rating",
      "discount": "1%off",
      "sellingPrice": "₹ 213",
      "star": 3.3
    },
    {
      "id": 6,
      "imgURL": "https://onemg.gumlet.io/image/upload/a_ignore,w_100,h_100,c_fit,q_auto,f_auto/v1648730563/dkublfwyo18topo38fr0.jpg",
      "title": "Combo Pack of Sri Sri Tattva Karela Jamun Juice",
      "link": "https://www.1mg.com/otc/tata-1mg-bis-approved-ffp2-n95-mask-for-kids-5-mask-otc692293",
      "info": "combo pack of 2 pack",
      "mrp": "₹1025",
      "rating": "906 rating",
      "discount": "24%off",
      "sellingPrice": "₹ 774",
      "star": 3.5
    }
  ]

const ComboDeals = () => {
  return (
    <div>
      {/* <h1 className="mini">Groceries</h1> */}
      <div className="sunny">
        <p className="topdeal">Popular Combo Deals</p>
      </div>
      <div className="maincontainer">
        <div className="container">
          {/* map through the data and display the cards */}
          {combodeals.map((item) => (
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
export default ComboDeals;