"use client"
import { useState } from "react";

const Queue = () => {
   const [queue, setQueue] = useState<string[]>([]);

   const enqueue = () => {
      const newItem = prompt("Enter a value to enqueue");

      if (newItem !== null) {
         setQueue([...queue, newItem]);
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
       <div className="flex flex-col items-center space-y-5">
         {queue.map((item, index) => (
           <div
             key={index}
             className="w-16 h-16 bg-blue-500 text-white flex justify-center items-center"
           >
             {item}
           </div>
         ))}
       </div>
       <div className="mt-5 space-x-2">
         <button
           onClick={enqueue}
           className="px-4 py-2 bg-green-500 text-white"
         >
           Enqueue
         </button>
         <button onClick={dequeue} className="px-4 py-2 bg-red-500 text-white">
           Dequeue
         </button>
         <button
           onClick={clearQueue}
           className="px-4 py-2 bg-gray-500 text-white"
         >
           Clear Queue
         </button>
       </div>
     </div>
   );
};

export default Queue;