import Logo from "./Logo";
import Searchbar from "./Searchbar";
import Time from "./Time";

const TopNavbar = () => {
  return (
    <div className="container mx-auto flex flex-wrap items-center justify-between gap-6">
      <Time />
      <Logo />
      <Searchbar />
    </div>
  );
};

export default TopNavbar;
