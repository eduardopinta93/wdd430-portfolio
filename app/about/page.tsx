import SkillsCard from "@/components/SkillsCard";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>

      <p className="text-lg text-gray-700">
        I'm a web development student learning modern web technologies
        including React, Next.js, TypeScript, JavaScript, and Node.js.
        I enjoy building web applications and improving my skills as a
        full-stack developer.
      </p>

      <SkillsCard
        title="Technical Skills"
        skills={[
          "JavaScript",
          "Node.js",
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
        ]}
      />
    </main>
  );
}