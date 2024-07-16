import { layoutUser } from "@/components/layouts/UserLayout";
import TeamPageComponent from "@/components/Team/Team.component";

const TeamPage = () => {
  return (
    <div>
      <TeamPageComponent />
    </div>
  );
};

TeamPage.getLayout = layoutUser;

export default TeamPage;
