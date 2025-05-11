/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

/* Greeting */
const greeting = {
  username: "Ghosta",
  title: "Olá, Sou o Guilherme",
  subTitle:
    "Sou um estudante novo, mas um grande entusiasta de cyber‑segurança aplicada à arquitetura de software e da automação com IA.",
  resumeLink: "",
  displayGreeting: true
};

/* Social Media Links */
const socialMediaLinks = {
  github: "https://github.com/La-Ghosta",
  linkedin: "https://www.linkedin.com/in/guilherme-holanda11/",
  gmail: "guilhermeholanda012@gmail.com",
  display: true
};

/* Skills */
const skillsSection = {
  title: "O que eu faço",
  subTitle: "ESTUDANTE EXPLORANDO CIBERSEGURANÇA E IA",
  skills: [
    emoji("⚡ Atualmente aprendendo Python, C e JavaScript"),
    emoji("⚡ Interesse em automação de processos DevSecOps")
  ],
  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-code"
    }
  ],
  display: true
};

/* Education */
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Centro Universitário de Brasília (CEUB)",
      subHeader: "Tecnólogo em Gestão Pública",
      duration: "Janeiro 2019 – Dezembro 2020",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "Centro Universitário de Brasília (CEUB)",
      subHeader: "Bacharelado em Engenharia de Software (cursando)",
      duration: "Março 2025 – Presente",
      desc: "",
      descBullets: []
    }
  ]
};

/* Work Experience */
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Executor de Serviços In‑Game & Mediador Comercial",
      company: "LFCarry",
      companylogo: "", // sem imagem
      date: "Janeiro 2021 – Fevereiro 2023",
      desc:
        "Atuei inicialmente como jogador contratado, prestando serviços especializados diretamente nas contas dos clientes, seguindo padrões de segurança e excelência exigidos pela empresa.",
      descBullets: []
    }
  ]
};

/* ------ Seções desativadas (mantidas como stub para evitar erros de import) ------ */
const techStack = { display: false };
const openSource = { display: false };
const bigProjects = { display: false };
const achievementSection = { display: false };
const blogSection = { display: false };
const talkSection = { display: false };
const podcastSection = { display: false };
const twitterDetails = { display: false };
const resumeSection = { display: false };

/* Contact */
const contactInfo = {
  title: emoji("Contato ☎️"),
  subtitle: "Quer conversar sobre projetos ou apenas dizer oi? Minha caixa de entrada está aberta.",
  email_address: "guilhermeholanda012@gmail.com"
};

const isHireable = true; // ajustável

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  techStack,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
