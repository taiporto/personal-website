export const Experience = () => {
  return (
    <section className="w-full py-10">
      <h1 className="text-4xl font-extrabold">Experience</h1>
      <p className="text-lg">Here are some of my experience details</p>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Experience 1</h2>
          <p>Experience 1 description goes here.</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Experience 2</h2>
          <p>Experience 2 description goes here.</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Experience 3</h2>
          <p>Experience 3 description goes here.</p>
        </div>
      </div>
    </section>
  );
}