"use client";
import { useState } from "react";

const Queue = () => {
  const [queue, setQueue] = useState<string[]>([]);
  const [newItem, setNewItem] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem(e.target.value);
  };

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      enqueue();
    }
  };

  const enqueue = () => {
    if (newItem.trim() !== "") {
      setQueue([...queue, newItem]);
      setNewItem("");
    }
  };

  const dequeue = () => {
    if (queue.length > 0) {
      setQueue(queue.slice(1));
    } else {
      alert("Queue is empty");
    }
  };

  const clearQueue = () => {
    setQueue([]);
  };

  return (
     <div className="flex flex-col items-center mt-20">
        <h1 className="text-5xl mb-5">Queue</h1>

        <div className="flex flex-col items-center mx-10">
           <img src="/queue.png" alt="queue" className="max-w-1/3" />
           <p className="my-5 text-justify w-fit md:w-2/3 lg:w-1/3">
              Queue is a linear data structure that follows a particular order
              in which the operations are performed for storing data. The order
              it <b>First In First Out (FIFO)</b>. One can imagine a queue as a
              line of people waiting to receive something in sequential order
              which starts from the beginning of the line.
           </p>
        </div>

        <h2 className="text-2xl">Demonstration</h2>
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
              onClick={enqueue}
              className="hover:text-[#61398F] hover:font-semibold hover:scale-110 transition-all ease-in-out"
           >
              Enqueue
           </button>
           <button
              onClick={dequeue}
              className="hover:text-[#61398F] hover:font-semibold hover:scale-110 transition-all ease-in-out"
           >
              Dequeue
           </button>
           <button
              onClick={clearQueue}
              className="hover:text-[#878787] hover:font-semibold hover:scale-110 transition-all ease-in-out"
           >
              Clear
           </button>
        </div>
        <div className="flex gap-3 flex-wrap items-center">
           {queue.map((item, index) => (
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

export default Queue;
