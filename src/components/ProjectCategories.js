// src/components/ProjectCategories.js
import React, { useState } from 'react';

const ProjectCategories = () => {
  const [showProjects, setShowProjects] = useState(null);

  const categories = [
    { name: 'Análise de Dados', links: ['https://github.com/its-gabe/immersive-analytics-guide', 'https://github.com/its-gabe/mysql-oficina-project', 'https://github.com/its-gabe/mysql-ecommerce-project'] },
    { name: 'IA', links: ['https://github.com/its-gabe/python-in-enterprises-scraper', 'https://github.com/its-gabe/immersive-analytics-guide', 'https://github.com/its-gabe/querycast-journey'] },
    { name: 'Python', links: ['https://github.com/its-gabe/Python-stuff'] },
  ];

  const handleClick = (index) => {
    setShowProjects(showProjects === index ? null : index);
  };

  return (
    <div>
      {categories.map((category, index) => (
        <div key={index} className="category-box" onClick={() => handleClick(index)}>
          <h2>{category.name}</h2>
          {showProjects === index && (
            <ul>
              {category.links.map((link, linkIndex) => (
                <li key={linkIndex}><a href={link} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
              </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectCategories;
