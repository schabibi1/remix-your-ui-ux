import { storyblokEditable } from "@storyblok/react";

interface Blok {
  blok: {
    _uid: string;
    component: string;
    headline: string;
    image: {
      filename: string;
      alt: string;
    }
  }
}

const Teaser = ({ blok }: Blok) => {
  return (
    <div className="bg-white-half" {...storyblokEditable(blok)}>
      <div className="pb-6 pt-16 container mx-auto">
        <h2 className="text-6xl font-bold font-serif text-primary mb-4">
          {blok.headline}
        </h2>
        <img
          src={blok.image.filename}
          alt={blok.image.alt}
          className="w-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default Teaser;