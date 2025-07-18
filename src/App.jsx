import { useRef } from "react"
import Projects from "./Projects"
import devverse from './assets/devverse.jpg'
import translet from './assets/Translet.jpg'
import devsearch from './assets/OIP.webp'

export default function App(){
  const projectsRef=useRef(null)

  const handleScrollToProjects=()=>{
    projectsRef.current?.scrollIntoView({behavior:"smooth"})
  }

  return(
  <>
  <header>
    <nav>
      <div className="logo">TSB</div>
      <div className="contact">
        <a href="https://github.com/tanishq1172005" target="_blank" rel="noopener noreferrer">Github</a>
        <a href="https://www.linkedin.com/in/tanishq-bisht-724528306/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbSMtLvChCbqHNlZBlFznljTxFZVKpCnxGnkgSdmbzMNVMwCjfKQmRcqMHwTnMCLFBwfTr" target="_blank" rel="noopener noreferrer">E-mail</a>
      </div>
    </nav>
  </header>
  <main>
    <div className="glass-bg"></div>
    <div className="intro-box">
      <div className="intro-text">
        <span className="intro typewriter">Hey there 👋 <br/> I am Tanishq <br/> A FrontEnd Developer</span>
        <span>Click below to see my latest projects</span>
        <button onClick={handleScrollToProjects}>See Projects 🔽</button>
      </div>
      <div className="intro-image"></div>
    </div>
    <h1 className="project-h1">My Projects</h1>
    <div className="projects" ref={projectsRef}>
      <Projects link="https://dev-verse-tau.vercel.app/" name="Devverse" image={devverse} title="Your personal productivity journal" tag1="React" tag2="Firebase" />
      <Projects link="https://devsearch-gamma.vercel.app/" name="Devsearch" image={devsearch} title="Search for your common errors" tag1="React" tag2="Tailwind" />
      <Projects link="https://translet.vercel.app/" name="Translet" image={translet}  title="Translate your text" tag1="React" tag2="RapidAPI" />
    </div>
  </main>
  <footer>
    <div className="info">
      <span>PROJECTS <br/>DevVerse <br/>News-Monkey</span>
      <span>EMAIL <br/> tanishq1172005@gmail.com</span>
      <span>ABOUT<br/>Frontend Dev <br/>React <br/>App dev</span>
    </div>
    <p>©️2025 by TANISHQ SINGH BISHT</p>
  </footer>
  </>)
}
