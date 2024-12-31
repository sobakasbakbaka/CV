import styles from "./App.module.css";

export const App = () => {
  return (
    <div className={styles.Container}>
      <h1>Nikita Naumov</h1>
      <h2>
        Frontend Engineer –{" "}
        <a href="https://www.s7.ru/" target="_blank">
          S7
        </a>
      </h2>
      <p>
        I am a Frontend Engineer with a strong interest in creating modern and
        user-friendly web applications. My main focus is frontend development,
        including building scalable and high-performance solutions using React,
        TypeScript, and Next.js. I also have experience with Redux, TanStack
        Query, and GraphQL, which helps me manage application state and work
        with APIs effectively. In addition, I have some experience in backend
        development with Node.js and NestJS. This helps me understand the full
        development cycle and work better with backend teams.
      </p>
      <ul>
        <li>
          <a target="_blank" href="https://github.com/sobakasbakbaka">
            GitHub
          </a>
        </li>
        <li>|</li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/nikita-naumov-86b07825a/"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
};
