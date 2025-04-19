import StructuresList from "../components/Structures/StructuresList";

const Structures = () => {
  return (
    <div className="w-full mt-14">
      <div className="mx-4 flex flex-col gap-2">
        <h1 className="mb-14 text-8xl font-bold text-center">
          Data Structures
        </h1>
        
        <StructuresList />
      </div>
    </div>
  );
};

export default Structures;
