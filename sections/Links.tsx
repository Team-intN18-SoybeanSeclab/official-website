import LinkBlock from "@/components/ui/LinkBlock";
import { links } from "@/config/links.json";

const Links = () => {
  return (
    <div
      id="links"
      className="border-mobai-border grid w-full grid-cols-1 gap-4 border-b p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
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
