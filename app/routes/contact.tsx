import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
      { title: "Contact - Angus's Portfolio" }
    ];
  };

export default function Contact() {
    return (
        <h1>
            Contact
        </h1>
    )
}