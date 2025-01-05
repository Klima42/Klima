// src/components/Contact.jsx
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = ({ t }) => {
  return (
    <section id="contact" className="py-20 px-4 bg-[#0a0b0f] w-full">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 font-mono">
          <span className="text-[#00ff41]">&gt; </span>
          {t.contact.title}
        </h2>
        <div className="flex justify-center space-x-8">
          <ContactLink 
            href="mailto:kamil.serrai@gmail.com"
            Icon={Mail}
            text={t.contact.email}
          />
          <ContactLink 
            href="https://github.com/Klima42"
            Icon={Github}
            text={t.contact.github}
            external
          />
          <ContactLink 
            href="https://www.linkedin.com/in/kamil-serrai-ba30b7168"
            Icon={Linkedin}
            text={t.contact.linkedin}
            external
          />
        </div>
      </div>
    </section>
  );
};

const ContactLink = ({ href, Icon, text, external = false }) => (
  <a 
    href={href} 
    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    className="flex items-center text-gray-400 hover:text-[#00ff41] transition-colors"
  >
    <Icon size={24} className="mr-2" />
    {text}
  </a>
);

export default Contact;