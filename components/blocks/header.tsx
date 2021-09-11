import { Logo, LogoJumbo } from "../nav";
import Link from "next/link";
import { DisplayText, SubTitleText, Text } from "../typographqy";
import { Action, ActionSlim } from "./hero";
import { Markdown } from "../markdown";
import { Img } from "../img";

type HeaderProps = {
  title: string;
  subTitle?: string;
  description: string;
  image?: string;
  overlayColor?: string;
  overlayOpacity?: string;
  textColor?: string;
  action?: Action;
};

export function FullScreenLogo(
  props: Omit<HeaderProps, "header" | "title" | "description"> & {
    link?: string;
    slogan?: string;
  }
) {
  const overlayColor =
    props.overlayColor === "brand" ? "bg-indigo-800" : "bg-gray-800";
  const opacityMap = {
    1: "opacity-10",
    2: "opacity-20",
    3: "opacity-30",
    4: "opacity-40",
    5: "opacity-50",
    6: "opacity-60",
    7: "opacity-70",
    8: "opacity-80",
    9: "opacity-90",
    10: "opacity-100",
  };
  const overlayOpacity = opacityMap[props.overlayOpacity] || "opacity-90";
  const textColor = props.textColor === "dark" ? "text-gray-800" : "text-white";

  return (
    <div className={`relative ${overlayColor}`}>
      <div className="absolute inset-0">
        <Img
          className="w-full h-full object-cover"
          src={props.image}
          alt=""
          width={1400}
        />
        <div
          className={`absolute inset-0 ${overlayColor} mix-blend-multiply ${overlayOpacity}`}
          aria-hidden="true"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-36 px-4 sm:py-72 sm:px-6 lg:px-8 min-h-full">
        <div className="fade-in-text">
          <div className="flex items-center justify-center">
            <LogoJumbo
              variant={props.textColor}
              classNames="w-32 sm:w-64 lg:w-96"
            />
          </div>
          <h2
            className={`text-center ${textColor} text-lg md:text-xl mt-12 uppercase font-display tracking-widest`}
          >
            {props.slogan}
          </h2>
          {props.link && (
            <div className="relative">
              <div
                className={`flex items-center justify-center my-12 md:my-24 relative`}
              >
                <Link href={props.link}>
                  <a className="w-16 h-16 flex items-center justify-center relative">
                    <div className="inset-0 absolute bg-gray-100 opacity-0 z-20 cursor-pointer hover:opacity-25 rounded-full" />
                    <div
                      className={`flex items-center justify-center animate-bounce ${textColor}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* This example requires Tailwind CSS v2.0+ */
export function FullScreenHeaderWithBackground(
  props: HeaderProps & { slideshow?: boolean }
) {
  const overlayColor =
    props.overlayColor === "brand" ? "bg-indigo-800" : "bg-gray-800";
  const opacityMap = {
    1: "opacity-10",
    2: "opacity-20",
    3: "opacity-30",
    4: "opacity-40",
    5: "opacity-50",
    6: "opacity-60",
    7: "opacity-70",
    8: "opacity-80",
    9: "opacity-90",
    10: "opacity-100",
  };
  const overlayOpacity = opacityMap[props.overlayOpacity] || "opacity-50";

  return (
    <div className={`relative ${overlayColor}`}>
      <div className="absolute inset-0">
        <Img
          className="w-full h-full object-cover"
          src={props.image}
          alt=""
          width={1400}
        />
        <div
          className={`absolute inset-0 ${overlayColor} mix-blend-multiply ${overlayOpacity}`}
          aria-hidden="true"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-36 px-4 sm:py-72 md:py-96 sm:px-6 lg:px-8">
        <div className={`${props.slideshow && "slideshow-text"}`}>
          <TextBlurb {...props} />
          <ActionSlim action={props.action} />
        </div>
      </div>
    </div>
  );
}

const TextBlurb = (props: Omit<HeaderProps, "image">) => {
  const textColor = props.textColor === "dark" ? "dark" : "light";
  return (
    <>
      {props.subTitle && (
        <SubTitleText variant={textColor}>{props.subTitle}</SubTitleText>
      )}
      <DisplayText variant={textColor}>{props.title}</DisplayText>
      <Markdown colorVariant={textColor} classNames="max-w-3xl mt-8">
        {props.description}
      </Markdown>
    </>
  );
};
