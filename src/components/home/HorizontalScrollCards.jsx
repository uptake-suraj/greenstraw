import React from "react";
import {horizontalData} from "../../assets/data/horizontalData";
import { useHorizontalScroll } from "../../hook/useHorizontalScroll";
import HorizontalCard from "../card/HorizontalCard";

const HorizontalScrollCards = () => {
  const scrollRef = useHorizontalScroll();

  return (
    <section className="lg:my-20">
      <div className="w-full">
        <div ref={scrollRef} className="flex gap-8 w-max px-4 py-20">
          {horizontalData?.map((item) => (
            <HorizontalCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollCards;
