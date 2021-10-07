import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectItem from '../component/ProjectItem';
import { Project, ProjectConvert } from '../interface/project';

export default function ProjectList() {
  const [projects, setProject] = useState<Project[]>();

  const getProjects = () => {
    axios.get('http://localhost:8000/api')
      .then((response: any) => response.data)
      .then((data) => {
        const tempProjects : Project[] = [];
        data.map((item: string) => {
          tempProjects?.push(
            ProjectConvert.toProject(JSON.stringify(item))
          );
        });
        setProject(tempProjects);
      });
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div>
      {projects?.map((project: Project) => (<ProjectItem key={project.id} project={project} />))}
    </div>
  );
}
