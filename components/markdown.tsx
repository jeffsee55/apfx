import ReactMarkdown from "react-markdown";

export const Markdown = (props: { children: string }) => {
  return (
    <ReactMarkdown
      components={{
        h2: ({ node, ...props }) => (
          <h2 className="text-gray-200 font-display font-bold" {...props} />
        ),
        a: ({ node, ...props }) => <a className="text-gray-100" {...props} />,
      }}
      children={props.children}
    />
  );
};
