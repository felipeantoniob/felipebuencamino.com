export interface Skill {
  name: string;
  description: string;
}
export const languages: Skill[] = [
  {
    name: "JavaScript (ES6+)",
    description:
      "Advanced expertise in building large-scale applications with JavaScript, focusing on clean architecture, asynchronous programming, and modern language features (async/await, destructuring, spread operators).",
  },
  {
    name: "TypeScript",
    description:
      "Deep knowledge of TypeScript for creating type-safe applications, leveraging advanced types like generics, union types, and intersection types for complex application logic.",
  },
  {
    name: "HTML5",
    description:
      "Proficient in semantic HTML, ARIA accessibility, and building cross-browser compatible, responsive layouts adhering to modern web standards.",
  },
  {
    name: "CSS3",
    description:
      "Skilled in advanced CSS techniques, including Flexbox, Grid, and responsive design, with a focus on maintainable, scalable, and modular styling using utility-first CSS frameworks like Tailwind CSS.",
  },
  {
    name: "Go",
    description:
      "Experienced in using Go to create efficient, high-performance services. Well-versed in leveraging Go’s simplicity and powerful standard library to build scalable and reliable command-line applications.",
  },
  {
    name: "Swift",
    description:
      "Skilled in building native iOS applications using Swift, focusing on performance, security, and modern design patterns such as MVVM and Combine for reactive programming.",
  },
  {
    name: "Kotlin",
    description:
      "Proficient in Kotlin for Android development, utilizing the latest features like coroutines for asynchronous programming, Jetpack libraries, and building modern, scalable mobile applications.",
  },
];

export const frameworks: Skill[] = [
  {
    name: "React",
    description:
      "Extensive experience in building dynamic, state-driven applications using React.js, employing hooks (useState, useEffect, useContext), context API, and optimizing render performance with memoization techniques (e.g., React.memo, useMemo).",
  },
  {
    name: "Next.js",
    description:
      "Proficient in building full-stack applications with Next.js, including server-side rendering (SSR), static site generation (SSG), and incremental static regeneration (ISR) for enhanced SEO and performance.",
  },
  {
    name: "React Native",
    description:
      "Advanced expertise in building cross-platform mobile applications using React Native, integrating with native modules and utilizing tools like React Navigation and Redux for state management.",
  },
  {
    name: "Redux",
    description:
      "Experience in building large-scale applications with Redux, middleware like Redux-Saga, Redux-Thunk for side-effects management, and optimizing performance using tools like reselect.",
  },
];

export const toolsAndDev: Skill[] = [
  {
    name: "Git & Version Control",
    description:
      "Expert in Git, Git workflows (feature branching, pull requests, rebasing), and using platforms like GitHub and GitLab for version control and collaboration in a team environment.",
  },
  {
    name: "CI/CD Pipelines (GitHub Actions, Gitlab CI/CD)",
    description:
      "Experience setting up CI/CD pipelines for automated testing, linting, and deployment using tools like GitHub Actions, Gitlab CI/CD, and Docker for continuous integration and delivery.",
  },
  {
    name: "Docker & Containerization",
    description:
      "Proficient in using Docker to containerize applications for consistent development and production environments, ensuring seamless deployment with Docker Compose for multi-container applications.",
  },
  {
    name: "Build Tools & Development Workflow",
    description:
      "Expert in using modern build tools like Vite for fast, optimized bundling and development. Skilled in configuring and optimizing ESLint and Prettier for consistent code quality and automated formatting.",
  },
];

export const testing: Skill[] = [
  {
    name: "Jest",
    description:
      "In-depth experience with unit and integration testing using Jest, mocking/stubbing dependencies, and ensuring high test coverage for complex React and Node.js applications.",
  },
  {
    name: "React Testing Library",
    description:
      "Skilled in testing React components using React Testing Library, focusing on user-centered testing to ensure correct behavior, accessibility, and performance.",
  },
  {
    name: "Cypress",
    description:
      "Hands-on experience with end-to-end testing using Cypress for automated testing of UI and interactions in modern web applications.",
  },
];

export const uiUxDesign: Skill[] = [
  {
    name: "Figma & Design Collaboration",
    description:
      "Experience translating high-fidelity designs from Figma into fully functional, responsive web applications, collaborating with design teams to ensure pixel-perfect implementation.",
  },
  {
    name: "Component Libraries & Design Systems",
    description:
      "Building reusable UI components and style guides using design systems and libraries like Storybook, ensuring consistency and scalability across applications.",
  },
  {
    name: "Storybook",
    description:
      "Proficient in using Storybook for building and testing isolated UI components in a development environment, allowing for better collaboration between design and development teams. Experience in creating and maintaining comprehensive component libraries that are easily accessible for UI consistency and testing.",
  },
];

export const performanceAndSecurity: Skill[] = [
  {
    name: "Performance Optimization (Lighthouse, Web Vitals)",
    description:
      "Experience with web performance optimization techniques such as lazy loading, code splitting, tree shaking, and reducing render-blocking resources, optimizing for high performance using tools like Lighthouse and Web Vitals.",
  },
  {
    name: "Security Best Practices",
    description:
      "Deep understanding of security best practices, including OWASP top 10, securing APIs, managing authentication with OAuth and JWT, and ensuring data protection using HTTPS and secure cookies.",
  },
  {
    name: "Web Vitals",
    description:
      "Proficient in optimizing core web performance metrics like Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS) to enhance user experience and meet Google's Web Vitals thresholds for SEO and performance rankings.",
  },
];
