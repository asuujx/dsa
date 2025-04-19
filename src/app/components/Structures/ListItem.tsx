import Link from "next/link";
import React from "react";

interface ListItemProps {
  itemUrl: string;
  itemName: string;
}

const ListItem: React.FC<ListItemProps> = ({ itemUrl, itemName }) => {
  return (
    <div>
      <Link
        href={itemUrl}
        className="px-8 py-4 text-2xl shadow-md rounded-xl hover:text-[#61398F] hover:scale-110 hover:font-semibold transition-all ease-in-out"
      >
        {itemName}
      </Link>
    </div>
  );
};

export default ListItem;
