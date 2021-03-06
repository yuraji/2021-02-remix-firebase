import { useRouteData } from "@remix-run/react";
import type { LinksFunction, Loader } from "@remix-run/data";

import styles from "url:../styles/index.css"

export let loader: Loader = async () => {
  return { message: "this is awesome 😎" };
};

export function meta() {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!",
  };
}

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles}]
}

export default function Index() {
  let data = useRouteData();

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>Welcome to Remix!</h2>
      <p>
        <a href="https://remix.run/dashboard/docs">Check out the docs</a> to get
        started.
      </p>
      <p>Message from the loader: {data.message}</p>
    </div>
  );
}
