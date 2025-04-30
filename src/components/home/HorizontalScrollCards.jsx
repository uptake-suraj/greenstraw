import React from "react";
import {horizontalData} from "../../assets/data/horizontalData";
import { useHorizontalScroll } from "../../hook/useHorizontalScroll";
import HorizontalCard from "../card/HorizontalCard";

const HorizontalScrollCards = () => {
  const scrollRef = useHorizontalScroll();

  return (
    <section>
      <div className="w-full overflow-x-hidden">
      <p>What We Do</p>
        <div ref={scrollRef} className="flex gap-8 w-max px-10 py-20">
          {horizontalData?.map((item) => (
            <HorizontalCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollCards;
