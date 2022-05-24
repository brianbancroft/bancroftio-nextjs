import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/synthwave84";

const SyntaxHighlighter = ({ children }) => {
  const code = children.props.children;
  const language = children.props.className?.replace("language-", "").trim();

  return (
    <Highlight {...defaultProps} code={code} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div>
          <pre className={className} style={{ ...style }}>
            {tokens.slice(0, -1).map((line, i) => (
              <div {...getLineProps({ line, key: i })} key={i}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} key={key} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
};

export default SyntaxHighlighter;
