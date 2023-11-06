import Image from "next/image";

const ProSection: React.FC<
  DescComponent & { long_comp?: boolean; classname?: string }
> = ({ title, desc, image, long_comp, classname }) => {
  const { url: imageURL } = image.data.attributes;

  return (
    <div
      className={`relative flex flex-col w-[374px] lg:w-[560px] items-start text-white bg-gray-200 rounded-[10px] pt-[30px] px-[30px] ${
        long_comp ? "h-[500px] lg:h-[600px]" : "h-[450px] lg:h-[560px]"
      }`}>
      <h6 className="text-[30px] lg:text-[37px] font-bold mb-5 lg:mb-[30px] leading-[45px]">
        {title}
      </h6>
      <p className="text-lg leading-[22px]">{desc}</p>
      <Image
        src={imageURL}
        alt="Pro Image"
        width={1920}
        height={1080}
        className={`absolute object-cover h-auto ${
          classname ? classname : "w-full left-0 bottom-0"
        }`}
      />
    </div>
  );
};

const ProsSection: React.FC<{ pros: DescComponent[] }> = ({ pros }) => {
  return (
    <section className="flex justify-center flex-wrap sm:flex-nowrap mx-[20px] my-[50px] lg:mx-[150px] lg:my-[100px] gap-5">
      <div className="flex flex-col gap-5">
        <ProSection {...pros[0]} long_comp={true} />
        <ProSection {...pros[1]} />
      </div>
      <div className="flex flex-col gap-5">
        <ProSection {...pros[2]} classname="left-[30px] bottom-[30px] lg:left-[50px] lg:bottom-[50px] w-[85%]" />
        <ProSection {...pros[3]} long_comp={true} />
      </div>
    </section>
  );
};

export default ProsSection;
