export default function Home() {
  return (
    <div className="w-full mt-14">
      <div className="w-3/4 mx-auto">
        <h1 className="mb-14 text-8xl font-bold text-center">
          Welome to Data Structures and Algorithms!
        </h1>

        <div>
          <h2 className="mb-2 text-4xl font-semibold">What is DSA?</h2>
          <p className="text-2xl text-justify">
            DSA is defined as a combination of two separate yet interrelated
            topics – Data Structure and Algorithms. DSA is one of the most
            important skills that every computer science student must have. It
            is often seen that people with good knowledge of these technologies
            are better programmers than others and thus, crack the interviews of
            almost every tech giant.
          </p>
          <p className="text-s flex gap-1">
            Source: <p className="italic">geeksforgeeks.org</p>
          </p>
        </div>
      </div>
    </div>
  );
}
