import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { storyblokInit, apiPlugin } from "@storyblok/js";
import Feature from "./components/Feature";
import Grid from "./components/Grid";
import Teaser from "./components/Teaser";
import Page from "./components/Page";
import BlogPost from "./components/BlogPost";
import FeaturedPosts from "./components/FeaturedPosts";
import PostsList from "./components/PostsList";

interface Components {
  [key: string]: React.ElementType;
}

const components: Components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  post: BlogPost,
  "featured-posts": FeaturedPosts,
  "selected-posts": PostsList,
};

storyblokInit({
  accessToken: "your_token",
  use: [apiPlugin],
  components,
});

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
