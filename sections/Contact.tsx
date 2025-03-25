import ContactBlock from "@/components/ui/ContactBlock";
import { contact } from "@/config/contact.json";

const Contact = () => {
  return (
    <div id="contact" className="border-mobai-border border-b">
      <div className="px-4">
        <p className="bg-mobai-border text-foreground dark:text-background w-fit px-2 font-medium">
          如果您有任何问题或合作意向，欢迎通过以下方式联系我们
        </p>
      </div>
      <div className="border-mobai-border grid w-full grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
