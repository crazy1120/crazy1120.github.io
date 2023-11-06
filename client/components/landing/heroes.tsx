import { useSelector } from "react-redux";

import Hero from "./hero";

interface HeroesProps {
  heroes: LinkDescComponent[];
}

const Heroes: React.FC<HeroesProps> = ({ heroes }) => {
  const { type }: { type: string } = useSelector(
    (state: { device: { type: string } }) => state.device
  );

  return (
    <section className="flex flex-col justify-center px-2.5 lg:px-3">
      <Hero info={heroes[0]} />
      <Hero info={heroes[1]} />
      <div
        className={`flex justify-between ${type !== "laptop" && "flex-col"}`}>
        <Hero info={heroes[2]} />
        <Hero info={heroes[3]} flexLastHero={type === "laptop"} />
      </div>
      <Hero info={heroes[4]} />
    </section>
  );
};

export default Heroes;
