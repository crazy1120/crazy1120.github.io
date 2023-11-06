import Markdown from "react-markdown";

const PrivacyPolicy: React.FC<{ title: string; content: string }> = ({
  title,
  content,
}) => {
  return (
    <section className="max-w-[800px] text-start text-gray-150 mx-5 lg:mx-auto mb-[80px]">
      <h1 className="text-[30px] text-gray-150 font-bold leading-9 my-[50px]">
        {title}
      </h1>
      <Markdown className="text-[17px] leading-7">{content}</Markdown>
    </section>
  );
};

export default PrivacyPolicy;
