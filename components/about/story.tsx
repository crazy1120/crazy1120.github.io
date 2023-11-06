import { useTranslation } from "next-i18next";
import Markdown from "react-markdown";

import StoryItem from "./storyItem";
import { COMMON } from "@/utils/constants";

const AboutStory: React.FC<{ our_story: string; stories: DescComponent[] }> = ({
  our_story,
  stories,
}) => {
  const { t } = useTranslation(COMMON);

  return (
    <section className="flex flex-col items-center max-w-[1140px] mx-5 lg:mx-auto mt-[50px] lg:mt-[100px]">
      <h5 className="text-center text-[40px] lg:text-6xl leading-[48px] lg:leading-[73px] text-purple font-bold">
        {t("our_story")}
      </h5>
      <div className="text-[21px] text-start max-w-[800px] leading-7 mt-[50px] mb-[100px]">
        <Markdown className="rich-text_mb-20">{our_story}</Markdown>
      </div>
      <ul className="flex flex-col">
        {stories.map((item, ind) => (
          <StoryItem key={ind} index={ind} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default AboutStory;
