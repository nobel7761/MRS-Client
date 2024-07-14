import { layoutUser } from "@/components/layouts/UserLayout";
import TeamPageComponent from "@/components/Team/Team.component";

const TeamPage = () => {
  return (
    <div>
      <TeamPageComponent />
      {/* <h1>team</h1> */}
    </div>
  );
};

TeamPage.getLayout = layoutUser;

export default TeamPage;
