import Image from "next/image";
import { useSelector } from "react-redux";

const Img = ({ imageInfo }: { imageInfo: Image }) => {
  const { url: imageURL } = imageInfo.data.attributes;

  return (
    <Image
      src={imageURL}
      alt={imageURL}
      width={1920}
      height={1080}
      className="w-full sm:w-1/2 max-w-[570px]"
    />
  );
};

const StoryItem: React.FC<DescComponent & { index: number }> = ({
  desc,
  image,
  index,
}) => {
  const { type }: { type: string } = useSelector(
    (state: { device: { type: string } }) => state.device
  );

  return (
    <li className="flex flex-col sm:flex-row">
      {type === "mobile" && <Img imageInfo={image} />}
      {type !== "mobile" && index !== 1 && <Img imageInfo={image} />}
      <div className="w-full sm:w-1/2 sm:flex items-center text-start py-[30px] sm:px-[30px]">
        {desc}
      </div>
      {type !== "mobile" && index === 1 && <Img imageInfo={image} />}
    </li>
  );
};

export default StoryItem;
