import Image from "next/image";

const Gadget: React.FC<{ gadget: Image; full?: boolean }> = ({
  gadget,
  full,
}) => {
  const { url: imageURL } = gadget.data.attributes;

  return (
    <Image
      src={imageURL}
      alt="gadget"
      width={1920}
      height={1080}
      className={`w-full h-full lg:mx-auto ${
        full ? "w-full lg:h-[700px] object-cover" : "max-w-[1440px]"
      }`}
    />
  );
};

export default Gadget;
