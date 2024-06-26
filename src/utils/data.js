import front from "../../src/components/assets/images/frontend.webp";
import back from "../../src/components/assets/images/backend.jpg";
import soft from "../../src/components/assets/images/softskill.jpg";
import tools from "../../src/components/assets/images/tools.png";

export const SKILLS = [
  {
    title: "Frontend",
    icon: front,
    skills: [
      { skill: "HTML5", percentage: "80%" },
      { skill: "CSS3", percentage: "90%" },
      { skill: "Bootstrap", percentage: "80%" },
      { skill: "JavaScript", percentage: "75%" },
      { skill: "React", percentage: "90%" },
    ],
  },
  {
    title: "Backend",
    icon: back,
    skills: [
      { skill: "Node.js", percentage: "70%" },
      { skill: "Express.js", percentage: "75%" },
      { skill: "MongoDB", percentage: "80%" },
      { skill: "MySQL", percentage: "70%" },
    ],
  },
  {
    title: "Tools",
    icon: tools,
    skills: [
      { skill: "Git & Github", percentage: "80%" },
      { skill: "VS Code", percentage: "90%" },
      { skill: "Postman", percentage: "80%" },
      { skill: "bitbucket", percentage: "70%" },
      { skill: "Springsts", percentage: "50%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: soft,
    skills: [
      { skill: "Quick learner", percentage: "80%" },
      { skill: "Self Motivated", percentage: "90%" },
      { skill: "Eger to Work", percentage: "80%" },
      { skill: "Adaptability", percentage: "70%" },
    ],
  },
];

export const EDUCATION = [
  {
    title: "Bachelor of Engineering",
    subtitle: "'Computer Science and Engineering'",
    year: "2019 - 2023",
    description: [
      "college: 'Jain College of Engineering and Technology'",
      "location: Hubli, Karnataka",
      "cgpa: 7.3/10",
      "'I have completed my B.E in Computer Science and Engineering from Jain College of Engineering and Technology Hubli, Karnataka in 2023'.",
    ],
  },
  {
    title: "Higher Secondary",
    subtitle: "'Science'",
    year: "2017 - 2019",
    description: [
      "college: MKET Independent PU College",
      "location: Harihar, Karnataka",
      "percentage: 56%",
      "'I have completed my Higher Secondary in Science from MKET Independent PU College, Harihar, Karnataka in 2019'.",
    ],
  },
  {
    title: "Matriculation",
    subtitle: "'SSLC OR 10th'",
    year: "2016 - 2017",
    description: [
      "school: SHSS Bapuji High School",
      "location: Harihar, Karnataka",
      "percentage: 81.28%",
      "'I have completed my Matriculation from SHSS Bapuji High School, Harihar, Karnataka in 2017'.",
    ],
  },
];
