import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import "./style.css";

var aayurved = [
    {
      id: 1,
      image_url: "https://onemg.gumlet.io/image/upload/sdzsl07upy0u3sxckqyj.jpg",
      name: "Ashwagandha",
    },
    {
      id: 2,
      image_url: "https://onemg.gumlet.io/image/upload/qh2zgvxci0mazembq9rs.jpg",
      name: "Shilajit",
    },
    {
      id: 3,
      image_url: "https://onemg.gumlet.io/image/upload/un9aranb98jy80ihbj95.jpg",
      name: "Giloy",
    },
    {
      id: 4,
      image_url: "https://onemg.gumlet.io/image/upload/irazjokdgsiiuw6abiph.jpg",
      name: "Amla",
    },
    {
      id: 5,
      image_url: "https://onemg.gumlet.io/image/upload/qclivlzn55hbfukf2mjn.jpg",
      name: "Aloe vera",
    },
    {
      id: 6,
      image_url: "https://onemg.gumlet.io/image/upload/q3lxrcgk8iok8lvx9lap.jpg",
      name: "Hone",
    },
    {
      id: 7,
      image_url: "https://onemg.gumlet.io/image/upload/uc2vwlgcfu9x2ylp9v0w.jpg",
      name: "Coconut",
    },
  ];

const Ayurved = () => {
  return (
    <>
      <div className="product_container">
        <div className="cat-title">
          <span className="style__heading___pc8n7">Ayurveda</span>
          <span>
            <button>SEE ALL</button>
          </span>
        </div>
        <div className="bigcontainer">
          {aayurved.map((elem) => {
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

export default Ayurved;