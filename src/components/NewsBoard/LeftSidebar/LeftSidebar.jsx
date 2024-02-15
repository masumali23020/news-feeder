import AllNewsList from "./AllNewsList";
import FeaturedNews from "./FeaturedNews";

const LeftSidebar = () => {
  return (
    <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
      <FeaturedNews />
      <AllNewsList />
    </div>
  );
};

export default LeftSidebar;
