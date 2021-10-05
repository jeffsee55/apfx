import React from "react";
import { FullScreenHeaderWithBackground } from "./header";
import { Action } from "./hero";

type SlideshowItem = {
  title: string;
  image?: string;
  description: string;
  overlayColor?: string;
  overlayOpacity?: string;
  textColor?: string;
  action?: Action;
};

type SlideshowProps = {
  items?: SlideshowItem[];
};

export const Slideshow = (props: SlideshowProps) => {
  const [current, setCurrent] = React.useState(false);
  // FIXME: For some reason SSr isn't working with this component
  React.useEffect(() => {
    setCurrent(true);
  }, []);
  if (!current) {
    return <div></div>;
  }
  const items = props.items;

  return (
    <div>
      <div className="relative">
        <Navigation items={items} />
        {items?.map((item, index) => {
          const id = `slideshow-${item.title.replaceAll(" ", "")}-${index}`;
          return (
            <div id={id} key={id}>
              <FullScreenHeaderWithBackground {...item} slideshow={true} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navigation(props: { items: SlideshowItem[] }) {
  const [current, setCurrent] = React.useState("");

  React.useEffect(() => {
    window.addEventListener(
      "hashchange",
      (ev) => {
        setCurrent(window.location.hash);
      },
      false
    );
  }, []);
  return (
    <div className="absolute hidden md:block sm:left-12 xl:left-24 z-50 top-96 bottom-96">
      <div className="sticky top-96">
        <Nav items={props.items} current={current} />
      </div>
    </div>
  );
}

const Nav = ({
  items,
  current,
}: {
  items: SlideshowItem[];
  current: string;
}) => {
  return (
    <nav className="space-y-1" aria-label="Sidebar">
      {items.map((item, index) => {
        const id = `#slideshow-${item.title.replaceAll(" ", "")}-${index}`;
        return (
          <a
            key={id}
            href={id}
            className={classNames(
              current === id
                ? "text-gray-200 active"
                : "text-gray-100 hover:text-gray-200",
              "font-display text-lg tracking-wide font-medium flex items-center px-0 py-2 hover-smooth"
            )}
            aria-current={id === current ? "page" : undefined}
          >
            <span className="truncate">{item.title}</span>
          </a>
        );
      })}
    </nav>
  );
};
