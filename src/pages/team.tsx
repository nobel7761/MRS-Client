import { layoutUser } from "@/components/layouts/UserLayout";
import TeamPageComponent from "@/components/Team/Team.component";
import Head from "next/head";

const TeamPage = () => {
  return (
    <div>
      <Head>
        <title>MRS | Teams</title>
      </Head>
      <TeamPageComponent />
    </div>
  );
};

TeamPage.getLayout = layoutUser;

export default TeamPage;
