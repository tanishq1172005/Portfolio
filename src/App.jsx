import { useRef } from "react"

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
        <a href="https://github.com/tanishq1172005">Github</a>
        <a href="https://www.linkedin.com/in/tanishq-bisht-724528306/">LinkedIn</a>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbSMtLvChCbqHNlZBlFznljTxFZVKpCnxGnkgSdmbzMNVMwCjfKQmRcqMHwTnMCLFBwfTr">E-mail</a>
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
      <a
      href="https://dev-verse-tau.vercel.app/"
      style={{ textDecoration: "none" }}
    >
      <div className="project">
        <div className="project-image2"></div>
        <h2>DevVerse</h2>
        <p>A Personal Productivity Journal Webapp</p>
        <p className="tag">React</p>
        <p className="tag">Firebase</p>
      </div>
      </a>
      <a href="https://translet.vercel.app/"
      style={{textDecoration:"none"}}>
        <div className="project">
        <div className="project-image1"></div>
        <h2>Translet</h2>
        <p>Translate your text in the given languages using Translet</p>
        <p className="tag">React</p>
        <p className="tag">Tailwind</p>
      </div>
      </a>
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
