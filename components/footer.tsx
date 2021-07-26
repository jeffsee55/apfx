import React from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { DisplayText } from "./typographqy";
import { useLocale } from "@react-aria/i18n";
import { useRouter } from "next/router";
import { Markdown } from "./markdown";

type Office = {
  location: string;
  address: string;
  phone: string;
};

type FooterProps = {
  offices?: Office[];
  disclaimers: {
    body?: string;
  }[];
};

export function Footer(props: FooterProps) {
  const [chosenLocale, setChosenLocale] = React.useState(null);
  const [selected, setSelected] = React.useState(null);
  const router = useRouter();

  // React.useEffect(() => {
  //   console.log({ locale, chosenLocale });
  //   router.push(router.asPath, null, {
  //     locale: chosenLocale,
  //   });
  // }, [chosenLocale]);
  React.useEffect(() => {
    console.log(router.locale);
    setSelected(router.locale);
  }, [router.locale]);

  return (
    <footer className="bg-gray-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <Offices offices={props.offices} />
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="grid gap-8 xl:col-span-4">
            {props.disclaimers.map((disclaimer) => {
              return <Markdown variant="small">{disclaimer.body}</Markdown>;
            })}
          </div>
          <div className="mt-12 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase">
              Country
            </h3>
            <form className="mt-4 sm:max-w-xs">
              <fieldset className="w-full">
                <label htmlFor="language" className="sr-only">
                  Country
                </label>
                <div className="relative">
                  <select
                    id="language"
                    name="language"
                    onChange={(event) => {
                      router.push(router.asPath, null, {
                        locale: event.target.value,
                        scroll: false,
                      });
                      // setChosenLocale(event.target.value);
                    }}
                    className="appearance-none block w-full bg-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-base text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option selected={selected === "en-au"} value="en-au">
                      Australia
                    </option>
                    <option selected={selected === "en-gb"} value="en-gb">
                      United Kingdom
                    </option>
                    <option selected={selected === "en-us"} value="en-us">
                      United States
                    </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                    <ChevronDownIcon
                      className="h-4 w-4 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; 2020 Workflow, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* This example requires Tailwind CSS v2.0+ */
export function Offices({ offices }: { offices?: Office[] }) {
  return (
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <DisplayText size="text-3xl md:text-4xl ">Our offices</DisplayText>
        <div className="flex items-center">
          <div className="w-48 h-1 mt-8 bg-white rounded-sm" />
        </div>
        <div className="mt-10 grid grid-cols-1 gap-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {offices?.map((office) => {
            return (
              <div>
                <h3 className="text-lg font-medium text-gray-100">
                  {office.location}
                </h3>
                <p
                  style={{ whiteSpace: "pre-line" }}
                  className="mt-2 text-base text-gray-50"
                >
                  {office.address}
                </p>
                <span className="block">
                  <a
                    className="font-bold text-indigo-100 hover:text-indigo-100 tracking-wide"
                    href={`tel:${office.phone}`}
                  >
                    {office.phone}
                  </a>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
