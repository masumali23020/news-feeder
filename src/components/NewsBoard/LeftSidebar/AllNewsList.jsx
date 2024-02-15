import useNewsQuery from "../../../hooks/useNewsQuery";
import { getFormattedDate } from "../../../utils/date-utils";

const AllNewsList = () => {
  const { leftSidebarNews } = useNewsQuery();
  return (
    <>
      {leftSidebarNews?.map((item, indx) => (
        <div key={indx} className="col-span-12 md:col-span-6 lg:col-span-4">
          {/* <!-- info --> */}
          <div className="col-span-12 md:col-span-4">
            <a href="#">
              <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                {item?.title}
              </h3>
            </a>
            <p className="text-base text-[#292219]">{item?.content}</p>
            <p className="mt-5 text-base text-[#94908C]">
              {getFormattedDate(item?.publishedAt)}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default AllNewsList;
