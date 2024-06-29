import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
      { title: "About - Angus's Portfolio" }
    ];
  };

export default function About() {
    return (
        <h1>
            About
        </h1>
    )
}