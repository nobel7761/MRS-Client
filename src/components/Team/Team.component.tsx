import Image from "next/image";
import TopCover from "../shared/TopCover.component";
import CustomContainer from "../shared/Container";
import { useState } from "react";
import styles from "./Team.module.css";
import { teamMembers } from "@/assets/information";

interface IMember {
  name: string;
  role: string;
  source: string;
  description: string;
}

interface ITeamMemberCard {
  member: IMember;
  index: number;
  hoverIndex: number | null;
  setHoverIndex: (index: number | null) => void;
}

const TeamMemberCard = ({
  member,
  index,
  hoverIndex,
  setHoverIndex,
}: ITeamMemberCard) => (
  <div
    key={index}
    className={`w-fit rounded-lg shadow-lg bg-gradient-to-b from-[#060530] via-[#3244c3] to-[#081337] overflow-hidden relative cursor-pointer`}
    onMouseEnter={() => setHoverIndex(index)}
    onMouseLeave={() => setHoverIndex(null)}
  >
    <div className="relative">
      <Image
        height={1200}
        width={1200}
        src={member.source}
        alt={`Photo of ${member.name}`}
      />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
      <div className="absolute bottom-0 w-full pb-4">
        <h3 className="text-xl font-extrabold">{member.name}</h3>
        <p className="text-base font-medium text-blue-400">{member.role}</p>
      </div>
    </div>

    <div
      className={`absolute inset-0 bg-[#262492] text-white flex flex-col justify-between p-4 cursor-pointer transition-opacity duration-300 ${
        hoverIndex === index ? styles.slideIn : styles.slideOut
      }`}
    >
      <div>
        <p className="flex justify-start text-xl font-extrabold">
          {member.name}
        </p>
        <p className="flex justify-start text-[0.6rem]">{member.role}</p>
      </div>
      <p className="flex justify-start text-xs text-justify">
        {member.description}
      </p>
    </div>
  </div>
);

const TeamPageComponent = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div>
      <TopCover imageUrl="/breadcrumb-background.jpg" title="Team" />

      <section className="bg-[#060628] text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Partnered with most of the <br />
            <span className="text-blue-400">top people at each industry</span>
          </h2>

          <CustomContainer maxWidth="w-[80%]">
            <div className="flex justify-between gap-x-4 overflow-hidden">
              {teamMembers.map((member, index) => (
                <TeamMemberCard
                  key={index}
                  member={member}
                  index={index}
                  hoverIndex={hoverIndex}
                  setHoverIndex={setHoverIndex}
                />
              ))}
            </div>
          </CustomContainer>
        </div>
      </section>
    </div>
  );
};

export default TeamPageComponent;
