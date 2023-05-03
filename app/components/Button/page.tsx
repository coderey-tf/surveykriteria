import Link from "next/link";

interface ButtonProps {
  title: String;
  url: any;
}
export default function Button(props: ButtonProps) {
  return (
    <Link href={props.url ?? ""} className="flex self-end">
      <button className="btn btn-xs w-auto sm:btn-sm md:btn-md capitalize text-[10px] text-primary bg-primary border-primary hover:bg-inherit hover:text-primary">
        {props.title}
      </button>
    </Link>
  );
}
