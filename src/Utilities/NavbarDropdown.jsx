import React from "react";
import { FaChevronDown } from "react-icons/fa"; 
import { Nav_dropdown } from "../Styled/Navbar_drop";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

export const Navbar_dropdown = () => {
  return (
    <Nav_dropdown>
      <div className="dropdown_div">
        <ul>
          <li>
            <Link to='/products' >
                <Flex alignItems='center'>Health Resource Center
              <FaChevronDown className="dropdown_icon"/></Flex>
            </Link>
            <ul className="dropdown">
              <div className="container1">
                <div className="notborder">
                  <li>
                    <Link >All Diseases</Link>
                  </li>
                  <li>
                    <Link >All Medicines</Link>
                  </li>
                  <li>
                    <Link >
                      Medicines by Therapeutic className
                    </Link>
                  </li>
                </div>
              </div>
            </ul>
          </li>
          <li>
            <Link to='/products'>
                <Flex alignItems='center'>
                Covid Essentials
              <FaChevronDown className="dropdown_icon"  />
                </Flex>
            </Link>
            <ul className="dropdown">
              <div className="container1">
                <div className="notborder">
                  <li>
                    <Link >Covid-19 Self test kits</Link>
                  </li>
                  <li>
                    <Link >Oxygen Cans & Concentrators</Link>
                  </li>
                  <li>
                    <Link >Masks</Link>
                  </li>
                  <li>
                    <Link >Sanitizers & Handwash Products</Link>
                  </li>
                  <li>
                    <Link >Boost Your Immunity</Link>
                  </li>
                  <li>
                    <Link >Thermometer</Link>
                  </li>
                  <li>
                    <Link >Chyawanprash</Link>
                  </li>
                </div>
              </div>
            </ul>
          </li>
          <li>
            <Link to='/products'>
                <Flex alignItems='center'>
                Featured
              <FaChevronDown className="dropdown_icon" />
                </Flex>
            </Link>
            <ul className="dropdown">
              <div className="container1">
                <div className="notborder">
                  <li>
                    <Link >Winter Care</Link>
                  </li>
                  <li className="innerli">
                    <Link >Hair & Scalp Care</Link>
                    <Link >Cough & Cold</Link>
                    <Link >Fever & Headache</Link>
                    <Link >Vaporizers & Nebulizers</Link>
                    <Link >Heating Aid</Link>
                    <Link >Winter Combos</Link>
                  </li>
                  <li>
                    <Link >Tata 1mg Health Products</Link>
                  </li>
                  <li>
                    <Link >Trending Products</Link>
                  </li>
                  <li>
                    <Link >New Arrivals on Tata 1MG</Link>
                  </li>
                </div>
                <div>
                  <li>
                    <Link >Buy More, Save More</Link>
                  </li>
                  <li>
                    <Link >Vaccination</Link>
                  </li>
                  <li>
                    <Link >Minimum 33% Off</Link>
                  </li>
                  <li>
                    <Link >Combos</Link>
                  </li>
                  <li>
                    <Link >Deals of the Day</Link>
                  </li>
                  <li>
                    <Link >Top Brands</Link>
                  </li>
                  <li className="innerli">
                    <Link >Accu-Chek</Link>
                    <Link >Ensure</Link>
                    <Link >Revital</Link>
                    <Link >Optimum Nutrition (ON)</Link>
                    <Link >Dr. Morepen</Link>
                    <Link >Pediasure</Link>
                  </li>
                </div>
              </div>
            </ul>
          </li>
          <li>
            <Link to='/products' >
                <Flex alignItems='center'>
                Products
              <FaChevronDown className="dropdown_icon" />
                </Flex>
            </Link>
            <ul className="dropdown">
              <div className="container1">
                <div className="notborder">
                  <li>
                    <Link >Vitamins & Supplements</Link>
                  </li>
                  <li className="innerli">
                    <Link >Multivitamins</Link>
                    <Link >Vitamins A-Z</Link>
                    <Link >Mineral Supplements</Link>
                  </li>
                  <li>
                    <Link >Nutritional Drinks</Link>
                  </li>
                  <li className="innerli">
                    <Link >Adult Daily Nutrition</Link>
                    <Link >Kids Nutrition (2-15 Yrs)</Link>
                    <Link >For Women</Link>
                  </li>
                  <li>
                    <Link >Health Food & Drinks</Link>
                  </li>
                  <li className="innerli">
                    <Link >Green Tea & Herbal Tea</Link>
                    <Link >Apple Cider Vinegar</Link>
                    <Link >Healthy Snacks</Link>
                  </li>
                </div>
                <div>
                  <li>
                    <Link >Protein Supplements</Link>
                  </li>
                  <li className="innerli">
                    <Link >Whey Protein</Link>
                    <Link >Amino Acids</Link>
                    <Link >Mass Gainers</Link>
                    <Link >Workout Essential</Link>
                    <Link >Fat Burners</Link>
                  </li>
                  <li>
                    <Link >Omega & Fish Oil</Link>
                  </li>
                  <li className="innerli">
                    <Link >Fish Oil</Link>
                    <Link >Cod Liver Oil</Link>
                    <Link >Flax Seed Oil</Link>
                  </li>
                  <li>
                    <Link >Immunity Boosters</Link>
                  </li>
                  <li className="innerli">
                    <Link >Chyawanprasha</Link>
                    <Link >Vitamin C</Link>
                    <Link >Herbal Teas</Link>
                    <Link >Antioxidant Supplements</Link>
                    <Link >Ayurvedic Supplements</Link>
                  </li>
                </div>
                <div>
                  <li>
                    <Link >Specialty Supplements</Link>
                  </li>
                  <li className="innerli">
                    <Link >Green Supplements</Link>
                    <Link >Beauty Supplements</Link>
                    <Link >Pre and Probiotics</Link>
                    <Link >Glucosamine</Link>
                    <Link >Collagen</Link>
                    <Link >Antioxidants</Link>
                    <Link >Biotin</Link>
                  </li>
                  <li>
                    <Link >Weight Management</Link>
                  </li>
                  <li className="innerli">
                    <Link >Weight Management Herbs</Link>
                    <Link >Meal Replacements</Link>
                    <Link >Weight Gain</Link>
                  </li>
                </div>
              </div>
            </ul>
          </li>
          <li>
            <Link to='/products'>
              <Flex alignItems='center'>
              Diabetes
              <FaChevronDown className="dropdown_icon" />
              </Flex>
            </Link>
            <ul className="dropdown">
              <div className="container1">
                <div className="notborder">
                  <li>
                    <Link >Devices</Link>
                  </li>
                  <li className="innerli">
                    <Link >Blood Glucose Monitors</Link>
                    <Link >Test Strips & Lancets</Link>
                    <Link >Syringes & Pens</Link>
                  </li>
                  <li>
                    <Link >Diabetic Medicines</Link>
                  </li>
                  <li className="innerli">
                    <Link >
                      Vitamins, Minerals & Antioxidants
                    </Link>
                    <Link >Homeopathy Medicines</Link>
                    <Link >Ayurvedic Medicines</Link>
                  </li>
                </div>
                <div>
                  <li>
                    <Link >Sugar Substitutes</Link>
                  </li>
                  <li>
                    <Link >Diabetic Diet</Link>
                  </li>
                  <li className="innerli">
                    <Link >Juices & Vinegars</Link>
                    <Link >Superfoods</Link>
                  </li>
                  <li>
                    <Link >Diabetic Foot Health</Link>
                  </li>
                </div>
              </div>
            </ul>
          </li>
          <li>
            <Link to='/products'>
                <Flex alignItems='center'>
                Healthcare Devices
              <FaChevronDown className="dropdown_icon" />
                </Flex>
            </Link>
            <ul className="dropdown">
              <div className="container2">
                <div className="notborder">
                  <li>
                    <Link >Masks (N95, Surgical and more)</Link>
                  </li>
                  <li className="innerli">
                    <Link >Face Shield</Link>
                    <Link >Surgical Masks</Link>
                    <Link >N95 Masks</Link>
                  </li>
                  <li>
                    <Link >Oxygen Concentrators & Cans</Link>
                  </li>
                  <li>
                    <Link >BP Monitors</Link>
                  </li>
                  <li>
                    <Link >Nebulizers & Vaporizers</Link>
                  </li>
                  <li>
                    <Link >Oximeters & Pedometers</Link>
                  </li>
                  <li>
                    <Link >Vital Signs Monitors & Wearables</Link>
                  </li>
                  <li>
                    <Link >Weighing Scales</Link>
                  </li>
                </div>
                <div>
                  <li>
                    <Link >Thermometers</Link>
                  </li>
                  <li className="innerli">
                    <Link >IR Thermometers</Link>
                  </li>
                  <li>
                    <Link >Body Massager</Link>
                  </li>

                  <li>
                    <Link >Diabetes Monitors</Link>
                  </li>
                  <li>
                    <Link >Mobility Equipments</Link>
                  </li>
                  <li>
                    <Link >Exercise Equipments</Link>
                  </li>
                  <li>
                    <Link >Doctor's Corner</Link>
                  </li>
                  <li className="innerli">
                    <Link >Stethoscopes</Link>
                    <Link >Tapes & Bandages</Link>
                    <Link >Clinical Diagnostic Equipments</Link>
                    <Link >Dressings & Wound Care</Link>
                  </li>
                </div>
                <div>
                  <li>
                    <Link >Supports & Braces</Link>
                  </li>
                  <li className="innerli">
                    <Link >Neck & Shoulder Suppor</Link>
                    <Link >Knee & Leg Support</Link>
                    <Link >Back & Abdomen Support</Link>
                    <Link >Ankle & Foot Support</Link>
                    <Link >Hand & Wrist Braces</Link>
                    <Link >Arm & Elbow Support</Link>
                    <Link >Cervical Pillows</Link>
                    <Link >Compression support & sleeves</Link>
                    <Link >Heel support</Link>
                  </li>
                </div>
              </div>
            </ul>
          </li>
          <li>
            <Link to='/products'>
              <Flex alignItems='center'>
              Personal Care{" "}
              <FaChevronDown className="dropdown_icon" />
              </Flex>
            </Link>
            <ul className="dropdown">
              <div className="container2">
                <div className="notborder">
                  <li>
                    <Link >Sexual Wellness</Link>
                  </li>
                  <li className="innerli">
                    <Link >Condoms</Link>
                    <Link >Lubricants & Massage Gels</Link>
                    <Link >Personal body massagers</Link>
                    <Link >Men Performance Enhancers</Link>
                    <Link >Sexual Health Supplements</Link>
                  </li>
                  <li>
                    <Link >Skin Care</Link>
                  </li>
                  <li className="innerli">
                    <Link >Body Lotions</Link>
                    <Link >Mosquito Repellents</Link>
                    <Link >Lip Balm</Link>
                    <Link >Acne Care</Link>
                    <Link >Bath Essentials</Link>
                    <Link >Facewash</Link>
                    <Link >Sanitizers & Handwash</Link>
                    <Link >Sunscreen Products</Link>
                  </li>
                </div>
                <div>
                  <li>
                    <Link >Baby Care</Link>
                  </li>
                  <li className="innerli">
                    <Link >Baby & Infant Food</Link>
                    <Link >Baby Diapers, wipes & more</Link>
                    <Link >Nursing & Feeding</Link>
                    <Link >Baby Bath Essentials</Link>
                    <Link >Baby Skin Care</Link>
                    <Link >Baby Healthcare</Link>
                    <Link >Baby Oral Health</Link>
                  </li>
                  <li>
                    <Link >Hair Care</Link>
                  </li>
                  <li className="innerli">
                    <Link >Shampoo</Link>
                    <Link >Hair Conditioners</Link>
                    <Link >Hair Growth Supplements</Link>
                    <Link >Hair Oils</Link>
                    <Link >Hair Growth for Men</Link>
                  </li>
                </div>
                <div>
                  <li>
                    <Link >Elderly Care</Link>
                  </li>
                  <li className="innerli">
                    <Link >Adult Diapers</Link>
                    <Link >Bone & Joint Health</Link>
                    <Link >Living & Safety Aids</Link>
                    <Link >Orthopaedic Supports</Link>
                  </li>
                  <li>
                    <Link >Women Care</Link>
                  </li>
                  <li className="innerli">
                    <Link >Feminine Hygiene</Link>
                    <Link >Women Care Supplements</Link>
                    <Link >Mother Care</Link>
                    <Link >Menopause</Link>
                    <Link >Polycystic Ovary Syndrome</Link>
                  </li>
                </div>
                <div>
                  <li>
                    <Link >Men Care</Link>
                  </li>
                  <li className="innerli">
                    <Link >Men Grooming</Link>
                  </li>
                  <li>
                    <Link >Oral Care</Link>
                  </li>
                  <li>
                    <Link >Pet Care</Link>
                  </li>
                  <li className="innerli">
                    <Link >Pet Grooming</Link>
                    <Link >Pet Food</Link>
                    <Link >Pet Health Care</Link>
                  </li>
                </div>
              </div>
            </ul>
          </li>
          <li>
            <Link to='/products'>
                <Flex alignItems='center'>
                Health Conditions
              <FaChevronDown className="dropdown_icon" />
                </Flex>
            </Link>
            <ul className="dropdown">
              <div className="container2">
                <div className="notborder">
                  <li>
                    <Link >Stomach Care</Link>
                  </li>
                  <li>
                    <Link >Heart Care</Link>
                  </li>
                  <li>
                    <Link >Bone, Joint & Muscle Care</Link>
                  </li>
                  <li>
                    <Link >Pain Relief</Link>
                  </li>
                  <li className="innerli">
                    <Link >Heating Aids</Link>
                  </li>
                  <li>
                    <Link >Eye Care</Link>
                  </li>
                  <li className="innerli">
                    <Link >Eye Lubricants</Link>
                  </li>
                  <li>
                    <Link >Ear Care</Link>
                  </li>
                  <li className="innerli">
                    <Link >Hearing Aid Devices</Link>
                  </li>
                </div>
                <div>
                  <li>
                    <Link >First Aid</Link>
                  </li>
                  <li>
                    <Link >Liver Care</Link>
                  </li>
                  <li>
                    <Link >Cold & Cough</Link>
                  </li>
                  <li>
                    <Link >Fever</Link>
                  </li>
                  <li>
                    <Link >Mental Wellness</Link>
                  </li>
                  <li>
                    <Link >Kidney Care</Link>
                  </li>
                  <li>
                    <Link >Respiratory Care</Link>
                  </li>
                  <li>
                    <Link >Piles, Fissures & Fistula</Link>
                  </li>
                  <li>
                    <Link >Smoking Cessation</Link>
                  </li>
                </div>
              </div>
            </ul>
          </li>
          <li>
            <Link to='/products'>
              <Flex alignItems='center'>
              Ayurveda Products
              <FaChevronDown className="dropdown_icon" />
              </Flex>
              
            </Link>
            <ul className="dropdown">
              <div className="container2">
                <div className="notborder">
                  <li>
                    <Link >Ayurveda Top Brands</Link>
                  </li>
                  <li className="innerli">
                    <Link >Dabur</Link>
                    <Link >Sri Sri Tattva</Link>
                    <Link >Baidyanath Products</Link>
                    <Link >Kerala Ayurveda</Link>
                    <Link >Jiva Ayurveda</Link>
                    <Link >Tata 1mg Herbal Supplements</Link>
                    <Link >Patanjali</Link>
                  </li>
                  <li>
                    <Link >Popular categories</Link>
                  </li>
                  <li className="innerli">
                    <Link >Herbal Juice</Link>
                    <Link >Herbal Juice</Link>
                    <Link >Ayurveda Personal Care</Link>
                    <Link >Ayurvedic Immunity Boosters</Link>
                    <Link >Explore Popular Herbs</Link>
                    <Link >Herbal Supplements</Link>
                  </li>
                </div>
                <div>
                  <li>
                    <Link >Top Health Concerns</Link>
                  </li>
                  <li className="innerli">
                    <Link >Ayurvedic Respiratory care</Link>
                    <Link >Cough, Cold & Fever</Link>
                    <Link >Sexual Wellness</Link>
                    <Link >Bone, Joint and Muscle Care</Link>
                    <Link >Stomach Care</Link>
                    <Link >Diabetes Care</Link>
                    <Link >Liver Care</Link>
                    <Link >Mind Care</Link>
                    <Link >Cardiac Care</Link>
                  </li>
                  <li>
                    <Link >Unani Medicines</Link>
                  </li>
                  <li className="innerli">
                    <Link >Hamdard Unani</Link>
                    <Link >AMU Dawakhana</Link>
                    <Link >Rex Remedies</Link>
                    <Link >Dehlvi Remedies</Link>
                  </li>
                </div>
              </div>
            </ul>
          </li>
          <li>
            <Link to='/products'>
              <Flex alignItems='center'>
              Homeopathy{" "}
              <FaChevronDown className="dropdown_icon" />
              </Flex>
              
            </Link>
            <ul className="dropdown">
              <div className="container2">
                <div className="notborder">
                  <li>
                    <Link >Homeopathy Top Brands</Link>
                  </li>
                  <li className="innerli">
                    <Link >SBL Homoeopathy</Link>
                    <Link >Dr Reckeweg</Link>
                    <Link >Dr Willmar Schwabe India</Link>
                    <Link >Adel Pekana</Link>
                    <Link >BJAIN Homeopathy</Link>
                    <Link >Bakson's</Link>
                    <Link >Allen</Link>
                    <Link >Wheezal</Link>
                    <Link >Dr Willmar Schwabe Germany</Link>
                    <Link >Haslab</Link>
                    <Link >Medisynth</Link>
                    <Link >Boiron</Link>
                    <Link >Bhandari</Link>
                    <Link >Dr Bakshi Bakson</Link>
                    <Link >Dr Batra's</Link>
                  </li>
                  <li>
                    <Link >Homeopathy Wellness Combos</Link>
                  </li>
                </div>
                <div>
                  <li>
                    <Link >Homeopathy Popular Categories</Link>
                  </li>
                  <li className="innerli">
                    <Link >
                      Homeopathic Care for Cold & Cough
                    </Link>
                    <Link >Respiratory Wellness</Link>
                    <Link >Homeopathy Covid Essentials</Link>
                    <Link >Sexual Health</Link>
                    <Link >Hair Care Products</Link>
                    <Link >Skin Care Products</Link>
                    <Link >Children's Health</Link>
                    <Link >Women's Health</Link>
                  </li>
                  <li>
                    <Link >Homeopathy Medicines</Link>
                  </li>
                  <li className="innerli">
                    <Link >Homeopathic Drops</Link>
                    <Link >Dilutions</Link>
                    <Link >Mother Tinctures</Link>
                    <Link >Trituration</Link>
                    <Link >Bio Combinations</Link>
                    <Link >Millesimal LM Potencies</Link>
                    <Link >Biochemics</Link>
                    <Link >Bach Flower Remedies</Link>
                  </li>
                </div>
              </div>
            </ul>
          </li>
        </ul>
      </div>
    </Nav_dropdown>
  );
};