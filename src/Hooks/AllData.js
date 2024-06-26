import { useEffect, useState } from "react";
// for work_images
import work1 from "../assets/images/work_images/1.jpg";
import work2 from "../assets/images/work_images/2.jpg";
import work3 from "../assets/images/work_images/3.jpg";
import work4 from "../assets/images/work_images/4.jpg";
import work5 from "../assets/images/work_images/5.jpg";
import work6 from "../assets/images/work_images/6.jpg";
import work7 from "../assets/images/work_images/7.jpg";
import work8 from "../assets/images/work_images/8.jpg";
import work9 from "../assets/images/work_images/9.jpg";
import work10 from "../assets/images/work_images/10.jpg";
import work11 from "../assets/images/work_images/11.jpg";
import work13 from "../assets/images/work_images/13.jpg";
// works small images
import workSmall1 from "../assets/images/work_images/small/1.jpg";
import workSmall2 from "../assets/images/work_images/small/2.jpg";
import workSmall3 from "../assets/images/work_images/small/3.jpg";
import workSmall4 from "../assets/images/work_images/small/4.jpg";
import workSmall5 from "../assets/images/work_images/small/5.jpg";
import workSmall6 from "../assets/images/work_images/small/6.jpg";
import workSmall7 from "../assets/images/work_images/small/7.jpg";
import workSmall8 from "../assets/images/work_images/small/8.jpg";
import workSmall9 from "../assets/images/work_images/small/9.jpg";
import workSmall10 from "../assets/images/work_images/small/10.jpg";
import workSmall11 from "../assets/images/work_images/small/11.jpg";
import workSmall13 from "../assets/images/work_images/small/13.jpg";
// blog post images
import blog6 from "../assets/images/blog_images/6.jpg";
import blog4 from "../assets/images/blog_images/4.jpg";
import blog2 from "../assets/images/blog_images/2.jpg";
import blog1 from "../assets/images/blog_images/1.jpg";
import blog3 from "../assets/images/blog_images/3.jpg";
import blog5 from "../assets/images/blog_images/5.jpg";
// blog image small
import blogSmall6 from "../assets/images/blog_images/small/6.jpg";
import blogSmall4 from "../assets/images/blog_images/small/4.jpg";
import blogSmall2 from "../assets/images/blog_images/small/2.jpg";
import blogSmall1 from "../assets/images/blog_images/small/1.jpg";
import blogSmall3 from "../assets/images/blog_images/small/3.jpg";
import blogSmall5 from "../assets/images/blog_images/small/5.jpg";

