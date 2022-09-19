import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

interface Blok {
  blok: {
    _uid: string;
    body: [
      {
        _uid: string;
        component: string;
      }
    ]
    component: string;
  }
}

const Page = ({ blok }: Blok) => (
  <main {...storyblokEditable(blok)} key={blok._uid}>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;