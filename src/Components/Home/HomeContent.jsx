import React from "react";
import { Link } from "react-scroll";
import { Col, Container, Row } from "reactstrap";
import deliveryMotor from "../../assets/images/SVG/DeliveryMotor1.png"
import chefsvg from "../../assets/images/SVG/chefsvg.png"
import DeliveryMan from "../../assets/images/SVG/DeliveryMan.png"

const HomeContent = ({ title, mainTitle, subTitle, desc, cover, name }) => {
  return (
    <Container>
      <Row className="grid gap-y-5 place-items-center sm:grid-cols-1 lg:grid-cols-2">
        <Col  className="">
          <h1 className="text-3xl sm:5xl">{title}</h1>
          <h2 className="py-4 text-xl capitalize sm:text-4xl">{mainTitle}</h2>
          <h4 className="flex flex-wrap items-center gap-2 text-xl capitalize sm:text-4xl">
            {subTitle}{" "}
            <span>
              <img
                src={deliveryMotor}
                alt=""
                className="w-16 h-14 motor"
              />
            </span>
          </h4>
          <p className="py-6 text-lg sm:w-[80%] break-all">{desc}</p>
          <button className="px-4 py-3 text-lg text-white rounded-lg bg-Text">
            <Link to="menu" spy={true} smooth={true} duration={500}>Order Now</Link>
          </button>
          <Col className="flex items-center gap-2 py-10 lg:py-20 sm:gap-6" >
            <img
              src={chefsvg}
              className="w-14 h-14"
              alt="avatar"
            />
            <p className="relative text-md sm:text-lg flex flex-wrap w-80 before:contents() before:absolute before:top-0 before:left-0 before:w-2 before:h-14 before:bg-green-800 before:rounded-lg px-5" >
              When you are too lazy to cook, we are just a click away!
            </p>
          </Col>
        </Col>
        <Col className="grid w-full place-items-center ">
          <Col className="rounded-full shadow-2xl w-[340px] h-[340px]  md:h-[600px] md:w-[600px] sm:w-[450px] sm:h-[450px] grid place-items-center" >
            <img className="delivery w-[380px] h-[380px] md:w-[700px] md:h-[600px] object-cover" src={DeliveryMan} alt="delivery"/>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeContent;
