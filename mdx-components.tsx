import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="text-4xl font-bold my-6" {...props} />,
    h2: (props) => <h2 className="text-3xl font-semibold my-4" {...props} />,
    h3: (props) => <h3 className="text-2xl font-semibold my-3" {...props} />,
    p: (props) => <p className="my-4 text-gray-800" {...props} />,
    ul: (props) => <ul className="list-disc ml-6 my-4" {...props} />,
    ol: (props) => <ol className="list-decimal ml-6 my-4" {...props} />,
    li: (props) => <li className="mb-2" {...props} />,
    a: (props) => <a className="text-blue-600 underline" {...props} />,
    blockquote: (props) => (
      <blockquote
        className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4"
        {...props}
      />
    ),
    code: (props) => (
      <code
        className="bg-gray-100 rounded px-1 py-0.5 font-mono text-sm"
        {...props}
      />
    ),
    pre: (props) => (
      <pre
        className="bg-gray-900 text-gray-100 rounded p-4 overflow-x-auto my-4"
        {...props}
      />
    ),
    img: (props) => (
      <img className="rounded shadow max-w-full h-auto my-4" {...props} />
    ),
    ...components,
  };
}
