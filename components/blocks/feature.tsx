// FIXME: this is loading everything for convenience, once we've nailed down a few
// should just use those
import * as Icons from "@heroicons/react/outline";
import React from "react";
import { DisplayText, SubTitleText, Text } from "../typographqy";
import { Action, ActionSlim } from "./hero";

type Feature = {
  name: string;
  description: string;
  icon: string;
};
type FeatureProps = {
  title: string;
  subTitle?: string;
  description: string;
  features: Feature[];
  image?: string;
  overlayColor?: string;
  overlayOpacity?: string;
  textColor?: string;
};

type Testimonial = {
  quote: string;
  author?: {
    name: string;
    avatar: string;
  };
};

type ScreenShopFeatureProps = {
  title: string;
  subTitle?: string;
  description: string;
  image?: string;
  icon?: string;
  action?: Action;
  testimonial?: Testimonial;
};

export function ScreenshotFeatureLeft(props: ScreenShopFeatureProps) {
  const Icon = Icons[props.icon] || Icons.InboxIcon;
  return (
    <div className="relative bg-gray-800 pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div className="flex items-center">
                {props.icon && (
                  <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                    <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                )}
                {props.subTitle && <h2>{props.subTitle}</h2>}
              </div>
              <div className="mt-6">
                <DisplayText size="text-3xl">{props.title}</DisplayText>
                <p className="mt-4 text-lg text-gray-100">
                  {props.description}
                </p>
                <ActionSlim action={props.action} />
              </div>
            </div>
            {props.testimonial && (
              <Testimonial testimonial={props.testimonial} />
            )}
          </div>
          <div className={`mt-12 sm:mt-16 lg:mt-0`}>
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={props.image}
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export function ScreenshotFeatureRight(props: ScreenShopFeatureProps) {
  const Icon = Icons[props.icon] || Icons.SparklesIcon;
  return (
    <div className="relative bg-gray-800 pt-16 pb-32 overflow-hidden">
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                  <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <DisplayText size="text-3xl">{props.title}</DisplayText>
                <p className="mt-4 text-lg text-gray-100">
                  {props.description}
                </p>
                <ActionSlim action={props.action} />
              </div>
            </div>
            {props.testimonial && (
              <Testimonial testimonial={props.testimonial} />
            )}
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={props.image}
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Wrapper = (props: { children: React.ReactNode }) => {
  return (
    <div className="bg-indigo-800 relative">
      <div className="absolute inset-0 z-20">
        <img
          className="w-full h-full object-cover"
          // @ts-ignore
          src={props.image}
          alt=""
        />
        <div
          className={`absolute inset-0 bg-indigo-800 mix-blend-multiply opacity-5 z-40`}
          aria-hidden="true"
        />
      </div>
      <div className="relative z-30 max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:py-32 lg:py-48 lg:max-w-7xl lg:px-8">
        {props.children}
      </div>
    </div>
  );
};

const Icon = (props: { feature: Feature }) => {
  const InnerIcon = Icons[props.feature.icon];
  return (
    <div>
      <span className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500">
        <InnerIcon className="h-6 w-6 text-white" aria-hidden="true" />
      </span>
    </div>
  );
};

export function FourWideGrid(props: FeatureProps) {
  return (
    <Wrapper {...props}>
      <Header {...props} />
      <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
        {props.features?.map((feature, index) => {
          return (
            <div key={feature.name + index}>
              <Icon feature={feature} />
              <div className="mt-6">
                <FeatureName>{feature.name}</FeatureName>
                <p className="mt-2 text-base text-indigo-200">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}

function Hr({ centered }: { centered?: boolean }) {
  return (
    <div className={`flex items-center ${centered && "lg:justify-center"}`}>
      <div className="w-48 h-1 mt-8 bg-white rounded-sm" />
    </div>
  );
}

export function TwoWideGrid(props: FeatureProps) {
  return (
    <Wrapper {...props}>
      <Header {...props} centered={true} />
      <div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          {props.features.map((feature, index) => {
            const Icon = Icons[feature.icon];
            return (
              <div key={feature.name + index} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <FeatureName classNames={`ml-16`}>{feature.name}</FeatureName>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-100">
                  {feature.description}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </Wrapper>
  );
}

export function ThreeWideGrid(props: FeatureProps) {
  return (
    <Wrapper {...props}>
      <Header {...props} centered={true} />
      <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
        {props.features.map((feature, index) => {
          const Icon = Icons[feature.icon];
          return (
            <div key={feature.name + index}>
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <FeatureName>{feature.name}</FeatureName>
              </dt>
              <dd className="mt-2 text-base text-gray-100">
                {feature.description}
              </dd>
            </div>
          );
        })}
      </dl>
    </Wrapper>
  );
}

const Testimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="mt-8 border-t border-gray-200 pt-6">
      <blockquote>
        <div>
          <p className="text-base text-gray-100">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
        </div>
        <footer className="mt-3">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <img
                className="h-6 w-6 rounded-full"
                src={testimonial?.author?.avatar}
                alt=""
              />
            </div>
            <div className="text-base font-medium text-gray-50">
              {testimonial?.author?.name}
            </div>
          </div>
        </footer>
      </blockquote>
    </div>
  );
};

const Header = (props: FeatureProps & { centered?: boolean }) => {
  return (
    <div className={`${props.centered && "lg:text-center"} pb-4 md:pb-12`}>
      <SubTitleText>{props.subTitle}</SubTitleText>
      <DisplayText classNames="mt-4" size="text-4xl sm:text-5xl">
        {props.title}
      </DisplayText>
      <Hr centered={props.centered} />
      <Text>{props.description}</Text>
    </div>
  );
};

const FeatureName = (props: {
  classNames?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3 className={`text-lg mt-4 font-medium text-white ${props.classNames}`}>
      {props.children}
    </h3>
  );
};
