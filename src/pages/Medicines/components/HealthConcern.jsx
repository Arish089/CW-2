import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import "./style.css";


var shopByHealthConcerns = [
    {
      id: 1,
      image_url:
        "https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624524227/hgzkyio2rphkn6wjif94.png",
      name: "Diabetes Care",
    },
    {
      id: 2,
      image_url:
        "https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624524269/zo7sc14nqpt6ebeojkvr.png",
      name: "Cardiac Care",
    },
    {
      id: 3,
      image_url:
        "https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624524293/ttagxlnxulsvkyv9fetr.png",
      name: "Stomach Care",
    },
    {
      id: 4,
      image_url:
        "https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624524308/ijgn7fhyq8ig0welmrcp.png",
      name: "Liver Care",
    },
    {
      id: 5,
      image_url:
        "https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624524282/zytsldnf5mvb0u19ydep.png",
      name: "Kidney Care",
    },
    {
      id: 6,
      image_url:
        "https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624524210/ywohqm4txnehsmibypaz.png",
      name: "Bone, Joint & Muscle Care",
    },
    {
      id: 7,
      image_url:
        "https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624524252/hn5bpr1ci2do5kdub51v.png",
      name: "Pain Relief",
    },
    // {
    //     image_url: "https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624524188/hr9vysj9cy0sfjs3mpg0.png",
    //     name: "Respiratory Care"
    // },
    // {
    //     image_url: "https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624524365/t0ehbhfrkughfxoygvs2.png",
    //     name: "Eye Care"
    // }
  ];

const Healthconcern = () => {
  return (
    <>
      <div className="product_container">
        <div className="cat-title">
          <span className="style__heading___pc8n7">
            Shop by Health Concerns
          </span>
          <span>
            <button>SEE ALL</button>
          </span>
        </div>
        <div className="bigcontainer">
          {shopByHealthConcerns.map((elem) => {
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

export default Healthconcern;