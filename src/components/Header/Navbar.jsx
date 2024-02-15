import Categories from "./Categories";
import TopNavbar from "./TopNavbar";

const Navbar = () => {
  return (
    <nav className="border-b border-black py-6 md:py-8">
      <TopNavbar />
      <Categories />
    </nav>
  );
};

export default Navbar;
