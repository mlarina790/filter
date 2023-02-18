import React from 'react';

const ProjectList = ({projects}) => {
    return (
        <div className="container__imgs">
            {projects.map(((project, index) => {
                const {img, category} = project;
                return (
                    <div className="project__img" key={index + img}>
                        <img
                            src={img}
                            alt={category + " image"}
                            key={index + img + category}
                        />
                    </div >)
            }))}
        </div>


    );
};

export default ProjectList;