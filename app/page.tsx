import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Event Management System",
    description:
      "An event management application for creating and managing event-related data.",
    technologies: ["Node.js", "JavaScript"],
    link: "https://github.com/eduardopinta93/event-management-system",
  },
  {
    title: "Personal Library API",
    description:
      "A REST API for managing a personal library and book-related data.",
    technologies: ["Node.js", "JavaScript"],
    link: "https://github.com/eduardopinta93/personal-library-api",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>

        <p className="text-lg text-gray-700">
          I'm a web development student learning Next.js and React. Here are
          some of my recent projects.
        </p>
      </section>

      <ProjectList projects={projects} />
    </main>
  );
}