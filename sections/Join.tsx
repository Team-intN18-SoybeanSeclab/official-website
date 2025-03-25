import JoinBlock from "@/components/ui/JoinBlock";
import { join } from "@/config/join.json";

const Join = () => {
  return (
    <div id="join">
      <div className="px-4">
        <p className="bg-mobai-yellow text-foreground dark:text-background w-fit px-2 font-medium">
          如果您想加入本团队，可通过以下方式投递您的简历
        </p>
      </div>
      <div className="border-mobai-border grid w-full grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
  );
};

export default Join;
