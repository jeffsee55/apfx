import { Header } from "./feature";
import Link from "next/link";
import { Img } from "../img";

type NewsProps = {
  title: string;
  subTitle?: string;
  newsItems: {
    article?: {
      data: {
        title: string;
        subTitle?: string;
        description: string;
      };
      sys: {
        filename: string;
      };
    };
  }[];
} & {};

export const News = (props: NewsProps) => {
  const overlayColor = "bg-gray-800";
  const overlayOpacity = "opacity-90";
  const image =
    "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80";
  return (
    <div className="relative bg-gray-800 py-20 px-4 sm:px-6 lg:py-40 lg:px-8">
      <div className="absolute inset-0 overflow-hidden">
        <Img
          className="w-full object-cover h-1/3 sm:h-2/3"
          src={image}
          alt=""
        />
        <div
          className={`absolute inset-0 ${overlayColor} mix-blend-multiply ${overlayOpacity} h-1/3 sm:h-2/3`}
          aria-hidden="true"
        />
        <div className="bg-gray-800 h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        {/* @ts-ignore */}
        <Header {...props} centered={true} />
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {props.newsItems.map((item) => (
            <Link href={`/news/${item.article.sys.filename}`}>
              <a
                key={item.article.sys.filename}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-gray-700"
              >
                <div className="flex-shrink-0">
                  <Img
                    className="h-56 w-full object-cover"
                    width={400}
                    src={
                      // @ts-ignore
                      item.article.data.image ||
                      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80"
                    }
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-gray-600 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-200">
                      <span className="uppercase">
                        {item.article.data.subTitle}
                      </span>
                    </p>
                    <span className="block mt-2">
                      <p className="text-xl font-semibold text-white">
                        {item.article.data.title}
                      </p>
                    </span>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
