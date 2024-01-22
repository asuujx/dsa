import Link from "next/link";

const Header = () => {
   return (
     <div className="w-fit mt-4 mb-10 mx-4 px-4 py-2 shadow-lg rounded-md flex gap-5">
       <Link
         href="/"
         className="hover:text-[#61398F] hover:scale-110 hover:font-semibold transition-all ease-in-out"
       >
         Home
       </Link>
       <Link
         href="/structures"
         className="hover:text-[#61398F] hover:scale-110 hover:font-semibold transition-all ease-in-out"
       >
         Data Structures
       </Link>
       <Link
         href="/algorithms"
         className="hover:text-[#61398F] hover:scale-110 hover:font-semibold transition-all ease-in-out"
       >
         Algorithms
       </Link>
     </div>
   );
};

export default Header;