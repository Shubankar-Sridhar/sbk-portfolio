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
      name: "Namma Chennai Metro",
      description: "Chennai_Namma_Metro is a web-based navigation service built to help users efficiently traverse the extensive Chennai Metro network, covering over 150 stations across both operational and under-construction lines. The system models the metro as a graph and applies Dijkstra’s Algorithm to compute the shortest path between any two stations, providing detailed route information such as total distance, number of intermediate stations (nodes), and clear identification of required interchanges. In addition to route planning, it offers insights into the network structure, including stations with the highest connectivity, demonstrating practical applications of graph theory and algorithms in solving real-world transportation challenges.",
      tags: ["Python", "Flask", "Networkx", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/Shubankar-Sridhar/Namma_Metro",
      hosted: "https://chennai-namma-metro.onrender.com/",
      featured: null,
    },

    {
      id: 2,
      name: "FinTrack - A One-stop Solution for Managing Finances",
      description: "Built a full-stack personal finance management application using Flask for the REST API backend, React for the dynamic frontend, and SQLite for data persistence. The application features user authentication with SHA256 password hashing, multi-account support (cash, bank, credit), expense tracking with custom categories, income source management, automated recurring payments (weekly/monthly/yearly), EMI/loan tracking with payment schedules, savings goals with progress visualization, and comprehensive analytics including monthly income vs expenses bar charts, category-wise spending doughnut charts, and daily spending trend lines. Deployed on Render with persistent storage for production use.",
      tags: ["Python", "React.js", "Flask", "SQLite", "CSS"],
      github: "https://github.com/Shubankar-Sridhar/FinTrack",
      hosted: "https://fintrack-lcha.onrender.com/",
      featured: null,
    },
    
    {
      id: 3,
      name: "Pulse",
      description: "A web-based messaging system built using Vanilla JavaScript and Python Flask, designed to enable real-time communication between users through a simple and responsive interface. The system handles message transmission between clients and the server, ensuring that messages are delivered instantly along with accurate timestamps. It models the flow of data through a client-server structure, allowing multiple users to interact seamlessly. In addition to core messaging functionality, the project highlights how dynamic updates and efficient request handling improve user experience, demonstrating practical applications of full-stack development in building interactive web-based communication tools.",
      tags: ["JavaScript", "Python", "Flask", "HTML", "CSS"],
      github: "https://github.com/Shubankar-Sridhar/Pulse_Messaging_App-",
      hosted: "https://pulse-2-0.onrender.com",
      featured: null,
    },

    {
      id: 4,
      name: "Smart City Simulation using Contiki-NG and Cooja",
      description: "A smart city IoT simulation built using Contiki-NG with C and the Cooja simulator, designed to model communication across distributed sensor nodes in a low-power network environment. The system represents the network as interconnected devices that communicate using an event-driven approach, enabling efficient data exchange between nodes. It demonstrates how Contiki-NG’s lightweight kernel supports energy-efficient operations while maintaining reliable communication. In addition to simulating data flow, the project provides insights into network behavior, including node interactions and communication patterns, showcasing the practical use of embedded systems and networking concepts in real-world IoT applications.",
      tags: ["Contiki-NG", "Cooja", "C"],
      github: "https://github.com/Shubankar-Sridhar/Smart_Park",
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
