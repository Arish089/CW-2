

import { Flex,Box } from "@chakra-ui/react";
import "./style.css";

// console.log(featureBrand);
var featureBrand = [
    {
      id: 1,
      image_url:
        "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/lhy8nkmahfcuzgdt0wov.png",
      name: "Dr. Morepen"
    },
    {
      id: 2,
      image_url:
        "	https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/qbzxfojphiqmt8mtlnkh.png",
      name: "Jiva Ayurveda" 
    },
    {
      id: 3,
      image_url:
        "	https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/zdpovu5qoqj7snzwwk0l.png",
      name: "HealthVit"
    },
    {
      id: 4,
      image_url:
        "	https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/sojsfqsqrtwqgdpg5jlc.png",
      name: "Dr Willmar Schwabe India"
    },
    {
      id: 5,
      image_url:
        "	https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/fwpopqkz26dldzczqisd.png",
      name: "Baidyanath",
    },
    {
      id: 6,
      image_url:
        "https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1645420128/rfvnpy3qt4tnacj5ecvk.jpg",
      name: "Protinex",
    },
    {
      id: 7,
      image_url:
        "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/qflet96kkbruxtf5tbxd.png",
      name: "Tetmosol"
    },
  ];

const FeaturedBrand = () => {
  return (
    <>
      <div className="product_container">
        <div className="cat-title">
          <div className="style__heading___pc8n7">Featured brands</div>
          <div>
            <button className=".button">SEE ALL</button>
          </div>
        </div>
        <div style={{cursor:"pointer"}} className="bigcontainer">
          {featureBrand.map((elem) => {
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

export default FeaturedBrand;