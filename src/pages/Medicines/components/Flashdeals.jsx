import React, { useState } from "react";
import "./style.css";

const flashdeals = [
    {
      "id": 1,
      "imgURL": "https://onemg.gumlet.io/image/upload/a_ignore,w_100,h_100,c_fit,q_auto,f_auto/v1600202758/cropped/n4ucau55t2b6uh7vxcbz.png",
      "title": "MuscleBlaze Whey Gold Protein Rich Milk Choco",
      "link": "https://www.1mg.com/otc/muscleblaze-whey-gold-whey-protein-isolate-only-powder-rich-milk-chocolate-otc353248",
      "info": "jar of 1 kg",
      "rating": "45rating",
      "mrp": "₹7149",
      "discount": "17%off",
      "sellingPrice": "₹5899",
      "star": 4.2
    },
    {
      "id": 2,
      "imgURL": "https://onemg.gumlet.io/image/upload/a_ignore,w_100,h_100,c_fit,q_auto,f_auto/v1600155152/cropped/k6nj6qz8wvdv0u6pgztt.png",
      "title": "MuscleBlaze MB Mass Gainer XXL Chocolate",
      "link": "https://www.1mg.com/otc/muscleblaze-mb-mass-gainer-xxl-chocolate-otc328743",
      "info": "jar of 1 kg",
      "rating": "45rating",
      "mrp": "₹1429",
      "discount": "23%off",
      "sellingPrice": "₹1099",
      "star": 4.5
    },
    {
      "id": 3,
      "imgURL": "https://onemg.gumlet.io/image/upload/a_ignore,w_100,h_100,c_fit,q_auto,f_auto/v1600202758/cropped/n4ucau55t2b6uh7vxcbz.png",
      "title": "Multivitamins Blend Powder Chocolate",
      "link": "https://www.1mg.com/otc/muscleblaze-whey-energy-with-digezyme-whey-multivitamins-blend-powder-chocolate-otc328751",
      "info": "jar of 1 kg",
      "rating": "45rating",
      "mrp": "₹2299",
      "discount": "21%off",
      "sellingPrice": "₹1799",
      "star": 4.1
    },
    {
      "id": 4,
      "imgURL": "https://onemg.gumlet.io/image/upload/a_ignore,w_100,h_100,c_fit,q_auto,f_auto/v1600202766/cropped/rvpthfcm8tnlpr4s3hmd.png",
      "title": "Powder Rich Milk Chocolate",
      "link": "https://www.1mg.com/otc/muscleblaze-whey-gold-whey-protein-isolate-only-powder-rich-milk-chocolate-otc353245",
      "info": "jar of 1 kg",
      "rating": "45rating",
      "mrp": "₹3849",
      "discount": "22%off",
      "sellingPrice": "₹2999",
      "star": 4.2
    },
    {
      "id": 5,
      "imgURL": "https://onemg.gumlet.io/image/upload/a_ignore,w_100,h_100,c_fit,q_auto,f_auto/v1640260929/vi1egyox0b02bvn5k1ay.jpg",
      "title": "MuscleBlaze MB Super Gainer XXL Chocolate",
      "link": "https://www.1mg.com/otc/muscleblaze-mb-super-gainer-xxl-chocolate-otc353194",
      "info": "jar of 1 kg",
      "rating": "45rating",
      "mrp": "₹2749",
      "discount": "34%off",
      "sellingPrice": "₹1799",
      "star": 3.2
    },
    {
      "id": 6,
      "imgURL": "https://onemg.gumlet.io/image/upload/a_ignore,w_100,h_100,c_fit,q_auto,f_auto/v1600610775/cropped/js7dckybnnewex421qfw.png",
      "title": "Protein Concentrate Powder Chocolate",
      "link": "https://www.1mg.com/otc/muscleblaze-mb-beginner-s-whey-protein-concentrate-powder-chocolate-otc484468",
      "info": "jar of 1 kg",
      "rating": "45rating",
      "mrp": "₹1999",
      "discount": "40%off",
      "sellingPrice": "₹1199",
      "star": 3.3
    }
  ]

const Flashdeals = () => {
  return (
    <div>
      <div className="sunny">
        <p className="topdeal">Flash Deals</p>
      </div>
      <div className="maincontainer">
        <div className="container">
          {/* map through the data and display the cards */}
          {flashdeals.map((item) => (
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
export default Flashdeals;