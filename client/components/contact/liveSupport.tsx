import SupportItem from "./supportItem";

const ContactLiveSupport: React.FC<{
  title: string;
  items: LinkDescComponent[];
}> = ({ title, items }) => {
  return (
    <section className="flex flex-col items-center text-gray-150 text-center mx-5 lg:mx-auto max-w-[1140px] mt-[50px] lg:mt-[100px]">
      <h2 className="text-3xl leading-10 sm:leading-[36px] max-w-[800px] mb-20 lg:mb-[50px]">
        {title}
      </h2>
      <div className="flex flex-wrap">
        {items.map((item, ind) => (
          <SupportItem key={ind} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ContactLiveSupport;
