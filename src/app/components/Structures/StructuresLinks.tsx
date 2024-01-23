import Link from "next/link";

const StructuresLinks = () => {
  return (
    <div className="flex gap-2">
      <Link
        href="/structures/queue"
        className="hover:text-[#61398F] hover:scale-110 hover:font-semibold transition-all ease-in-out"
      >
        Queue
      </Link>
      <Link
        href="/structures/stack"
        className="hover:text-[#61398F] hover:scale-110 hover:font-semibold transition-all ease-in-out"
      >
        Stack
      </Link>
    </div>
  );
};

export default StructuresLinks;
