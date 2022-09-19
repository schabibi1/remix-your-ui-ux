import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

interface Blok {
  blok: {
    _uid: string;
    columns: [
      {
        _uid: string;
        component: string;
      }
    ]
    component: string;
  }
}

const Grid = ({ blok }: Blok) => (
  <ul
    className="flex py-8 mb-6 container mx-auto"
    {...storyblokEditable(blok)}
    key={blok._uid}
  >
    {blok.columns.map((nestedBlok) => (
      <li key={nestedBlok._uid} className="flex-auto px-6">
        <StoryblokComponent blok={nestedBlok} />
      </li>
    ))}
  </ul>
);

export default Grid;