import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const LocateRowBlockItem: React.FC<{ title: string; contents: string }> = ({
  title,
  contents,
}) => {
  return (
    <div className="w-[367px] mb-[30px]">
      <h5 className="text-xl leading-6 font-bold mb-2.5">{title}</h5>
      <Markdown className="break-words text-[17px]">{contents}</Markdown>
    </div>
  );
};

export default LocateRowBlockItem;
