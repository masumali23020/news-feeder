import CategoryMenu from "./CategoryMenu";
import FooterLogo from "./FooterLogo";
import FooterMenu from "./FooterMenu";
import SocialLogos from "./SocialLogos";
import TermMenu from "./TermMenu";

const FooterTop = () => {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:col-span-7 xl:grid-cols-5">
      <FooterLogo />
      <FooterMenu />
      <CategoryMenu />
      <TermMenu />
      <SocialLogos />
    </div>
  );
};

export default FooterTop;
