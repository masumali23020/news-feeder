import CopyRight from "./CopyRight";
import FooterTop from "./FooterTop";
import Subscribe from "./Subscribe";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 pb-8 pt-20 text-white sm:pt-24">
      <div className="container mx-auto">
        <div className="xl:grid xl:grid-cols-12 xl:gap-8">
          <FooterTop />
          <Subscribe />
        </div>
      </div>
      <CopyRight />
    </footer>
  );
};

export default Footer;
