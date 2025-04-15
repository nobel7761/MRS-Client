import CountUp from "react-countup";
import { FaPlus } from "react-icons/fa";
import Title from "../shared/Title";

const CounterSection = () => {
  return (
    <div className={`mx-auto bg-primary pb-16`}>
      <Title
        text="Our Track Record Speaks for Itself"
        className="text-white text-center"
      />
      <div className=" mx-auto text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* experience */}
          <div className="flex flex-col items-center p-6 rounded-lg hover:bg-primary/90 transition-all duration-300">
            <div className="flex items-center gap-x-2 mb-3">
              <CountUp
                end={5}
                duration={3}
                className="text-5xl lg:text-6xl font-black tracking-tight"
              />
              <FaPlus className="text-2xl lg:text-3xl" />
            </div>
            <p className="text-xl lg:text-2xl font-semibold text-center">
              Years of Experience
            </p>
          </div>

          {/* clients */}
          <div className="flex flex-col items-center p-6 rounded-lg hover:bg-primary/90 transition-all duration-300">
            <div className="flex items-center gap-x-2 mb-3">
              <CountUp
                end={25}
                duration={3}
                className="text-5xl lg:text-6xl font-black tracking-tight"
              />
              <FaPlus className="text-2xl lg:text-3xl" />
            </div>
            <p className="text-xl lg:text-2xl font-semibold text-center">
              Trusted Clients
            </p>
          </div>

          {/* Candidates */}
          <div className="flex flex-col items-center p-6 rounded-lg hover:bg-primary/90 transition-all duration-300">
            <div className="flex items-center gap-x-2 mb-3">
              <CountUp
                end={12000}
                duration={3}
                className="text-5xl lg:text-6xl font-black tracking-tight"
              />
              <FaPlus className="text-2xl lg:text-3xl" />
            </div>
            <p className="text-xl lg:text-2xl font-semibold text-center">
              Verified Candidates
            </p>
          </div>

          {/* employees */}
          <div className="flex flex-col items-center p-6 rounded-lg hover:bg-primary/90 transition-all duration-300">
            <div className="flex items-center gap-x-2 mb-3">
              <CountUp
                end={300}
                duration={3}
                className="text-5xl lg:text-6xl font-black tracking-tight"
              />
              <FaPlus className="text-2xl lg:text-3xl" />
            </div>
            <p className="text-xl lg:text-2xl font-semibold text-center">
              Active Employees
            </p>
          </div>

          {/* project done */}
          <div className="flex flex-col items-center p-6 rounded-lg hover:bg-primary/90 transition-all duration-300">
            <div className="flex items-center gap-x-2 mb-3">
              <CountUp
                end={120}
                duration={3}
                className="text-5xl lg:text-6xl font-black tracking-tight"
              />
              <FaPlus className="text-2xl lg:text-3xl" />
            </div>
            <p className="text-xl lg:text-2xl font-semibold text-center">
              Training Sessions Held
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
