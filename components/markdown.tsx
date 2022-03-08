import ReactMarkdown from "react-markdown";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const Markdown = (props: {
  variant?: "standard" | "small";
  colorVariant?: "dark" | "light";
  classNames?: string;
  children: string;
}) => {
  const variant = props.variant || "standard";
  const colorVariant = props.colorVariant || "light";
  const selectedVariant = variants[variant];
  if (typeof props.children !== "string") {
    return (
      <div className={`${selectedVariant.root} ${props.classNames}`}>
        <TinaMarkdown
          components={selectedVariant(colorVariant)}
          content={props.children}
        />
      </div>
    );
  }
  return (
    // @ts-ignore
    <div className={`${selectedVariant.root} ${props.classNames}`}>
      <ReactMarkdown components={selectedVariant(colorVariant)}>
        {props.children}
      </ReactMarkdown>
    </div>
  );
};

type Variant = Parameters<typeof ReactMarkdown>[0]["components"] & {
  root: string;
};

const standard: (colorVariant: "light" | "dark") => Variant = (
  colorVariant
) => {
  const headingColor = {
    light: "text-white",
    dark: "text-gray-800",
  };
  const bodyColor = {
    light: "text-indigo-50",
    dark: "text-gray-700",
  };
  return {
    root: "text-white",
    h1: ({ node, ...props }) => (
      <h1
        className={`${headingColor[colorVariant]} text-3xl md:text-5xl font-display font-bold`}
        {...props}
      />
    ),
    h2: ({ node, ...props }) => (
      <h2
        className={`${headingColor[colorVariant]} text-2xl md:text-4xl font-display font-bold`}
        {...props}
      />
    ),
    h3: ({ node, ...props }) => (
      <h3
        className={`${headingColor[colorVariant]} text-xl md:text-3xl font-display font-bold`}
        {...props}
      />
    ),
    h4: ({ node, ...props }) => (
      <h4
        className={`${headingColor[colorVariant]} text-lg md:text-2xl font-display font-bold`}
        {...props}
      />
    ),
    h5: ({ node, ...props }) => (
      <h5
        className={`${headingColor[colorVariant]} text-base md:text-xl font-display font-bold`}
        {...props}
      />
    ),
    h6: ({ node, ...props }) => (
      <h6
        className={`${headingColor[colorVariant]} text-base md:text-lg font-display font-bold`}
        {...props}
      />
    ),
    p: ({ node, ...props }) => (
      <p className={`${bodyColor[colorVariant]} mb-4`} {...props} />
    ),
    a: ({ node, ...props }) => (
      <a className={`${bodyColor[colorVariant]}`} {...props} />
    ),
  };
};
const small: (colorVariant: "light" | "dark") => Variant = (colorVariant) => {
  const headingColor = {
    light: "text-white",
    dark: "text-gray-800",
  };
  const bodyColor = {
    light: "text-indigo-50",
    dark: "text-gray-700",
  };
  return {
    root: "text-white",
    h1: ({ node, ...props }) => (
      <h1
        className={`${headingColor[colorVariant]} text-xl font-display font-bold`}
        {...props}
      />
    ),
    h2: ({ node, ...props }) => (
      <h2
        className={`${headingColor[colorVariant]} text-lg font-display font-bold`}
        {...props}
      />
    ),
    h3: ({ node, ...props }) => (
      <h3
        className={`${headingColor[colorVariant]} text-base font-display font-bold`}
        {...props}
      />
    ),
    h4: ({ node, ...props }) => (
      <h4
        className={`${headingColor[colorVariant]} text-sm font-display font-bold`}
        {...props}
      />
    ),
    h5: ({ node, ...props }) => (
      <h5
        className={`${headingColor[colorVariant]} text-xs font-display font-bold`}
        {...props}
      />
    ),
    h6: ({ node, ...props }) => (
      <h6
        className={`${headingColor[colorVariant]} text-xs font-display font-bold`}
        {...props}
      />
    ),
    p: ({ node, ...props }) => (
      <p className={`${bodyColor[colorVariant]} text-xs`} {...props} />
    ),
    a: ({ node, ...props }) => (
      <a className={`${bodyColor[colorVariant]} text-xs`} {...props} />
    ),
  };
};

const variants = { standard, small };
