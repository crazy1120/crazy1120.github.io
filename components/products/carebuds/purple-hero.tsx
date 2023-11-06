import Image from "next/image";

type ComponentProp = DescComponent & {
  features: DescComponent[];
};

const HeroPart: React.FC<DescComponent> = ({ title, desc, image }) => {
  const { url: imageURL } = image.data.attributes;

  return (
    <section className="flex flex-col sm:flex-row-reverse sm:justify-around items-center bg-light_purple pb-[50px] sm:py-20">
      <Image
        src={imageURL}
        alt="heroimage"
        width={400}
        height={560}
        className="lg:w-[572px] h-auto"
      />
      <div className="max-w-[463px] text-white text-center sm:text-start px-[30px]">
        <h1 className="text-[40px] sm:text-6xl font-bold leading-[40px] sm:leading-[66px] pb-5">
          {title}
        </h1>
        <p className="text-xl leading-[27px]">{desc}</p>
      </div>
    </section>
  );
};

const PurpleHero: React.FC<ComponentProp> = ({
  title,
  desc,
  image,
  features,
}) => {
  return (
    <>
      <HeroPart title={title} desc={desc} image={image} />
      <section className="bg-purple w-full flex justify-center pt-5 pb-[30px]">
        <div className="w-[414px] sm:w-full sm:max-w-[1140px] flex justify-center items-start content-start gap-5 shrink-0 flex-wrap text-white">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-[173px] lg:w-[270px] flex flex-col lg:flex-row lg:justify-end items-center gap-5 lg:gap-[31px] lg:pl-[11px]">
              <Image
                src={feature.image.data.attributes.url}
                alt={feature.desc}
                width={55}
                height={55}
              />
              <p className="text-center lg:text-xl lg:text-start">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PurpleHero;
