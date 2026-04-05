export const defaultData = {
  personal: {
    name: "Shubankar Sridhar",
    title: "CSE (AI & ML) Student | Developer",
    tagline: "Exploring AI/ML, web development, and image processing through hands-on projects and technical club activities.",
    email: "shubankar.s.06@email.com",
    location: "Chennai, Tamil Nadu, India",
    avatar: null,
    bio: `I’m a second-year Computer Science Engineering student (AI & ML) at VIT Chennai with a strong interest in coding and problem-solving. I like working through challenges and building things that are both useful and interesting.

My main areas of interest are Artificial Intelligence and Machine Learning, where I’m learning to build data-driven solutions. I also work on web development and have explored image processing as part of my learning.

I’m also interested in robotics and enjoy the idea of combining software with real-world applications. Overall, I’m always looking to learn new things and improve my skills through hands-on work.

Open to internships and projects where I can contribute and grow.

When I'm not coding, I'm contributing to open source, dancing, playing badminton, or exploring new tech trends.`,
    socialLinks: {
      github: "https://github.com/Shubankar-Sridhar",
      linkedin: "https://www.linkedin.com/in/shubankarsridhar",
      dockerhub: "https://hub.docker.com/repositories/shubankarsridhar",
    },
  },

  skills: {
    languages: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 88 },
      { name: "Java", level: 80},
      { name: "C++", level: 80 },
      { name: "JavaScript", level: 85 },

    ],
    frameworks: [
      { name: "React.js", level: 95 },
      { name: "Node.js", level: 90 },
      { name: "FastAPI", level: 80 },
      { name: "Flask", level: 80 },
      { name: "Express.js", level: 92 },
    ],
    tools: [
        "Github","Docker", "Nginx", "MySQL","MongoDB", "AWS", "GitHub Actions"],
    softSkills: [
      "Effective Communication", "System Design", "Technical Leadership", "Agile / Scrum",
      "Open Source", "Code Review", "Presentation Skills", "Proficiency in English", "Collaboration", "Problem Solving", "Critical Thinking", "Adaptability"
    ],
  },

  experience: [
    {
      id: 1,
      role: "Web Developer",
      company: "IEEE-RAS Club, VIT Chennai",
      period: "2025 – Present",
      description: "Working as a Web Developer at IEEE-RAS Club, VIT Chennai, I have contributed to the club's official website, enhancing user experience and implementing new features. I collaborated with my WebDev team to integrate backend services.",
      tags: ["React", "Node.js", "MySQL"],
    },
    {
      id: 2,
      role: "Software Developer",
      company: "HackClub, VIT Chennai",
      period: "2025 – present",
      description: "As a Software Developer at HackClub, VIT Chennai, I have been involved in developing and maintaining the club's internal tools and platforms. I have worked on projects that utilize TypeScript and MongoDB for backend services.",
      tags: ["TypeScript", "MongoDB", "JWT"],
    },
    {
      id: 3,
      role: "Marketing Associate",
      company: "Android Club, VIT Chennai",
      period: "2024 – present",
      description: "In my role as a Marketing Associate at Android Club, VIT Chennai, I have been responsible for promoting club events and activities through various social media platforms. I have successfully increased engagement and visibility for the club's initiatives.",
      tags: ["Instagram", "Facebook"],
    },
  ],

  projects: [
    {
      id: 1,
      name: "Pulse",
      description: "A web-based messaging system that allows uses to send and receive messages in real time along with timestamps made using Vanilla JS and Python Flask.",
      tags: ["JavaScript", "Python", "Flask", "HTML", "CSS"],
      github: "https://github.com/Shubankar-Sridhar/Pulse_Messaging_App-",
      hosted: "https://pulse-2-0.onrender.com",
      featured: null,
    },
    {
      id: 2,
      name: "Smart City Simulation using Contiki-NG and Cooja",
      description: "Built a smart city IoT simulation in Contiki-NG using C and Cooja. Modeled event-driven communication between distributed sensor nodes. Demonstrated efficiency of event-driven kernel for low-power embedded systems.",
      tags: ["Contiki-NG", "Cooja", "C"],
      github: "https://github.com/Shubankar-Sridhar/Smart_Park",
      featured: null,
    },
    {
      id: 3,
      name: "Raagam - Local Music Streaming & Management Application",
      description: "Developed a local music streaming application using vanilla JavaScript and a Python Flask backend. Enabled users to import and organize music folders by artists, albums, and playlists. Implemented metadata editing features for managing track details. Designed playlist creation and seamless audio streaming from local storage",
      tags: ["Python", "Flask", "SQLite", "Mutagen", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/Shubankar-Sridhar/Raagam",
      hosted: null,
      featured: null,
    },
  ],

  education: [
    {
      degree: "B.Tech Computer Science & Engineering (specialising in AI and ML)",
      institution: "VIT University, Chennai",
      year: "2028 (currently in 2nd year)",
      note: "GPA: 9.18/10",
    },
  ],

  certifications: [
    "Devops Foundations (VIT Chennai × Agility Delivered)",
    "IoT and Robotics (Corizo × Wipro)",
    "AI-ML Foundations (VIT × SSN)",
  ],
};