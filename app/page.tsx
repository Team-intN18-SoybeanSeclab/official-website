import ContactBlock from "@/components/ui/ContactBlock";
import JoinBlock from "@/components/ui/JoinBlock";
import LinkBlock from "@/components/ui/LinkBlock";
import MembarBlock from "@/components/ui/MembarBlock";
import Sidebar from "@/components/layout/Sidebar";
import { contact } from "@/config/contact.json";
import { join } from "@/config/join.json";
import { links } from "@/config/links.json";
import { members } from "@/config/members.json";

export default function Home() {
  return (
    <div className="flex flex-row h-screen w-full max-w-7xl mx-auto">
      <Sidebar />
      <div
        id="members"
        className="w-full overflow-y-auto overflow-x-hidden xl:border-r border-mobai-border scrollbar-hide"
      >
        <div className="grid grid-cols-2 gap-4 p-4 w-full md:grid-cols-3 lg:grid-cols-4 border-b border-mobai-border xl:grid-cols-5 2xl:grid-cols-6">
          {members.map((member) => (
            <MembarBlock
              key={member.name}
              href={member.href}
              image={member.image}
              name={member.name}
              description={member.description}
            />
          ))}
        </div>
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
        <div id="contact" className="border-b border-mobai-border">
          <div className="border-b border-mobai-border px-4">
            <p className="bg-mobai-border text-background w-fit px-2 font-medium">
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
        <div id="join">
          <div className="border-b border-mobai-border px-4">
            <p className="bg-mobai-yellow text-background w-fit px-2 font-medium">
              如果您想加入本团队，可通过以下方式投递您的简历
            </p>
          </div>
          <div className="grid p-4 grid-cols-1 gap-4 w-full md:grid-cols-2 lg:grid-cols-3 border-mobai-border xl:grid-cols-4">
            {join.map((join) => (
              <JoinBlock
                key={join.name}
                name={join.name}
                href={join.href}
                description={join.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
