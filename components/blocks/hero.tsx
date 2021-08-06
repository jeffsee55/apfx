import React from "react";
import { useLocaleInfo } from "../locale-info";
import { Markdown } from "../markdown";
import { useTheme } from "../theme";
import { DisplayText, Text } from "../typographqy";

export type Action = {
  callToAction?: string;
  link: string;
  linkText: string;
  secondaryText?: string;
  secondaryLink?: string;
};

type HeroProps = {
  title: string;
  description: string;
  image?: string;
  action?: Action;
};

export function Hero(props: HeroProps) {
  return (
    <div className="relative bg-gray-800 overflow-hidden">
      <div
        className="hidden sm:block sm:absolute sm:inset-0"
        aria-hidden="true"
      >
        <svg
          className="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
          width={364}
          height={384}
          viewBox="0 0 364 384"
          fill="none"
        >
          <defs>
            <pattern
              id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} fill="currentColor" />
            </pattern>
          </defs>
          <rect
            width={364}
            height={384}
            fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"
          />
        </svg>
      </div>
      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                <div>
                  {props.action && (
                    <a
                      href={props.action.link}
                      target="_blank"
                      className="inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                    >
                      <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">
                        {props.action.linkText}
                      </span>
                      <span className="ml-4 text-sm">
                        {props.action.linkText}
                      </span>
                    </a>
                  )}
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                    <span className="md:block">
                      <Markdown>{props.title}</Markdown>
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    {props.description}
                  </p>
                  <p className="mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10">
                    Used by
                  </p>
                  <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                    <div className="flex flex-wrap items-start justify-between">
                      <div className="flex justify-center px-1">
                        <img
                          className="h-9 sm:h-10"
                          src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                          alt="Tuple"
                        />
                      </div>
                      <div className="flex justify-center px-1">
                        <img
                          className="h-9 sm:h-10"
                          src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                          alt="Workcation"
                        />
                      </div>
                      <div className="flex justify-center px-1">
                        <img
                          className="h-9 sm:h-10"
                          src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                          alt="StaticKit"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                  <div className="px-4 py-8 sm:px-10">
                    <div className="mt-6">
                      <h1 className="mt-4 text-xl tracking-tight font-extrabold sm:mt-5 sm:leading-none lg:mt-6 ">
                        <span className="md:block">Get started today</span>
                      </h1>
                      <form action="#" method="POST" className="space-y-6">
                        <div>
                          <button
                            type="submit"
                            // className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 "
                          >
                            Sign Up
                          </button>
                        </div>
                        <div className="mt-6 relative">
                          <div
                            className="absolute inset-0 flex items-center"
                            aria-hidden="true"
                          >
                            <div className="w-full border-t border-gray-300" />
                          </div>
                          <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">
                              Or
                            </span>
                          </div>
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                          >
                            Log In
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10">
                    <p className="text-xs leading-5 text-gray-500">
                      By signing up, you agree to our{" "}
                      <a
                        href="#"
                        className="font-medium text-gray-900 hover:underline"
                      >
                        Terms
                      </a>
                      ,{" "}
                      <a
                        href="#"
                        className="font-medium text-gray-900 hover:underline"
                      >
                        Data Policy
                      </a>{" "}
                      and{" "}
                      <a
                        href="#"
                        className="font-medium text-gray-900 hover:underline"
                      >
                        Cookies Policy
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export function HeroWithSlantImage(props: HeroProps) {
  const bg = "bg-gray-900";
  const text = "text-gray-900";
  return (
    <div className={`relative ${bg} overflow-hidden`}>
      <div className="max-w-7xl mx-auto relative z-30">
        <div
          className={`relative z-10 py-40 sm:pb-20 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:py-72`}
        >
          {/* <main className="mx-auto max-w-7xl px-4 mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"> */}
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="sm:text-center lg:text-left">
              <DisplayText variant={"light"}>{props.title}</DisplayText>
              <Markdown classNames="mt-4 md:mt-8">{props.description}</Markdown>
              {props.action && <ActionBox action={props.action} />}
            </div>
          </main>
        </div>
      </div>
      <div className="hidden lg:block lg:absolute z-20 lg:inset-y-0 lg:left-0 lg:w-1/2 opacity-90">
        <div className={`absolute inset-0 ${bg}`} aria-hidden="true" />
        <svg
          className={`${text} hidden lg:block absolute right-0 inset-y-0 h-full w-1/2  transform translate-x-1/2`}
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
      </div>
      <div className="lg:absolute lg:inset-0">
        {/* <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"> */}
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={props.image}
          alt=""
        />
        <div
          className={`absolute inset-0 bg-indigo-900 mix-blend-multiply opacity-90`}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

const ActionBox = (props: { action: Action }) => {
  const localeInfo = useLocaleInfo();
  const link =
    props.action.link === "tel"
      ? `tel: ${localeInfo[props.action.link]}`
      : localeInfo[props.action.link];
  const secondaryLink =
    props.action.secondaryLink === "tel"
      ? `tel: ${localeInfo[props.action.secondaryLink]}`
      : localeInfo[props.action.secondaryLink];

  return (
    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
      <div className="rounded-md shadow">
        <a
          href={link || ""}
          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
        >
          {props.action?.linkText || ""}
        </a>
      </div>
      {secondaryLink && (
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <a
            href={secondaryLink}
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
          >
            {props.action.secondaryText}
          </a>
        </div>
      )}
    </div>
  );
};

export const ActionSlim = (props: { action?: Action }) => {
  return props.action && props.action.linkText ? (
    <div className="mt-8 flex justify-start">
      <PrimaryButton link={props.action?.link}>
        {props.action.linkText}
      </PrimaryButton>
      {props.action.secondaryText && (
        <SecondaryButton link={props.action.secondaryLink}>
          {props.action.secondaryText}
        </SecondaryButton>
      )}
    </div>
  ) : null;
};

type ButtonProps = {
  link: string;
  children: React.ReactNode;
};
const PrimaryButton = (props: ButtonProps) => {
  const themeContext = useTheme();
  const variant = themeContext.variant;
  switch (variant) {
    case "classic":
      return <ClassicPrimary {...props} />;
    case "modern":
      return <ModernPrimary {...props} />;
    case "standard":
      return <StandardPrimary {...props} />;
  }
};

const SecondaryButton = (props: ButtonProps) => {
  const themeContext = useTheme();
  const variant = themeContext.variant;
  switch (variant) {
    case "classic":
      return <ClassicSecondary {...props} />;
    case "modern":
      return <ModernSecondary {...props} />;
    case "standard":
      return <StandardSecondary {...props} />;
  }
};

const ClassicPrimary = (props: ButtonProps) => {
  return (
    <div className="inline-flex rounded-md shadow">
      <a
        href={props.link}
        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
      >
        {props.children}
      </a>
    </div>
  );
};

const ClassicSecondary = (props: ButtonProps) => {
  return (
    <div className="ml-3 inline-flex">
      <a
        href={props.link}
        className="inline-flex items-center justify-center px-5 py-3 border-2 border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
      >
        {props.children}
      </a>
    </div>
  );
};

const StandardPrimary = (props: ButtonProps) => {
  const fontStyles = `uppercase tracking-widest text-sm font-bold `;
  return (
    <div className="inline-flex rounded-md shadow">
      <a
        href={props.link}
        className={`inline-flex ${fontStyles} items-center justify-center px-5 py-4 border border-transparent rounded-md text-white bg-indigo-600 hover:bg-indigo-700`}
      >
        {props.children}
      </a>
    </div>
  );
};

const StandardSecondary = (props: ButtonProps) => {
  const fontStyles = `uppercase tracking-widest text-sm font-bold `;
  return (
    <div className="ml-3 inline-flex">
      <a
        href={props.link}
        className={`inline-flex ${fontStyles} items-center justify-center px-8 py-4 border border-transparent rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200`}
      >
        {props.children}
      </a>
    </div>
  );
};
const ModernPrimary = (props: ButtonProps) => {
  return (
    <div className="inline-flex rounded-none shadow">
      <a
        href={props.link}
        className="inline-flex items-center justify-center px-8 py-5 border border-indigo-100 text-sm tracking-widest uppercase font-normal rounded-none text-white bg-transparent hover:bg-indigo-900"
      >
        {props.children}
      </a>
    </div>
  );
};

const ModernSecondary = (props: ButtonProps) => {
  return (
    <div className="ml-3 inline-flex">
      <a
        href={props.link}
        className="inline-flex items-center justify-center px-8 py-5 border-2 border-indigo-100 text-sm tracking-widest uppercase font-normal rounded-none text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
      >
        {props.children}
      </a>
    </div>
  );
};
