import LinkBlock from "@/components/ui/LinkBlock";
import { links } from "@/config/links.json";

const Links = () => {
  return (
    <div
      id="links"
      className="grid grid-cols-1 gap-4 p-4 w-full md:grid-cols-2 lg:grid-cols-3 border-mobai-border xl:grid-cols-4 border-b"
    >
      {links.map((link) => (
        <LinkBlock
          key={link.name}
          name={link.name}
          href={link.href}
          description={link.description}
        />
      ))}
    </div>
  );
};

export default Links;
