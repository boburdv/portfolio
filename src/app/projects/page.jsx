import { buttonVariants } from "@/components/ui/button";
import { Link } from "lucide-react";

const projectList = [
  {
    title: "noteapp",
    href: "https://boburdv-note.vercel.app",
    description: "",
  },
  {
    title: "rock papers cissors",
    href: "https://8-oy-9.vercel.app",
    description: "",
  },
  // {
  //   title: "JSON API",
  //   href: "https://json-api.uz",
  //   description: "Backend yaratadigan platforma",
  // },
];

export default function page() {
  return (
    <div className="py-10">
      <div className="container max-w-screen-lg mx-auto px-5">
        <ul className="flex flex-col gap-10">
          {projectList.map(({ description, href, title }) => {
            return (
              <li key={title}>
                <h3 className="font-medium text-xl mb-3">{title}</h3>
                <p className="mb-4">{description}</p>
                <a className={buttonVariants({ variant: "secondary" })} href={href} target="_blank">
                  <Link />
                  Ko'rish
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
