import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "../styles/index.css";
import { Header } from "./components/Header";

export const links: LinksFunction = () => [
  {
    rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png"
  },
  {
    rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png"
  },
  {
    rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png"
  },
  { rel: 'manifest', href: '/site.webmanifest' },
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header className="header" imgClassName="header--img"/>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
