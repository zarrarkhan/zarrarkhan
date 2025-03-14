import { useState } from "react";

const projects = [
    {
        id: 1,
        title: "Project One",
        description: "A modern web application built with React.",
        tags: ["React", "JavaScript"],
        image: "/project1.jpg", // Replace with your actual image path
        details: "This is a detailed description of Project One. It uses React and Tailwind CSS."
    },
    {
        id: 2,
        title: "Project Two",
        description: "A powerful Python-based data tool.",
        tags: ["Python", "Data Science"],
        image: "/project2.jpg",
        details: "This is a detailed description of Project Two. It leverages Python for data analysis."
    },
    {
        id: 3,
        title: "Project Three",
        description: "A full-stack app using Node.js and MongoDB.",
        tags: ["Node.js", "MongoDB"],
        image: "/project3.jpg",
        details: "This is a detailed description of Project Three. It features a backend with Node.js and a MongoDB database."
    },
];

const Portfolio = () => {
    const [selectedTag, setSelectedTag] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);

    const tags = ["All", "React", "JavaScript", "Python", "Data Science", "Node.js", "MongoDB"];

    const filteredProjects =
        selectedTag === "All" ? projects : projects.filter(project => project.tags.includes(selectedTag));

    return (
        <section className="py-16 px-6 text-center bg-[#1E1E1E] w-full">
            <h2 className="text-3xl font-bold text-white mb-10 mt-0">Portfolio</h2>
            <div className="max-w-6xl mx-auto px-6">
                {/* Tags for Filtering */}
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                    {tags.map(tag => (
                        <button
                            key={tag}
                            className={`px-4 py-2 rounded-md transition ${selectedTag === tag ? "bg-[#DAA520] text-black" : "bg-gray-700 text-white hover:bg-[#DAA520] hover:text-black"
                                }`}
                            onClick={() => setSelectedTag(tag)}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map(project => (
                        <div
                            key={project.id}
                            className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />
                            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                            <p className="text-gray-400 text-sm">{project.description}</p>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs bg-gray-600 px-2 py-1 rounded-md text-white">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal for Project Details */}
                {selectedProject && (
                    <div
                        className="fixed inset-0 backdrop-blur-md flex items-center justify-center p-4"
                        onClick={() => setSelectedProject(null)} // Click outside to close
                    >
                        <div
                            className="bg-gray-900 p-6 rounded-lg max-w-lg text-center"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                        >
                            <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                            <p className="text-gray-400 mt-2">{selectedProject.details}</p>
                            <button
                                className="mt-4 px-6 py-2 bg-gray-700 text-white rounded-md hover:bg-[#DAA520] hover:text-black transition"
                                onClick={() => setSelectedProject(null)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Portfolio;
