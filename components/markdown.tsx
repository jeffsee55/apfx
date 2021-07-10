import ReactMarkdown from "react-markdown";

export const Markdown = (props: { children: string }) => {
  return <ReactMarkdown components={{}} children={props.children} />;
};
