import PropTypes from "prop-types";
import useLanguage from "../context/useLanguage";
import "../styles/Bio.css";

const Bio = () => {
  const { language } = useLanguage();
  const cvUrl = language === "en" ? "/CVen.pdf" : "/CVes.pdf";

  return (
    <div className="bio-container">
      <h2 className="bio-title">
        {language === "en" ? "Who Am I?" : "¿Quién soy?"}
      </h2>

      <div className="bio-content">
        <section className="bio-section">
          <h3>{language === "en" ? "About Me" : "Sobre Mí"}</h3>
          <p>
            {language === "en" ? (
              <>
                I am <span className="bio-keyword">Cristina Silvestre</span>, a
                junior web developer with a strong passion for technology and
                continuous learning. I have completed the{" "}
                <span className="bio-keyword">
                  Web Application Development - Higher Level Education Cycle
                </span>
                , where I gained a solid foundation in the fundamental
                principles of web development. I am currently focused on
                expanding my skills to become a well-rounded professional and
                preparing myself to take on challenging tasks.
              </>
            ) : (
              <>
                Soy <span className="bio-keyword">Cristina Silvestre</span>, una
                desarrolladora web junior con una gran pasión por la tecnología
                y el aprendizaje continuo. He completado el{" "}
                <span className="bio-keyword">
                  Ciclo Superior de Desarrollo de Aplicaciones Web
                </span>
                , donde he adquirido una sólida base de los principios
                fundamentales del desarrollo web. 
                <br />
                Actualmente, estoy enfocada en
                ampliar mis habilidades para convertirme en una profesional
                completa y preparándome para afrontar desafíos exigentes.
              </>
            )}
          </p>
        </section>

        <section className="bio-section">
          <h3>{language === "en" ? "My Skills" : "Mis Habilidades"}</h3>
          <ul>
            {language === "en" ? (
              <>
                <li>
                  <span className="bio-keyword">HTML5, CSS3</span>, and{" "}
                  <span className="bio-keyword">PHP</span>: Experience in
                  creating and managing dynamic content for websites, with a
                  focus on optimization and best practices.
                </li>
                <li>
                  <span className="bio-keyword">Java</span> and{" "}
                  <span className="bio-keyword">JavaScript</span>: Application
                  of programming logic in web projects and efficient data
                  handling to create robust and scalable solutions.
                </li>
                <li>
                  <span className="bio-keyword">SQL</span> and{" "}
                  <span className="bio-keyword">MySQL</span>: Database
                  management and creation of optimized queries, preparing me to
                  work in more complex data environments.
                </li>
                <li>
                  I am expanding my knowledge in{" "}
                  <span className="bio-keyword">Spring Boot</span> for backend
                  development and <span className="bio-keyword">React</span> to
                  build modern, dynamic user interfaces, with the goal of
                  integrating them into future projects.
                </li>
              </>
            ) : (
              <>
                <li>
                  <span className="bio-keyword">HTML5, CSS3</span> y{" "}
                  <span className="bio-keyword">PHP</span>: Experiencia en la
                  creación y gestión de contenido dinámico para sitios web, con
                  un enfoque en optimización y buenas prácticas.
                </li>
                <li>
                  <span className="bio-keyword">Java</span> y{" "}
                  <span className="bio-keyword">JavaScript</span>: Aplicación de
                  lógica de programación en proyectos web y manejo eficiente de
                  datos para crear soluciones robustas y escalables.
                </li>
                <li>
                  <span className="bio-keyword">SQL</span> y{" "}
                  <span className="bio-keyword">MySQL</span>: Gestión de bases
                  de datos y creación de consultas optimizadas, lo que me
                  prepara para trabajar en entornos más complejos de datos.
                </li>
                <li>
                  Actualmente aprendiendo{" "}
                  <span className="bio-keyword">Spring Boot</span> para
                  desarrollo backend y{" "}
                  <span className="bio-keyword">React</span> para construir
                  interfaces de usuario modernas y dinámicas, con el objetivo de
                  integrarlos en futuros proyectos.
                </li>
              </>
            )}
          </ul>
        </section>

        <section className="bio-section">
          <h3>{language === "en" ? "My Goals" : "Mis Objetivos"}</h3>
          <p>
            {language === "en" ? (
              <>
                My goal is to be part of an innovative team where{" "}
                <span className="bio-keyword">I can apply my knowledge </span>
                and learn from experienced professionals.
                <br />
                Being able to grow in a real-world, collaborative environment
                that promotes continuous learning and best practices would be
                incredible for me.
              </>
            ) : (
              <>
                Mi meta es formar parte de un equipo innovador donde pueda{" "}
                <span className="bio-keyword">aplicar mis conocimientos</span> y
                aprender de profesionales con experiencia.
                <br />
                Poder crecer en un entorno real y colaborativo donde se fomente
                el aprendizaje continuo y las buenas prácticas sería increíble
                para mí.
              </>
            )}
          </p>
        </section>

        <section className="bio-section">
          <h3>{language === "en" ? "My Interests" : "Mis Intereses"}</h3>
          <p>
            {language === "en" ? (
              <>
                When I&#39;m not coding, I clear my mind by working out, which
                is very important to me. I also enjoy playing board games,
                billiards, bowling... anything that keeps my logic active.
                <br />
                However, what I enjoy the most is spending time with{" "}
                <span className="hover-cats">my cats</span> giving them the love
                they deserve &#40;with a cup of coffee and a tech trends video
                playing in the background&#41;.
              </>
            ) : (
              <>
                Cuando no estoy programando, despejo la mente haciendo deporte,
                algo que es muy importante para mí. También, me gusta jugar a
                juegos de mesa, al billar, los bolos... todo aquello que
                mantenga mi lógica activa.
                <br />
                Aunque lo que más disfruto es pasar tiempo con{" "}
                <span className="hover-cats">mis gatos</span> dándoles el cariño
                que merecen &#40;con una taza de café y con algún vídeo sobre
                nuevas tendencias tech de fondo&#41;.
              </>
            )}
          </p>
        </section>

        <a href={cvUrl} download className="download-cv-btn">
          {language === "en" ? "Download My CV" : "Descargar mi CV"}
        </a>
      </div>
    </div>
  );
};

Bio.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Bio;
