"use client"
import Slider from "react-slick";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
}
export default function Projects() {
  const projects: Project[] = [
    {
      title: "adway",
      description: "assadsd",
      imageUrl:
        "https://th.bing.com/th/id/OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj?rs=1&pid=ImgDetMain",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">
              This is what our past projects look like
            </h2>
            <p className="text-xl text-gray-400">
              Here is how you can get started with us
            </p>
          </div>
          <div>
            {" "}
            <Slider {...settings}>
              {projects.map((project, index) => (
                <div key={index}>
                  <img src={project.imageUrl} alt={project.title} />
                  <div className="project-details">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
