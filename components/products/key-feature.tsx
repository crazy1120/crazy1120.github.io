import Image from "next/image";

const KeyFeature: React.FC<DescComponent> = ({ title, desc, image }) => {
  const { url: imageURL } = image.data.attributes;

  return (
    <section className="bg-gray-100 lg:bg-gray-200 flex justify-center">
      <div
        className={`max-w-[1440px] inline-flex lg:flex lg:shrink-0 flex-col items-center text-white gap-4 lg:gap-5 p-[30px] lg:px-[343px] lg:pt-[50px] lg:pb-[100px]`}>
        <Image src={imageURL} alt="key feature" width={750} height={300} />
        <h6 className="text-[30px] lg:text-[40px] font-bold leading-normal">
          {title}
        </h6>
        <p className="text-center text-base lg:text-xl font-light lg:font-normal leading-6 lg:leading-[27px]">
          {desc}
        </p>
      </div>
    </section>
  );
};

export default KeyFeature;
