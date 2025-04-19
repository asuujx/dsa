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
    <div className="w-full">
      <div className="w-3/4 mx-auto flex flex-col items-center mt-14">
        <h1 className="text-8xl font-bold text-center mb-14">Queue</h1>

        <div className="flex flex-col items-center w-full max-w-lg mx-auto p-4">
          <img src="/queue.png" alt="queue" className="w-full rounded-xl" />
          <p className="mt-5 text-lg text-justify leading-relaxed text-gray-800">
            Queue is a linear data structure that follows a particular order in
            which the operations are performed for storing data. The order is{" "}
            <b>First In First Out (FIFO)</b>. One can imagine a queue as a line
            of people waiting to receive something in sequential order which
            starts from the beginning of the line.
          </p>
        </div>

        <h2 className="mt-7 text-4xl font-semibold">Demonstration</h2>
        <div className="w-full max-w-lg mt-5 mb-10 px-4 py-2 shadow-lg rounded-md flex gap-5">
          <input
            type="text"
            value={newItem}
            onChange={handleInputChange}
            onKeyUp={handleInputKeyPress}
            placeholder="Enter value.."
            className="w-48 px-4 py-2 bg-[#F5F3F7] shadow-inner rounded-md"
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
            className="hover:text-[#F7374F] hover:font-semibold hover:scale-110 transition-all ease-in-out"
          >
            Clear
          </button>
        </div>
        <div className="flex gap-5 flex-wrap items-center justify-center max-w-xl">
          {queue.map((item, index) => (
            <div
              key={index}
              className="w-32 h-32 bg-[#9A73B5] text-white rounded-xl text-4xl font-bold flex justify-center items-center"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Queue;
