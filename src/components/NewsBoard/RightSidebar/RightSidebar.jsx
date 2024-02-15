import useNewsQuery from "../../../hooks/useNewsQuery";
import { getFormattedDate } from "../../../utils/date-utils";

const RightSidebar = () => {
  const { rightSidebarNews } = useNewsQuery();
  return (
    <div className="col-span-12 self-start xl:col-span-4">
      <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
        {/* <!-- news item --> */}
        {rightSidebarNews?.map((item) => (
          <div key={item?.title} className="col-span-12 mb-6 md:col-span-8">
            <img className="w-full pt-4" src={item?.urlToImage} alt="thumb" />
            {/* <!-- info --> */}
            <div className="col-span-12 mt-6 md:col-span-4">
              <a href="#">
                <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                  {item?.title}
                </h3>
              </a>
              <p className="text-base text-[#292219]">{item?.description}</p>
              <p className="mt-5 text-base text-[#94908C]">
                {getFormattedDate(item?.publishedAt)}
              </p>
            </div>
          </div>
        ))}
        {/* <!-- news item ends --> */}
      </div>
    </div>
  );
};

export default RightSidebar;
