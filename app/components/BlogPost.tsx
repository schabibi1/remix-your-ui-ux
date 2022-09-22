import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

interface Blok {
  blok: {
    _uid: string;
    title: string;
    intro: string;
    image: {
      filename: string;
      title: string;
    };
    component: string;
    long_text: {
      content: [
        {
          content: [
            {
              text: string;
            }
          ]
        }
      ]
    };
  }
}

const BlogPost = ({ blok }: Blok) => {
  return (
    <div {...storyblokEditable(blok)}>
      <div className="bg-white-half w-full">
        <div className="max-w-3xl mx-auto text-center pt-20 flex flex-col items-center">
          <h1 className="text-5xl font-bold font-serif text-primary tracking-wide">
            {blok.title}
          </h1>
          <p className="text-gray-500 text-lg max-w-lg">{blok.intro}</p>
          <img className="w-full bg-gray-300 my-16 rounded-lg" src={blok.image.filename} alt={blok.image.title} />
        </div>
      </div>
      <div className="max-w-3xl mx-auto text-center pt-20 flex flex-col items-center">
        <div className="leading-relaxed text-xl text-left text-gray-800 drop-cap">
          {render(blok.long_text)}
        </div>

        <div className="py-16 max-w-sm p-2 sm:p-10 text-center flex flex-col">
          <div className="p-4 bg-primary rounded-full mx-auto">
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost