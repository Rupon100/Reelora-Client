import { PulseLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="min-h-screen flex justify-center items-center ">
            <PulseLoader
              color="#261313"
              cssOverride={{}}
              speedMultiplier={1}
            />
        </div>
    );
};

export default Loading;