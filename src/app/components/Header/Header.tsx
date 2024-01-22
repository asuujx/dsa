import Link from "next/link";

const Header = () => {
   return ( 
      <div className="flex gap-2">
         <Link href="/">Home</Link>
         <Link href="/structures">Data Structures</Link>
         <Link href="/algorithms">Algorithms</Link>
      </div>
   )
};

export default Header;