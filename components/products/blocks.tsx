import { Block } from ".";

interface BlocksProps {
  blocks: DescComponent[];
  firstimageright?: boolean;
}

const Blocks: React.FC<BlocksProps> = ({ blocks, firstimageright }) => {
  return (
    <section className="flex flex-col items-center gap-8">
      {blocks.map((block, index) => {
        firstimageright && index++;
        return (
          <Block key={index} {...block} isBlock={true} onLeft={!!(index % 2)} />
        );
      })}
    </section>
  );
};

export default Blocks;
