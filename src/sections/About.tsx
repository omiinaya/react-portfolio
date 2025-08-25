import React from 'react';

const About: React.FC = () => {
  const skills = [
    'React',
    'TypeScript',
    'Node.js',
    'Python',
    'PostgreSQL',
    'AWS',
    'Docker',
    'Git'
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I'm a passionate full-stack developer with over 3 years of experience 
              building scalable web applications. I enjoy solving complex problems 
              and creating intuitive user experiences.
            </p>
            <p className="about-description">
              My expertise includes modern JavaScript frameworks, cloud infrastructure, 
              and database design. I'm always eager to learn new technologies and 
              take on challenging projects.
            </p>
            <div className="skills">
              <h3 className="skills-title">Technologies I Work With</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;