import useNewsQuery from "../../hooks/useNewsQuery";
import Loader from "../Loader";
import LeftSidebar from "./LeftSidebar/LeftSidebar";
import RightSidebar from "./RightSidebar/RightSidebar";

const NewsBoard = () => {
  const { news, loading } = useNewsQuery();
  // xvx
  return (
    <main className="my-10 lg:my-14">
      {loading ? (
        <Loader />
      ) : (
        <div className="container mx-auto grid grid-cols-12 gap-8">
          {news.length > 0 ? (
            <>
              <LeftSidebar />
              <RightSidebar />
            </>
          ) : (
            <p className="text-2xl font-bold lg:text-[28px] text-center col-span-12">
              No News Found
            </p>
          )}
        </div>
      )}
    </main>
  );
};

export default NewsBoard;
