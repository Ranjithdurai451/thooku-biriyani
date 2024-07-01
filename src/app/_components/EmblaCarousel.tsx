'use client';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Fade from 'embla-carousel-fade';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useState } from 'react';

import '../../app/globals.css';

type SlideType = {
  imageUrl: string;
  text: string;
  desc: string;
};

type PropType = {
  slides: SlideType[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade(), Autoplay()]);

  const [_, setSelectedSlide] = useState<number | null>(null);
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedSlide(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect(); // Run on initial load

    return () => {
      emblaApi.off('select', onSelect); // Cleanup
    };
  }, [emblaApi]);
  return (
    <div id="home" className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide) => (
            <div className="embla__slide" key={slide.imageUrl}>
              <img
                className="embla__slide__img"
                src={slide.imageUrl}
                alt="Your alt text"
              />

              <div className="gap-2 capitalize embla__slide__text">
                <p className="md:text-[60px] text-[40px] text-brown font-bold">
                  Welcome
                </p>
                <span className="md:text-[35px]  text-[25px] font-semibold ">
                  {slide.text}
                </span>
                <span className="md:text-[20px] text-[15px] font-bold text-justify">
                  {slide.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
