import TeamPageComponent from "@/components/Team/Team.component";
import { layoutUser } from "@/components/layouts/UserLayout";

const TeamPage = () => {
  return (
    <div>
      <TeamPageComponent />
      <h1>team</h1>
    </div>
  );
};

TeamPage.getLayout = layoutUser;

export default TeamPage;
