import React from "react";
import Card from "./Card";
import CurologyImg from "../assets/curology-min.png"
import SpaceImg from "../assets/yourspace-min.png"
import LumonImg from "../assets/lumin-min.png"

const Work = () => {
  const projects = [
    {
      id: 1,
      subtitle: "Curology",
      title: "A custom formula for your skin's unique needs",
      img: CurologyImg,
    },
    {
      id: 2,
      subtitle: "Your space",
      title: "Open space floor plans for your next venture ",
      img: SpaceImg,
    },
    {
      id: 3,
      subtitle: "Lumin",
      title: "For your best look ever",
      img: LumonImg,
    }
  ];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-[45vh]">
        {projects.map(project =>(
            <Card title={project?.title} subtitle={project?.subtitle} imgSrc={project.img}/>
          ))}
      </div>
    </div>
  );
};

export default Work;
