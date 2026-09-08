interface SkillsCardProps {
  title: string;
  skills: string[];
}

export default function SkillsCard({
  title,
  skills,
}: SkillsCardProps) {
  return (
    <section className="mt-8 p-6 bg-gray-50 border rounded-lg shadow-sm">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>

      <ul className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}