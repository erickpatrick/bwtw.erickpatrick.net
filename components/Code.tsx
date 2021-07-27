import Highlight, { defaultProps } from 'prism-react-renderer';

type CodeParams = {
  children: React.ReactNode;
  className: any;
};

export default function Code({ children, className }: CodeParams) {
  const language = className.replace(/language-/, '');
  return (
    <Highlight
      {...defaultProps}
      theme={undefined}
      code={`${children}`}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div
          className={`overflow-auto bg-black text-white p-4 ${className}`}
          style={style}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </div>
      )}
    </Highlight>
  );
}
