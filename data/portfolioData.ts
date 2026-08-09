export interface SkillCategory {
  title: string;
  subtitle: string;
  key: "core" | "tools" | "domain" | "languages";
  items: string[];
  className?: string;
}

export interface ExperienceItem {
  date: string;
  role: string;
  company: string;
  points: string[];
}

export interface EducationItem {
  date: string;
  title: string;
  institution: string;
}

export interface ProjectItem {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export const personalDetails = {
  name: "Arun Prajapati",
  roleTitle: "DEDICATED PROFESSIONAL · OPEN TO NEW OPPORTUNITIES",
  location: "MUMBAI, MAHARASHTRA, INDIA",
  shortLocation: "MUMBAI, IN",
  phone: "+91 8767116328",
  phoneRaw: "+918767116328",
  email: "prajapatiarun67@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/arun-prajapati-144a4479",
  linkedinHandle: "arun-prajapati-144a4479",
  resumePath: "/resume.pdf",
  bioHeadline: "I bring commitment, adaptability and a results-driven mindset to every team I join. Based in Mumbai and ready for my next challenge.",
  aboutParagraphs: [
    "I'm Arun Prajapati, a professional based in Mumbai, Maharashtra. Replace this paragraph with your personal introduction, your years of experience, and the kind of work you enjoy delivering.",
    "I value clear communication, ownership and continuous improvement. I'm always interested in meaningful opportunities where I can contribute, learn and grow with a strong team.",
  ],
};

export const skillsData = {
  core: [
    "COMMUNICATION",
    "PROBLEM SOLVING",
    "TIME MANAGEMENT",
    "TEAMWORK",
    "ADAPTABILITY",
    "LEADERSHIP",
  ],
  tools: [
    "MS EXCEL",
    "MS WORD",
    "POWERPOINT",
    "GOOGLE WORKSPACE",
    "EMAIL & CALENDAR",
    "CRM TOOLS",
  ],
  domain: [
    "PROJECT COORDINATION",
    "CLIENT HANDLING",
    "REPORTING",
    "PROCESS IMPROVEMENT",
    "DOCUMENTATION",
  ],
  languages: ["ENGLISH", "HINDI", "MARATHI"],
};

export const experienceData: ExperienceItem[] = [
  {
    date: "MON 20XX — PRESENT",
    role: "Your Current / Recent Job Title",
    company: "COMPANY NAME",
    points: [
      "Describe a key responsibility or achievement here.",
      "Add a measurable result — numbers stand out to recruiters.",
    ],
  },
  {
    date: "20XX — 20XX",
    role: "Previous Role",
    company: "PREVIOUS COMPANY",
    points: [
      "Describe what you owned or delivered in this role.",
      "Highlight a project, promotion or recognition.",
    ],
  },
  {
    date: "20XX — 20XX",
    role: "Earlier Role",
    company: "COMPANY NAME",
    points: ["Summarise your early career experience here."],
  },
];

export const educationData: EducationItem[] = [
  {
    date: "20XX — 20XX",
    title: "Your Degree / Qualification",
    institution: "Institution / University",
  },
  {
    date: "20XX — 20XX",
    title: "Certification / Higher Secondary",
    institution: "Institution / Board",
  },
];

export const projectsData: ProjectItem[] = [
  {
    number: "01",
    title: "Project One",
    description: "Add a short description of a project, initiative or product you worked on.",
    tags: ["PROJECT COORDINATION", "DELIVERY"],
  },
  {
    number: "02",
    title: "Project Two",
    description: "Show the problem, your contribution and the measurable result.",
    tags: ["PROCESS", "REPORTING"],
  },
];
