import React, { useEffect, useState } from "react";
import Tilt from "react-tilt";
import Title from "../Title/Title";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";
import ProjectImg from "../Image/ProjectImg";
import SlideImg from "../Image/SlideImg";
import { Container, Row, Col } from "react-bootstrap";

const Projects = ({ projects }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          {projects.map((project) => {
            const { title, info, info2, url, repo, img, id } = project;

            let Image;
            let href = url;

            if (typeof img === "object") {
              Image = <SlideImg alt={title} filenames={img} />;
              href = "null";
            } else {
              Image = <ProjectImg alt={title} filename={img} />;
            }

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={500}
                    delay={250}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title}</h3>
                      <div>
                        <p>{info}</p>
                        <p className="mb-4">{info2}</p>
                      </div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                          href === "null"
                            ? "cta-btn cta-btn--villain"
                            : "cta-btn cta-btn--hero"
                        }
                        href={url}
                        onClick={(e) => {
                          if (href === "null") {
                            e.preventDefault();
                          }
                        }}
                      >
                        See Live
                      </a>

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={500}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          if (href === "null") {
                            e.preventDefault();
                          }
                        }}
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: "cubic-bezier(.03,.98,.52,.99)",
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            {Image}
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

Projects.defaultProps = {
  projects: [],
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      img: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
      title: PropTypes.string,
      info: PropTypes.string,
      info2: PropTypes.string,
      url: PropTypes.string,
      repo: PropTypes.string,
    })
  ),
};

export default Projects;
