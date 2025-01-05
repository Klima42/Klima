// src/components/Skills.jsx
const Skills = ({ t }) => {
    return (
      <section id="skills" className="py-20 px-4 bg-[#0a0b0f] w-full">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 font-mono">
            <span className="text-[#00ff41]">&gt; </span>
            {t.skills.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.skills.categories.map((category, index) => (
              <SkillCategory key={index} category={category} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  const SkillCategory = ({ category }) => (
    <div className="space-y-4">
      <h3 className="text-xl font-mono text-[#00ff41] mb-4">{category.category}</h3>
      <div className="flex flex-wrap gap-2">
        {category.items.map((skill, i) => (
          <span 
            key={i} 
            className="bg-[#1a1b23] border border-[#00ff41]/20 text-gray-300 px-4 py-2 rounded hover:border-[#00ff41]/40 hover:text-[#00ff41] transition-all duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
  
  export default Skills;