export default function Projects(project){
    return(
    <>
    <a
      href={project.link}
      style={{ textDecoration: "none" }}
    >
      <div className="project">
        <img src={project.image} alt="p_image" style={{backgroundSize:'fill',backgroundRepeat:'no-repeat'}} />
        <h2>{project.name}</h2>
        <p>{project.title}</p>
        <p className="tag">{project.tag1}</p>
        <p className="tag">{project.tag2}</p>
      </div>
      </a>
    </>);
}