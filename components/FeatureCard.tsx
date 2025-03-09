import { Button } from "@/components/ui/button";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string;
  color?: string;
};

const FeatureCard = ({ title, description, image, color }: Props) => {
  return (
    <div className="w-full h-full bg-white p-3 shadow-md rounded-2xl">
      <div
        className="flex items-center justify-center max-w-10 p-2 rounded-lg mb-5"
        style={{ backgroundColor: color }}
      >
        <Image src={image} alt={title} width={27} height={27} />
      </div>
      <h3 className="text-xl md:text-2xl mb-3 font-semibold">{title}</h3>
      <p className="text-black/80">{description}</p>
      <Button variant="secondary" className="text-black mt-3">
        Learn More
      </Button>
    </div>
  );
};
export default FeatureCard;