import img1 from "../assets/images/slider/brand-1.png";
import img2 from "../assets/images/slider/brand-2.png";
import img3 from "../assets/images/slider/brand-3.png";
import img4 from "../assets/images/slider/brand-4.png";
import img5 from "../assets/images/slider/brand-5.png";
import img6 from "../assets/images/slider/brand-6.png";
import img7 from "../assets/images/slider/brand-7.png";
import img8 from "../assets/images/slider/brand-8.png";
import img9 from "../assets/images/slider/brand-9.png";
import img10 from "../assets/images/slider/brand-10.png";
import img11 from "../assets/images/slider/brand-11.png";
import img12 from "../assets/images/slider/brand-12.png";
//  icon use as img here
import icon from "../assets/images/icons/icon-1.svg";
import icon1 from "../assets/images/icons/icon-2.svg";
import icon2 from "../assets/images/icons/icon-3.svg";
import icon3 from "../assets/images/icons/icon-4.svg";
import icon4 from "../assets/images/icons/icon-5.svg";
import icon5 from "../assets/images/icons/icon-6.svg";
// contact image
import iconPhone from "../assets/images/contact/phone-call 1.png";
import iconEmail from "../assets/images/contact/email 1.png";
import iconMap from "../assets/images/contact/map 1.png";
import { CgNotes } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { FiCodesandbox } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const AllData = () => {
  const [check, setCheck] = useState(false);
  const [local, setLocal] = useState(localStorage.getItem("theme"));
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  // dark and light theme controls
  useEffect(() => {
    const themeValue = localStorage?.getItem("theme");

    if (!themeValue) {
      setCheck(false);
      localStorage.setItem("theme", "light");
    } else {
      themeValue === "dark" && setCheck(true);
      themeValue === "light" && setCheck(false);
    }

    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, []);

  // Create and light theme function
  const handleTheme = (value) => {
    if (value === "light") {
      setCheck(false);
      localStorage.setItem("theme", "light");
      setLocal("light");
    } else {
      setCheck(true);
      localStorage.setItem("theme", "dark");
      setLocal("dark");
    }
    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  // fillter portfilo data
  const handleData = (text) => {
    if (text === "All") {
      setData(workItems);
    } else {
      const findData = workItems.filter((item) => item.tag === text);
      setData(findData);
    }
  };

  // find items for portfilo  modal open
  const handleModelData = (id) => {
    const find = workItems.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // find items for Blogs  modal open
  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // Active navlinks function
  function NavLink({
    to,
    className,
    activeClassName,
    inactiveClassName,
    ...rest
  }) {
    let location = useLocation();
    let isActive = location.pathname === to;
    let allClassNames =
      className + (isActive ? `${activeClassName}` : `${inactiveClassName}`);
    return <Link className={allClassNames} to={to} {...rest} />;
  }

  // Elements for protfilo section
  const workItems = [
    {
      id: "1",
      tag: "Front-end Development",
      title: "Luxury Fashion",
      img: work1,
      imgSmall: workSmall1,
      bg: "#f8f5e8",
      client: "Vogue Vista Ventures",
      langages: "ReactJS, Javascript",
      link: "",
      linkText: "",
      description:
        "Built a product details page and accounts page using React for a high-end fashion client, tested with Mocha/Chai/Sinon, while introducing Retrospectives to enhance developer synergy.",
    },
    {
      id: "2",
      tag: "Back-end Development",
      title: "Biometric Identification",
      img: work2,
      imgSmall: workSmall2,
      bg: "#9cd9f7",
      client: "SafeCircle Technologies",
      langages: "Java",
      link: "",
      linkText: "",
      description:
        "Facilitated the integration and enhancement of an acquired application at a biometric identification company, involving app setup, deployment, bilingual documentation translation, and the implementation of GitHub Actions and Terragrunt/Terraform for infrastructural code standardization. Also Managed over 20 individual microservices, while improving AWS IAM practices for Federal GovCloud applications, facilitating inter-application communication using Java & Kafka, and leading the team's transition from Circle CI to GitHub Actions for Continuous Improvement and Continuous Delivery (CI/CD)",
      projectType: 'Application Developer'
    },
    {
      id: "3",
      tag: "Full-stack Development",
      title: "Education Application",
      img: work3,
      imgSmall: workSmall3,
      bg: "#8bbdf7",
      client: "MentorMind Education",
      langages: "ReactJS, Typescript, Rails",
      link: "",
      linkText: "",
      description:
        "Spearheaded development of an application for an education support platform using React, TypeScript, and Rails, leading a team in adopting coding best practices and closely working with stakeholders to create a tool specifically for coaches and educators.",
    },
    {
      id: "4",
      tag: "Full-stack Development",
      title: "Online Programming-Learning Application",
      img: work4,
      imgSmall: workSmall4,
      bg: "#E9FAFF",
      client: "Envato",
      langages: "ReactJS, Rails, GoLang",
      link: "",
      linkText: "",
      description:
        "Implemented a subscription pause feature for an online programming client and updated course landing pages with new styling using JavaScript, React, and a Rails backend, while streamlining Agile processes for more efficient group check-ins.",
    },
    {
      id: "5",
      tag: "Full-stack Development",
      title: "Food Delivery",
      img: work5,
      imgSmall: workSmall5,
      bg: "#d19c6a",
      client: "MealCraft Delivery",
      langages: "ReactJS, Rails, Rails",
      link: "",
      linkText: "",
      description:
        "Developed an in-store locator using UIkit and Rails at a food delivery client, enhanced the referral program with React TypeScript, improved admin tools for customer service efficiency, while leading the team in Agile methodologies for pair programming and test-driven development of new features.",
    },
    {
      id: "6",
      tag: "Consultant",
      title: "Consultant Management",
      img: work6,
      imgSmall: workSmall6,
      bg: "#f8f5ee",
      client: "Stride",
      langages: "Soft skills",
      link: "https://stride.build",
      linkText: "www.stride.build",
      description:
        "As a Hiring Manager, I Led a multifaceted interview process, collaborating with HR on candidate evaluations, and Client Principals in optimizing candidate-client matches. As a consultant manager, I managed a diverse team of consultants, crafting and implementing goal-oriented development plans to facilitate career progression and align with organizational objectives. As a mentor, I Created the Mentorship program, managing goal-oriented development plans for consultants. I also co-founded and hosted “The Rabbit Hole – The Definitive Developers Podcast” focusing on weeklydiscussions of Agile software developer-related topics.",
      projectType: 'Internal Consultant & Manager',
      isReal: true,
    },
    {
      id: "7",
      tag: "Full-stack Development",
      title: "Advertising",
      img: work7,
      imgSmall: workSmall7,
      bg: "#aeb6bb",
      client: "TailorTouch Digital",
      langages: "ReactJS, GoLang",
      link: "",
      linkText: "",
      description:
        "Learned Golang to cohesively collaborate with fellow developers and designers at a major advertising organization, streamlining the advertising campaign process for optimal efficiency and impact.",
    },
    {
      id: "8",
      tag: "Consultant",
      title: "Energy/Utility",
      img: work8,
      imgSmall: workSmall8,
      bg: "#dfe2e3",
      client: "VitalFlow Power Corp",
      langages: "Agile Framework",
      link: "",
      linkText: "",
      description:
        "Facilitated various meetings with stakeholders to identify pain-points within the distribution / transmission process of distributing energy and connecting other organization to find business needs.",
    },
    {
      id: "9",
      tag: "Back-end Development",
      title: "Finance",
      img: work9,
      imgSmall: workSmall9,
      bg: "#f6f6f6",
      client: "UBS Investment Bank",
      langages: "Java",
      link: "https://www.ubs.com/global/en/investment-bank.html",
      linkText: "www.ubs.com",
      description:
        "Led the translation of an in-house FX pricing application contract from Python to Java, implemented new FX product pricing, and developed a JMS application processing over 10,000 messages daily, enhancing revenue generation and operational efficiency. Also ensured compliance with the Dodd-Frank Act by formatting XML messages to FpML standards, improved code quality and performance using TestNG, and generated comprehensive weekly project reports using tools like Microsoft Excel, Word, VisualVM, and JConsole.",
      projectType: 'Application Developer',
      isReal: true,
    },
    {
      id: "10",
      tag: "Full-stack Development",
      title: "Publishing",
      img: work10,
      imgSmall: workSmall10,
      bg: "#fae098",
      client: "Simon and Schuster",
      langages: "Rails, Javascript",
      link: "https://www.simonandschuster.com/",
      linkText: "www.simonandschuster.com",
      description:
        "Maintained and updated the Major Publishing Company's website front end using Rails, handling weekly deployments, issue resolution from customer feedback, and day-to-day emergencies, all within an Agile framework.",
      isReal: true,
    },
    {
      id: "11",
      tag: "Back-end Development",
      title: "DevOps -- with Rails",
      img: work11,
      imgSmall: workSmall11,
      bg: "#efeadc",
      client: "New York Times",
      langages: "Rails",
      link: "https://www.nytimes.com/",
      linkText: "www.nytimes.com",
      description:
        "Enhanced a web application for provisioning and bootstrapping cloud resources at the New York Times across various providers using Rails, ensured code quality through consultations and optimal unit testing for continuous integration and delivery",
      projectType: 'Application Developer',
      isReal: true,
    },
    {
      id: "12",
      tag: "Full-stack Development",
      title: "Assurance -- Serverless and AWS",
      img: work13,
      imgSmall: workSmall13,
      bg: "#4d90c4",
      client: "NexusAssure Global",
      langages: "NodeJS, Angular, C#",
      link: "https://www.freepik.com/free-photos-vectors/market-logo",
      linkText: "www.freepik.com",
      description:
        "Developed a comprehensive in-house application for an assurance company using AWS Lambda and the Serverless Framework.",
    },
  ];
  const [data, setData] = useState(workItems);

  // Elements for Blogs section
  const blogsData = [
    {
      id: "1",
      img: blog1,
      imgSmall: blogSmall1,
      date: "177 April",
      category: "Inspiration",
      title: "How to Own Your Audience by Creating an Email List.",
      bg: "#FCF4FF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "4",
      img: blog4,
      imgSmall: blogSmall4,
      date: "000 April",
      category: "Inspiration",
      title: "Everything You Need to Know About Web Accessibility.",
      bg: "#EEFBFF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "2",
      img: blog2,
      imgSmall: blogSmall2,
      date: "21 April",
      category: "Web Design",
      title: "The window know to say beside you",
      bg: "#FFF0F0",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "5",
      img: blog5,
      imgSmall: blogSmall5,
      date: "27 April",
      category: "Inspiration",
      title: "Top 10 Toolkits for Deep Learning in 2021.",
      bg: "#FCF4FF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "3",
      img: blog3,
      imgSmall: blogSmall3,
      date: "27 April",
      category: "Inspiration",
      title: "How to Own Your Audience by Creating an Email List.",
      bg: "#FCF4FF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "6",
      img: blog6,
      imgSmall: blogSmall6,
      date: "27 April",
      category: "Inspiration",
      title: "Everything You Need to Know About Web Accessibility.",
      bg: "#EEFBFF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
  ];

  // Menu items for Homepage One
  const menuItem = [
    {
      id: "01",
      name: "Home",
      link: "/home/homePage",
      icon: <AiOutlineHome />,
    },
    {
      id: "02",
      name: "About",
      link: "/home/about",
      icon: <FaRegUser />,
    },
    {
      id: "06",
      name: "Resume",
      link: "/home/resume",
      icon: <CgNotes />,
    },
    {
      id: "03",
      name: "Works",
      link: "/home/works",
      icon: <FiCodesandbox />,
    },
    // {
    //   id: "04",
    //   name: "Blogs",
    //   link: "/home/blogs",
    //   icon: <FaBlogger />,
    // },

    {
      id: "05",
      name: "Contact",
      link: "/home/contact",
      icon: <RiContactsBookLine />,
    },
  ];

  // Menu items for Homepage Two
  const menuItemTwo = [
    {
      id: "01",
      name: "About",
      link: "/em/about",
      icon: <FaRegUser />,
    },
    {
      id: "02",
      name: "Resume",
      link: "/em/resume",
      icon: <CgNotes />,
    },
    {
      id: "03",
      name: "Works",
      link: "/em/works",
      icon: <FiCodesandbox />,
    },
    // {
    //   id: "04",
    //   name: "Blogs",
    //   link: "/em/blogs",
    //   icon: <FaBlogger />,
    // },
    {
      id: "05",
      name: "Contact",
      link: "/em/contact",
      icon: <RiContactsBookLine />,
    },
  ];

  // Slider image for Clients
  const sliderImg = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10, 
    img11,
    img12,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10, 
    img11,
    img12,
  ];

  // serviceArray items for about page
  const serviceArray = [
    {
      id: "1",
      icon: icon5,
      title: "Front-End Development",
      des: "I have a mobile design first approach, and ensuring my work is accessibility to anyone who sees my work",
      color: "#D566FF",
      bg: "#FCF4FF",
    },
    {
      id: "2",
      icon: icon,
      title: "Back-End Development",
      des: "A vast experience in back end development including NodeJS, Ruby, and Java",
      color: "#DDA10C",
      bg: "#FEFAF0",
    },
    {
      id: "3",
      icon: icon2,
      title: "TDD",
      des: "In any part of development, Test Driven Development is the upmost important thing. Who wants a call at 4am to fix a bug?",
      color: "#8774FF",
      bg: "#FCF4FF",
    },
    {
      id: "4",
      icon: icon4,
      title: "CI/CD",
      des: "Continous Improvement for myself, and the developer lifecycle is key to a healthier work environment.",
      color: "#FF6080",
      bg: "#FFF4F4",
    },
    {
      id: "5",
      icon: icon3,
      title: "Management",
      des: "I manage my teams leading from the front and provide high energy to keep folks motivated",
      color: "#FF75D8",
      bg: "#FFF0F8",
    },
    {
      id: "6",
      icon: icon1,
      title: "Consultant",
      des: "The vast amounts of domains that I've worked in helps me design and solve problems for future clients",
      color: "#269FFF",
      bg: "#F3FAFF",
    },
  ];

  // educationArray items for Resume page
  const educationArray = [
    {
      id: 1,
      date: "2008-2010",
      title: "Bachelors Degree in Computer Systems Technology",
      place: "CUNY New York City College of Technology, Brooklyn, NY",
      bg: "#FFF4F4",
    },

    {
      id: 2,
      date: "2005-2008",
      title: "Associates Degree in Computer Science",
      place: "CUNY New York City College of Technology, Brooklyn, NY",
      bg: "#FFF1FB",
    },

    {
      id: 3,
      date: "2000-2004",
      title: "High School Diploma, Instrumental Music",
      place: "Fiorello H Laguardia High School of Music & Art and Performing Arts, New York, NY",
      bg: "#FFF4F4",
    },
  ];
  // experiencesArray items for Resume page
  const experiencesArray = [
    {
      id: 1,
      date: "2015-2024",
      title: "Lead Software Developer Consultant",
      place: "Stride",
      bg: "#EEF5FA",
    },

    {
      id: 2,
      date: "2013-2015",
      title: "Software Developer Consultant",
      place: "Cyrus Innovations",
      bg: "#F2F4FF",
    },

    {
      id: 3,
      date: "2011-2013",
      title: "Software Developer",
      place: "FDM Group.",
      bg: "#EEF5FA",
    },
  ];
  // awardsArray items for Resume page
  const awardsArray = [
    {
      id: 1,
      date: "2019",
      title: "Over 500k unique listens",
      place: "The Rabbit Hole -- The Definitive Developers Podcast",
      bg: "#FCF4FF",
    },

    {
      id: 2,
      date: "2016",
      title: "Stridee award -- Core Value - Respect",
      place: "Stride",
      bg: "#FCF9F2",
    },
  ];

  // Working Skills items for Resume page
  const lineArray = [
    {
      id: "01",
      color: "#FF6464",
      name: "Extreme Programming",
      number: "90",
      year: '11'
    },
    {
      id: "02",
      color: "#9272D4",
      name: "Back-End Experience",
      number: "70",
      year: '7'
    },
    {
      id: "03",
      color: "#5185D4",
      name: "Front-End Experience",
      number: "80",
      year: '8'
    },
  ];

  // Personal information for contact pages
  const contactArray = [
    {
      id: "01",
      icon: iconPhone,
      title: "Phone ",
      item1: "+1 917 553 6851",
      item2: "",
      bg: "#FCF4FF",
    },
    {
      id: "02",
      icon: iconEmail,
      title: "Email ",
      item1: "mnunez903@gmail.com",
      item2: "",
      bg: "#EEFBFF",
    },
    {
      id: "03",
      icon: iconMap,
      title: "Address ",
      item1: "Lower Westchester County",
      item2: "New York, USA",
      bg: "#F2F4FF",
    },
  ];

  return {
    handleTheme,
    check,
    local,
    handleData,
    data,
    singleData,
    handleModelData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
    menuItem,
    NavLink,
    menuItemTwo,
    serviceArray,
    sliderImg,
    educationArray,
    experiencesArray,
    awardsArray,
    lineArray,
    contactArray,
  };
};

export default AllData;
