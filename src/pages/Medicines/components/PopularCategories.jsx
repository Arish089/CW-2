import React from "react";
import {Box,Flex} from "@chakra-ui/react"

import "./style.css";

var popularBrand = [
    {
      id: 1,
      image_url:
        "	https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/cabpuknnlyyzgqfnb4x5.png",
      name: "Vitamins & Supplements"
    },
    {
      id: 2,
      image_url:
        "	https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/x2z8u1osqutmxvx56hlw.png",
      name: "Ayurveda"
    },
    {
      id: 3,
      image_url:
        "	https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/fbigjgxv2wquqqb3galn.png",
      name: "Healthcare Devices"
    },
    {
      id: 4,
      image_url:
        "	https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/uq1gwxslqqrxxwv6zi6j.jpg",
      name: "Nutritional Drinks"
    },
    {
      id: 5,
      image_url:
        "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/p1blaka183nc1zlil8tq.png",
      name: "Sexual Wellness"
    },
    {
      id: 6,
      image_url:
        "	https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/j7ruar88gacbzksuadjn.png",
      name: "Homeopathy"
    },
    {
      id: 7,
      image_url:
        "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/h8qo5dk91lliwwihbwnf.png",
      name: "Diabetes Care"
    },
  ];

const PopularCategories = () => {
  return (
    <>
      <div className="product_container">
        <div className="cat-title">
          <span className="style__heading___pc8n7">Popular Categories</span>
          <span>
            <button className=".button">SEE ALL</button>
          </span>
        </div>
        <div className="bigcontainer">
          {popularBrand.map((elem) => {
            return (
                <Flex key={elem.id} className="smallcontainer">
                <img src={elem.image_url} alt="image" />
        <Box py={2}>{elem.name}</Box>
              </Flex>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PopularCategories;