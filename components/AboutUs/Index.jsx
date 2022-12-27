import Image from "next/image";
import AIDEPTLOGO from "../../images/logos/aidept.png";
import SectionTitle from "../shared/SectionTitle";
import IEEELOGO from "../../images/logos/IEEELOGO.png";
import ParagSection from "../shared/ParagSection";
import globe from "../../images/shapes/globe.png";
import maqam from "../../images/shapes/MaqamWhite.png";
const AboutUs = () => {
  return (
    <section id="about-us">
      {/* <div className=" z-0 h-[100px] max-w-[100%] bg-gradient-to-t from-[#3177ab] to-qiskit-white"></div> */}

      <div className="relative about-bg py-16">
        <div className="absolute top-1/4 right-4 lg:w-[55px] h-[32px] w-[32px] lg:h-[55px] 2xl:w-[82px] 2xl:h-[82px]">
          <Image src={globe} layout="fill" />
        </div>

        <div className="absolute bottom-8 left-4 w-[32px] h-[32px] md:w-[40px] md:h-[40px] lg:w-[55px] lg:h-[55px] 2xl:w-[82px] 2xl:h-[82px]">
          <Image src={globe} layout="fill" />
        </div>

        <div className="absolute bottom-1/2 left-8 w-[75px] h-[53px] md:w-[40px] md:h-[40px] lg:w-[106px] lg:h-[76px] 2xl:w-[160px] 2xl:h-[112px]">
          <Image src={maqam} layout="fill" />
        </div>
        <div className="w-10/12 mx-auto flex flex-col gap-8">
          <SectionTitle isWhite={true} title={"About us"} />
          <div className="flex flex-col gap-12 lg:gap-28">
            <ParagSection
              keyword1={"The IEEE GHRIETN Student Branch "}
              paragraph1={` is formed to bring members access to the industry’s most essential technical information, networking opportunities, career development tools, and many other exclusive benefits. To foster an interest in the engineering profession and to tap the `}
              keyword2={" latent technical excellence of the youth,"}
              paragraph2={` IEEE provides for the setting up of Student Branches in technical institutions throughout the world, which provide an active link between the leading innovations and technologies of the present day and the young minds pursuing a career in technical courses.`}
              img={IEEELOGO}
              reverse={false}
              redirect={"https://edu.ieee.org/in-ghrietn/"}
            ></ParagSection>
            <ParagSection
              keyword1={"Department of Artificial Intelligence "}
              paragraph1={`is a Academics Branch of G H Raisoni Institute of Engineering And Technology Nagpur (maharashtra) `}
              keyword2={" This specialized branch is offered "}
              paragraph2={`to enable students to develop smart machines with a cutting-edge combination like, Artificial Intelligence, Machine Learning, Data Science and Statistics, Big Data Analytics, Computer Vision, Business Intelligence, Deep Learning and Reinforce learning, Robotics and etc.`}
              img={AIDEPTLOGO}
              reverse={true}
              redirect={"https://ghrietn.raisoni.net/artificial-intelligence"}
            ></ParagSection>
          </div>
        </div>
      </div>
      {/* <div className=" z-0 h-[100px] max-w-[100%] bg-gradient-to-b from-qiskit-blue-normal to-qiskit-white"></div> */}
    </section>
  );
};

export default AboutUs;
