import { PulseLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="min-h-screen flex justify-center items-center ">
            <PulseLoader
              color="#B0B0B0"
              cssOverride={{}}
              speedMultiplier={1}
            />
        </div>
    );
};

export default Loading;