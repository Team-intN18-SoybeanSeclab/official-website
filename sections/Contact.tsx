import ContactBlock from "@/components/ui/ContactBlock";
import { contact } from "@/config/contact.json";

const Contact = () => {
  return (
    <div id="contact" className="border-b border-mobai-border">
      <div className="border-b border-mobai-border px-4">
        <p className="bg-mobai-border text-foreground dark:text-background w-fit px-2 font-medium">
          如果您有任何问题或合作意向，欢迎通过以下方式联系我们
        </p>
      </div>
      <div className="grid p-4 grid-cols-1 gap-4 w-full md:grid-cols-2 lg:grid-cols-3 border-mobai-border xl:grid-cols-4">
        {contact.map((contact) => (
          <ContactBlock
            key={contact.name}
            name={contact.name}
            href={contact.href}
            description={contact.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Contact;
