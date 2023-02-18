import React, {useState} from 'react';
import ProjectList from "./ProjectList";
import Toolbar from "./Toolbar";
import ProjectData from "./ProjectData";

const Portfolio = () => {
    const [projects, setProjects] = useState(ProjectData);
    const [currentFilter, setCurrentFilter] = useState("All")

    const rawFilters = ProjectData.map((project)=>{
        return project.category
    });
    const filters = ["All",...new Set(rawFilters)];

    const filterProjects = ((category) => {
        if (category === "All") {
            setProjects(ProjectData)
            setCurrentFilter("All")
            return;
        }
        const filteredData = ProjectData.filter((project) => {
            return project.category === category;
        })
        setProjects((filteredData))
        setCurrentFilter(category)
    })

    return (
        <div className="container">
            <Toolbar
                filters={filters}
                selected={currentFilter}
                onSelectFilter={filterProjects}
            />
            <ProjectList projects={projects} />
        </div>
    );
};

export default Portfolio;
