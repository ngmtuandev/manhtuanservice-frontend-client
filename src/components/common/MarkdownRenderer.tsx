import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const MarkdownRenderer = ({ markdownText }: any) => {
    return (
        <ReactMarkdown
            children={markdownText}
            remarkPlugins={[remarkGfm]}
        />
    );
};

export default MarkdownRenderer;
