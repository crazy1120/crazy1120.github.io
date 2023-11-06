import Markdown from "react-markdown";

const Enquiry: React.FC<{ title: string; data: string }> = ({
  title,
  data,
}) => {
  return (
    <div className="flex flex-col items-start bg-purple bg-opacity-10 leading-normal p-[30px] gap-[30px] rounded-[10px] mt-[30px]">
      <h6 className="text-[30px] leading-9 font-bold">{title}</h6>
      <div>
        <Markdown className="rich-text_mb-10 text-[21px] leading-7 enquiries">
          {data}
        </Markdown>
      </div>
    </div>
  );
};

export default Enquiry;
