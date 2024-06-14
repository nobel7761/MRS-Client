import { neon_font } from "@/fonts";
import TopCover from "./shared/TopCover.component";

const HomeComponent = () => {
  return (
    <>
      <TopCover height="h-[75rem]" imageUrl="/banner-background.jpg">
        <>
          <h1 className="text-white ">hello bangladesh</h1>
          <h1
            className={`font-bold text-6xl uppercase text-neon ${neon_font.className}`}
          >
            FIND YOUR HUMANPOWER
          </h1>
        </>
      </TopCover>
      <h2>this is check</h2>
    </>
  );
};

export default HomeComponent;
