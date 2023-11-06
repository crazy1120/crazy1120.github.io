import Image from "next/image";

const Hero: React.FC<SimpleComponent> = ({ title, image }) => {
  const { url: imageURL } = image.data.attributes;

  return (
    <section className="relative flex justify-center items-center h-[500px] lg:h-[800px] mt-5 lg:mt-0">
      <Image
        src={imageURL}
        alt={imageURL}
        width={1920}
        height={1080}
        className="absolute w-full h-full top-0 object-cover z-0"
      />

      <h1 className="text-[50px] w-96 sm:w-auto lg:text-[80px] font-bold text-white text-center z-10">
        {title}
      </h1>
    </section>
  );
};

export default Hero;
