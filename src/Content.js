// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/jira.png";
import git from "./assets/images/Skills/git.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

// import project1 from "./assets/images/projects/img1.png";
// import project2 from "./assets/images/projects/img2.png";
// import project3 from "./assets/images/projects/img3.png";
// import person_project from "./assets/images/projects/person.png";

// import avatar1 from "./assets/images/Testimonials/avatar1.png";
// import avatar2 from "./assets/images/Testimonials/avatar2.png";
// import avatar3 from "./assets/images/Testimonials/avatar3.png";
// import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    // {
    //   link: "#projects",
    //   icon: RiProjectorLine,
    // },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Software Engineer",
    firstName: "SANDESH",
    LastName: "MAHARJAN",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "Years of Experinse in Software development",
      },
      {
        count: "5+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY SKILLS",
    skills_content: [
      {
        name: "Python",
        para: "Lorem ipsum text  dummy",
        logo: python,
      },
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      {
        name: "SQL",
        para: "Lorem ipsum text  dummy",
        logo: sketch,
      },
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Git",
        para: "Lorem ipsum text  dummy",
        logo: git,
      },
      {
        name: "Jira",
        para: "Lorem ipsum text  dummy",
        logo: ps,
      },
      {
        name: "Figma",
        para: "Lorem ipsum text  dummy",
        logo: figma,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "Project Management",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  // Projects: {
  //   title: "Projects",
  //   subtitle: "MY CREATION",
  //   image: person_project,
  //   project_content: [
  //     {
  //       title: "Gym Website",
  //       image: project1,
  //     },
  //     {
  //       title: "Social Media web",
  //       image: project2,
  //     },
  //     {
  //       title: "Creative Website",
  //       image: project3,
  //     },
  //   ],
  // },
  // Testimonials: {
  //   title: "Testimonials",
  //   subtitle: "MY CLIENT REVIEWS",
  //   testimonials_content: [
  //     {
  //       review:
  //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
  //       img: avatar1,
  //       name: "JOHN DOE",
  //     },
  //     {
  //       review:
  //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
  //       img: avatar2,
  //       name: "Tom Alex",
  //     },
  //     {
  //       review:
  //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
  //       img: avatar3,
  //       name: "Johnny",
  //     },
  //     {
  //       review:
  //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
  //       img: avatar4,
  //       name: "ROBBIN",
  //     },
  //   ],
  // },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "sandesh11144@gmail.com",
        icon: GrMail,
        link: "mailto:sandesh11144@gmail.com",
      },
      {
        text: "+977-9861288950",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "thisnotsandesh",
        icon: BsInstagram,
        link: "https://www.instagram.com/thisisnotsandesh/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
