import React from "react";
import { Tilt } from "react-tilt";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        👋 Hello, I'm{" "}
        <strong>
          <i>Ashish Thotwe</i>
        </strong>
        , a passionate and motivated full-stack web developer. As a recent
        graduate in{" "}
        <strong>
          <i>B.Sc Bioinformatics</i>
        </strong>
        , I've honed my skills in both front-end and back-end technologies,
        making me adept at turning innovative ideas into robust, user-friendly
        applications. <br />
        🚀 My journey into web development began with a fascination for
        transforming ideas into reality through technology. Proficient in HTML,
        CSS, and JavaScript, I specialize in crafting captivating front-end
        designs. Delving into server-side scripting and database management,
        I've cultivated a well-rounded skill set. Mastering Node.js, Express,
        and MongoDB, I bring a robust foundation to back-end functionality.
        Additionally, I excel in creating responsive designs using Bootstrap for
        a seamless user experience. What sets me apart is not just the tech
        stack; it's the ability to solve real-world problems and adapt to
        evolving technologies. <br />

      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
