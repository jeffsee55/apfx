import { LogoJumbo } from "../nav";
import Link from "next/link";
import { DisplayText, SubTitleText } from "../typographqy";
import { ActionSlim } from "./hero";
import { Markdown } from "../markdown";
import { Img } from "../img";
import type { TinaTemplate } from "tinacms";
import { Selector, TypesPropsResolver } from "../../zeus";
import { Response } from "../util";

export const fullScreenLogoTemplate = (overlayControls): TinaTemplate => {
  return {
    label: "Full Screen Logo",
    name: "fullScreenLogo",
    fields: [
      {
        label: "Slogan",
        name: "slogan",
        type: "string",
      },
      {
        label: "Link",
        name: "link",
        type: "string",
      },
      ...overlayControls,
    ],
    ui: {
      defaultItem: {
        image:
          "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100",
      },
    },
  };
};

export const fullScreenHeaderTemplate = (
  textFields,
  action,
  overlayControls
): TinaTemplate => {
  return {
    label: "Full Screen Header",
    name: "fullScreenHeader",
    fields: [...textFields, action, ...overlayControls],
    ui: {
      defaultItem: {
        title: "What we do",
        description:
          "Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut consectetur. Sit justo viverra non adipisicing elit distinctio.",
        image:
          "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100",
      },
    },
  };
};

export const blockFullScreenLogoQuery = Selector("PageBlocksFullScreenLogo")({
  slogan: true,
  link: true,
  image: true,
  textColor: true,
  overlayColor: true,
  overlayOpacity: true,
});

type FullScreenLogoType = Response<
  "PageBlocksFullScreenLogo",
  typeof blockFullScreenLogoQuery
>;

export const blockFullScreenHeaderQuery = Selector(
  "PageBlocksFullScreenHeader"
)({
  title: true,
  subTitle: true,
  description: true,
  image: true,
  overlayColor: true,
  overlayOpacity: true,
  action: {
    link: true,
    linkText: true,
    secondaryLink: true,
    secondaryText: true,
  },
  textColor: true,
});

type HeaderProps = Response<
  "PageBlocksFullScreenHeader",
  typeof blockFullScreenHeaderQuery
>;

export const Overlay = ({
  children,
  ...props
}: Pick<HeaderProps, "overlayColor" | "overlayOpacity" | "image"> & {
  children: JSX.Element | JSX.Element[];
}) => {
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
  return (
    <div className={`relative ${overlayColor}`}>
      <div className="absolute inset-0">
        <Img
          lazy={true}
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
      {children}
    </div>
  );
};

export function FullScreenLogo(props: FullScreenLogoType) {
  const textColor = props.textColor === "dark" ? "text-gray-800" : "text-white";

  return (
    <Overlay {...props}>
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
    </Overlay>
  );
}

/* This example requires Tailwind CSS v2.0+ */
export function FullScreenHeaderWithBackground(
  props: HeaderProps & { slideshow?: boolean }
) {
  return (
    <Overlay {...props}>
      <div className="relative max-w-7xl mx-auto py-36 px-4 sm:py-72 md:py-96 sm:px-6 lg:px-8">
        <div className={`${props.slideshow && "slideshow-text"}`}>
          <TextBlurb {...props} />
          <ActionSlim action={props.action} />
        </div>
      </div>
    </Overlay>
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
