import useNewsQuery from "../../../hooks/useNewsQuery";
import { getFormattedDate } from "../../../utils/date-utils";

const FeaturedNews = () => {
  const { featureNews } = useNewsQuery();

  const { title, description, urlToImage, author, publishedAt } =
    featureNews || {};

  return (
    <>
      {featureNews && (
        <div className="col-span-12 grid grid-cols-12 gap-4">
          {/* <!-- info --> */}
          <div className="col-span-12 lg:col-span-4">
            <a href="#">
              <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                {title}
              </h3>
            </a>
            <p className="text-base text-[#5C5955]">{description}</p>
            <p className="mt-5 text-base text-[#5C5955]">
              {getFormattedDate(publishedAt)}
            </p>
          </div>
          {/* <!-- thumb --> */}
          <div className="col-span-12 lg:col-span-8">
            <img className="w-full" src={urlToImage} alt="thumb" />
            <p className="mt-5 text-base text-[#5C5955]">Author: {author}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturedNews;
