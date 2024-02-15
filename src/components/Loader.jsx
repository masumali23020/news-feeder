import { FaSpinner } from "react-icons/fa";

const Loader = () => {
  return (
    <div
      className="h-[70vh]
        flex 
        flex-col 
        justify-center 
        items-center"
    >
      <FaSpinner className=" animate-spin m-auto" />
    </div>
  );
};

export default Loader;
