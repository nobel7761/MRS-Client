import Image from "next/image";
import TopCover from "../shared/TopCover.component";

const teamMembers = [
  {
    name: "Yomi Denzel",
    role: "E-Commerce 2.0",
    image: "/path-to-yomi-image.jpg",
    gradient: "bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6]",
  },
  {
    name: "Timothée Moiroux",
    role: "Investissement Immobilier",
    image: "/path-to-timothee-image.jpg",
    gradient: "bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6]",
    description:
      "It was in high school, then a student that Timothée understood the false freedom offered by studies...",
  },
  {
    name: "David Sequiera",
    role: "Closing",
    image: "/path-to-david-image.jpg",
    gradient: "bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6]",
  },
  {
    name: "Manuel Ravier",
    role: "Investissement Immobilier",
    image: "/path-to-manuel-image.jpg",
    gradient: "bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6]",
  },
];

const TeamPageComponent = () => {
  return (
    <div>
      <TopCover imageUrl="/breadcrumb-background.jpg" title="Team" />

      <section className="bg-[#060628] text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Partnered with most of the <br />{" "}
            <span className="text-blue-400">top people at each industry</span>
          </h2>
          <div className="flex justify-center space-x-4 ">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`w-64 rounded-lg shadow-lg bg-gradient-to-b from-[#060530] via-[#3244c3] to-[#081337]`}
              >
                <Image
                  height={1200}
                  width={1200}
                  className=""
                  src="/fariha.png"
                  alt={member.name}
                />
                <h3 className="text-2xl">{member.name}</h3>
                <p className="text-xs text-blue-400">{member.role}</p>
                {/* {member.description && (
                  <p className="mt-4 text-sm">{member.description}</p>
                )} */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPageComponent;
