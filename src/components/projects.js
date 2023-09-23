import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const arrowStyle = {
  color: 'rgba(255, 255, 255, 0.54)',
  stroke: 'rgba(255, 255, 255, 0.54)',
  strokeWidth: '8px',
  filter: 'drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.40))',
  padding: '16px', 
  fontSize: '24px',
  transition: 'transform 0.3s ease'
};

function Projects() {
    const [projectsData, setProjectsData] = useState([]);
    const [currentProjectId, setCurrentProjectId] = useState(null);
    const [imgSrc, setImgSrc] = useState(null);

    useEffect(() => {
      fetch("http://localhost:5000/projects")
          .then((response) => response.json())
          .then((data) => {
              console.log("Fetched projects data:", data);
              setProjectsData(data);
              setCurrentProjectId(data[0].id); // Initially set to the id of the first project
          })
          .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  useEffect(() => {
      if (currentProjectId !== null) {
          const currentProject = projectsData.find(project => project.id === currentProjectId);
          if (currentProject) {
              fetchImage(currentProject.image[0]);
          }
      }
  }, [currentProjectId, projectsData]);

    const fetchImage = async (imageUrl) => {
        const res = await fetch(imageUrl);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImgSrc(imageObjectURL);
    };

    if (!projectsData.length) return <div>Loading...</div>;

    const currentProject = projectsData.find(project => project.id === currentProjectId);

    return (
        <div className="p-4 mt-52 w-2/3 mx-auto">
            <div className="flex flex-col items-center">
                <h1 className="text-5xl font-bold" style={{ fontFamily: 'Faster One, cursive' }}>{currentProject.heading}</h1>
                <h2 className="text-2xl ml-24" style={{ fontFamily: 'Kalam, cursive' }}>{currentProject.subheading}</h2>
            </div>

            <div className="relative mt-6 mb-16">
                {imgSrc ? (
                    <>
                        <img src={imgSrc} alt="Project Screenshot" className="w-full shadow-custom-drop" />
                        <button
                            className="absolute top-1/2 left-0"
                            onClick={() => {
                                const currentIndex = projectsData.findIndex(project => project.id === currentProjectId);
                                const prevIndex = currentIndex > 0 ? currentIndex - 1 : projectsData.length - 1;
                                setCurrentProjectId(projectsData[prevIndex].id);
                            }}
                        >
                            <FontAwesomeIcon icon={faArrowLeft} style= {arrowStyle} />
                        </button>
                        <button
                            className="absolute top-1/2 right-0"
                            onClick={() => {
                                const currentIndex = projectsData.findIndex(project => project.id === currentProjectId);
                                const nextIndex = (currentIndex + 1) % projectsData.length;
                                setCurrentProjectId(projectsData[nextIndex].id);
                            }}
                        >
                            <FontAwesomeIcon icon={faArrowRight} style= {arrowStyle} />
                        </button>
                    </>
                ) : (
                    <p>Image not found.</p>
                )}
            </div>

            <div className="flex mt-6 space-x-4">
                <div
                    className="flex flex-wrap p-6 rounded-tl-30 rounded-tr-100 rounded-bl-100 rounded-br-100 text-white text-xl"
                    style={{
                        backgroundColor: currentProject.color,
                        fontFamily: 'Faster One, cursive',
                        boxShadow: '0px 0px 5px 5px rgba(0, 0, 0, 0.25)'
                    }}
                >
                    {currentProject.features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="m-2"
                        >
                            {feature}
                        </div>
                    ))}
                </div>

                <div
                    className="flex flex-wrap p-6 rounded-tl-100 rounded-tr-100 rounded-bl-100 rounded-br-30 text-white text-xl"
                    style={{
                        backgroundColor: currentProject.color,
                        fontFamily: 'Faster One, cursive',
                        boxShadow: '0px 0px 5px 5px rgba(0, 0, 0, 0.25)'
                    }}
                >
                    {currentProject.technologies.map((tech, idx) => (
                        <div
                            key={idx}
                            className="m-2"
                        >
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;





