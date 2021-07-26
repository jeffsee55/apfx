import ReactMarkdown from "react-markdown";

export const Markdown = (props: {
  variant?: "standard" | "small";
  children: string;
}) => {
  const variant = props.variant || "standard";
  const selectedVariant = variants[variant];
  return (
    <div className={selectedVariant.root}>
      <ReactMarkdown components={selectedVariant}>
        {props.children}
      </ReactMarkdown>
    </div>
  );
};

type Variant = Parameters<typeof ReactMarkdown>[0]["components"] & {
  root: string;
};

const standard: Variant = {
  root: "text-white",
  h2: ({ node, ...props }) => (
    <h2 className="text-gray-200 font-display font-bold" {...props} />
  ),
  a: ({ node, ...props }) => <a className="text-gray-100" {...props} />,
};
const small: Parameters<typeof ReactMarkdown>[0]["components"] & {
  root: string;
} = {
  root: "text-sm text-gray-400",
  h2: ({ node, ...props }) => (
    <h2 className="text-gray-200 font-display font-bold" {...props} />
  ),
  a: ({ node, ...props }) => <a className="text-gray-100" {...props} />,
};

const variants = { standard, small };
