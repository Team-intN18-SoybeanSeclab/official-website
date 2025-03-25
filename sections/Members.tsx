import MembarBlock from "@/components/ui/MembarBlock";
import { members } from "@/config/members.json";

const Members = () => {
  return (
    <div
      id="members"
      className="grid grid-cols-2 gap-4 p-4 w-full md:grid-cols-3 lg:grid-cols-4 border-b border-mobai-border xl:grid-cols-5 2xl:grid-cols-6"
    >
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
  );
};

export default Members;
