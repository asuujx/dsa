"use client";
import { useState } from "react";

const Stack = () => {
  const [stack, setStack] = useState<string[]>([]);
  const [newItem, setNewItem] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem(e.target.value);
  };

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      push();
    }
  };

  const push = () => {
    if (newItem.trim() !== "") {
      setStack([...stack, newItem]);
      setNewItem("");
    }
  };

  const pop = () => {
    if (stack.length > 0) {
      setStack(stack.slice(0, -1));
    } else {
      alert("Stack is empty");
    }
  };

  const clear = () => {
    setStack([]);
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-4xl">Stack</h1>
      <div className="my-5 px-4 py-2 shadow-lg rounded-md flex gap-4">
        <input
          type="text"
          value={newItem}
          onChange={handleInputChange}
          onKeyUp={handleInputKeyPress}
          placeholder="Enter value.."
          className="w-32 px-4 py-2 bg-[#F5F3F7] shadow-inner rounded-md"
        />
        <button
          onClick={push}
          className="hover:text-[#61398F] hover:font-semibold hover:scale-110 transition-all ease-in-out"
        >
          Push
        </button>
        <button
          onClick={pop}
          className="hover:text-[#61398F] hover:font-semibold hover:scale-110 transition-all ease-in-out"
        >
          Pop
        </button>
        <button
          onClick={clear}
          className="hover:text-[#878787] hover:font-semibold hover:scale-110 transition-all ease-in-out"
        >
          Clear
        </button>
      </div>
      <div className="flex gap-3 items-center">
        {stack.map((item, index) => (
          <div
            key={index}
            className="w-16 h-16 bg-[#9A73B5] text-white rounded-md flex justify-center items-center"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stack;
