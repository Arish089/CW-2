import {
  Add_div,
  CarePlan_div,
  Heading_div,
} from "../Styled/Ad";

import { Swiper, SwiperSlide, } from 'swiper/react';
import {Pagination,Autoplay} from 'swiper/modules'
import 'swiper/css'; 
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const sliderImg=[
  {
    imageLink:"https://onemg.gumlet.io/9632fa8b-10d0-48f3-b76b-1d360a7385f3_1661251278.jpg?w=899&h=200&format=auto"
  },
  {
    imageLink:"https://onemg.gumlet.io/a_ignore,w_899,h_200,c_fit,q_auto,f_auto/lg5cfkmouja5mdf9itws.png"
  },
  {
    imageLink:"https://onemg.gumlet.io/a_ignore,w_899,h_200,c_fit,q_auto,f_auto/a7v2ipno4azmdu6cnjuu.png"
  },
  {
    imageLink:"https://onemg.gumlet.io/a_ignore,w_899,h_200,c_fit,q_auto,f_auto/kcdcsb5yrkpxok5bpm8y.png"
  },
  {
    imageLink:"https://onemg.gumlet.io/image/upload/w_899,h_200,,a_ignore,q_auto,f_auto/v1651478982/txwuakgo0hozrepgde4b.jpg"
  }
]


const Advertisement = () => {
  return (
    <>
      <Add_div>
        <div>
          <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 5000 }}
            className="mySwiper"
          >
            {
              sliderImg?.map((item)=> <SwiperSlide key={item.imageLink}>
              <img
                src={item.imageLink}
              />
            </SwiperSlide>
            )
            }
          </Swiper>
        </div>
        <div>
          <img
            src="https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/lp3vc9cq0xcam20cvxe8.png"
            alt="Rx"
          />
        </div>
      </Add_div>
      <Heading_div>
        <h1>Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform</h1>
      </Heading_div>
      <CarePlan_div>
        <img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1647251796/ueyxzzku83yuvpqxyrwe.png" />
      </CarePlan_div>
    </>
  );
};

export default Advertisement;