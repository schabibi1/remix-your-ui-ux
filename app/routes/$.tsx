import Layout from "../components/Layout";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import {
  getStoryblokApi,
  useStoryblokState,
  StoryblokComponent,
} from "@storyblok/react";

interface Params {
  params: {
    [key: string]: string
  }
}

export default function Page() {
  let story = useLoaderData();
  story = useStoryblokState(story, {
    resolveRelations: ["featured-posts.posts", "selected-posts.posts"]
  });

  return (
    <Layout>
      <StoryblokComponent blok={story.content} />
    </Layout>
  )
};

export const loader = async ({ params }: Params) => {
  let slug = params["*"] ?? "home";
  slug = slug.endsWith("/") ? slug.slice(0, -1) : slug;

  let sbParams = {
    version: "draft",
    resolve_relations: ["featured-posts.posts", "selected-posts.posts"],
  };

  let { data } = await getStoryblokApi().get(`cdn/stories/${slug}`, sbParams);
  return json(data?.story);
};