import Link from "next/link";

const Structures = () => {
   return (
     <div className="mx-4 flex flex-col gap-2">
       <h1 className="text-center text-4xl">Data Structures</h1>
       <div className="flex gap-2">
         <Link
           href="/structures/queue"
           className="hover:text-[#61398F] hover:scale-110 hover:font-semibold transition-all ease-in-out"
         >
           Queue
         </Link>
       </div>
     </div>
   );
};

export default Structures;