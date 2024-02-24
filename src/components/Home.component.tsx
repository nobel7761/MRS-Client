import Navbar from "./shared/Navbar";

const HomeComponent = () => {
  return (
    <div
      className="bg-cover bg-center h-[75rem]"
      style={{ backgroundImage: 'url("/banner-background.jpg")' }}
    >
      <Navbar />
    </div>
  );
};

export default HomeComponent;
