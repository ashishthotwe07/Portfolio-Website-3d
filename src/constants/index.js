import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    jquery,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    java,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Education",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: mobile,
    },
    {
      title: "Full Stack Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },

    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "jQuery",
      icon: jquery,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  

  const experiences = [
    {
      degree: "SSC - 10th",
      school: "Shahid Bhagatsingh Vidhyalaya, Ranjangaon(SP)",
      date: "June 2018",
      percentage: "Percentage: 86.20%",
      points: [
        "Achieved excellence in the foundational concepts of science and mathematics.",
        "Developed strong analytical skills through coursework and projects.",
        "Participated in extracurricular activities, fostering teamwork and leadership.",
      ],
    },
    {
      degree: "HSC - 12th Science",
      school: "Deogiri College, Chh. Sambhajinagar",
      date: "July 2020",
      percentage: "Percentage: 77.54%",
      points: [
        "Excelled in advanced science courses, including physics, chemistry, and biology.",
        "Participated in science competitions and gained hands-on experience in laboratories.",
      ],
    },
    {
      degree: "Graduation - B.Sc Bioinformatics",
      school: "Deogiri College, Chh. Sambhajinagar",
      date: "Aug 2020 - April 2023",
      percentage: "Percentage: 75.70%",
      points: [
        "Dived into the interdisciplinary field of bioinformatics, merging biology and computer science.",
        "Completed a notable research project on 'Production of Biofertilizer from Agro Waste', demonstrating critical thinking and problem-solving abilities.",
        "Engaged in internships or relevant extracurricular activities to apply theoretical knowledge to practical scenarios.",
      ],
    },
  ];
  
  

  
  const projects = [
    {
      name: "Placement Management",
      description:
        "A comprehensive web application designed for managing student interviews. It provides an intuitive interface for administrators to add students, add interviews, schedule interviews, track results. Authentication is provided for security.",
      tags: [
        {
          name: "express",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "ejs",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/ashishthotwe07/CareerCampPlacementApp",
    },
    {
      name: "Polling System Api",
      description:
        "An API that allows users to create, manage, and participate in polls. It provides a set of endpoints for creating questions, adding options to questions, viewing questions and their details, deleting questions, and voting on options.",
      tags: [
        {
          name: "express",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/ashishthotwe07/Polling-System-API",
    },
    {
      name: "Authentication System",
      description:
        "In this project, I meticulously designed and developed the authentication web app , which can be a starter template for any website , user authentication can be done by email or also by google sign up or sign in and it is secured by passport library",
      tags: [
        {
          name: "Node js",
          color: "blue-text-gradient",
        },
        {
          name: "Passport ",
          color: "green-text-gradient",
        },

      ],
      image: tripguide,
      source_code_link: "https://github.com/ashishthotwe07/Nodejs-Authentication-System",
    },
  ];
  
  export { services, technologies, experiences,  projects };