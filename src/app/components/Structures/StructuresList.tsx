import Link from "next/link";
import ListItem from "./ListItem";

const StructuresList = () => {
  return (
    <div className="w-3/4 mx-auto flex gap-2">
      <ListItem itemUrl="/structures/queue" itemName="Queue" />
      <ListItem itemUrl="/structures/stack" itemName="Stack" />
    </div>
  );
};

export default StructuresList;
