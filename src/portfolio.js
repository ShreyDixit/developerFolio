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

const greeting = {
  username: "Shrey Dixit",
  title: "Greetings from Shrey",
  subTitle: emoji(
    "MSc student studying Intelligent Adaptive Systems at the University of Hamburg. I focus on Deep Learning, Computational Neuroscience & Explainable AI"
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ShreyDixit",
  linkedin: "https://www.linkedin.com/in/shreydixittech/",
  gmail: "shrey.akshaj@gmail.com",
  googlescholar: "https://scholar.google.com/citations?user=xTbHkksAAAAJ&hl=en",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Hamburg",
      logo: require("./assets/images/Seal_of_the_University_of_Hamburg.svg.png"),
      subHeader: "Master of Science in Intelligent Adaptive Systems",
      duration: "October 2021 - Present",
      desc: "German GPA 1.5",
      descBullets: [
        "Relevant Subjects: Bio-Inspired AI, Data Engineering, Speech Signal Processing",
      ]
    },
    {
      schoolName: "BML Munjal University",
      logo: require("./assets/images/BML_Munjal_University-Logo.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "August 2017 - September 2021",
      desc: "German GPA 1.9",
      descBullets: ["Relevant Subjects: Machine Learning & Data Mining, Biological Data Analysis, Artifical Intelligence"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Assistant",
      company: "Institute of Computational Neuroscience, UKE, Hamburg",
      companylogo: require("./assets/images/icns_logo.jpg"),
      date: "March 2022 – Present",
      desc: "Supervisor: Prof. Claus C. Hilgetag",
      descBullets: [
        "Developing noble Explainable AI techniques using Shapley Analysis",
        "Implementing a Python package for MSA (Multi-perturbation Shapley value Analysis)",
      ]
    },
    {
      role: "Teaching Assisstant",
      company: "Neuromatch Academy",
      companylogo: require("./assets/images/nma.png"),
      date: "July 2022",
      descBullets: [
        "Taught international students deep learning fundamentals",
        "Guided in building a final project using GANs and U-Net",
        "Assisted in programming exercises and lectures",
      ]
    },
    {
      role: "Student Software Developer",
      company: "PuttView",
      companylogo: require("./assets/images/pv_logo.jpeg"),
      date: "September 2022 – April 2023",
      desc: "Implemented a Ball Tracking System using Image Processing and Kalman Filter in C++ and Unity"
    },
    {
      role: "Machine Learning Intern",
      company: "Singularium Technologies",
      companylogo: require("./assets/images/singularium.jpeg"),
      date: "May 2019 - June 2019",
      descBullets: [
        "Evaluated OCRs for extracting text",
        "Extracted Tabular structure from images using CNN and Signal Processing.",
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Merit Scholarship for International Students",
      subtitle:
        "Received 850€‎ per month from University of Hamburg as Part of this Scholarship",
      image: require("./assets/images/Seal_of_the_University_of_Hamburg.svg.png"),
      footerLink: [
        {
          name: "Acceptance Letter",
          url: "https://drive.google.com/file/d/14v7oSqWdGzt7UMGriex7IetG6ozK2e21/view?usp=sharing"
        }
      ]
    },
    {
      title: "IELTS - CEFR C1",
      subtitle: "IELTS Band 7.5. Exam given in January 2021",
      image: require("./assets/images/BristishCouncil.jpg"),
      footerLink: [
        {
          name: "Certificate Link",
          url: "https://drive.google.com/file/d/1ZHk_4ssBRpum8MVoZB7dwBbY8jR4vIso/view?usp=sharing"
        }
      ]
    },

    {
      title: "Computational Neuroscience",
      subtitle: "Completed Computational Neuroscience course by the University of Washington on Coursera in May 2020",
      image: require("./assets/images/UW.SVG"),
      footerLink: [
        {name: "Certificate Link", url: "https://coursera.org/share/815ba3ed5ae0258686bdd3cc9ec47318"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+491779653469",
  email_address: "shrey.akshaj+portfolio@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "ShreyDixitAI", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
