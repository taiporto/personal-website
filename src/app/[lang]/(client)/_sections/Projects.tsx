export const Projects = () => {
  return (
    <section className="w-full p-10">
      <h1 className="text-4xl font-extrabold">Projects</h1>
      <p className="text-lg">Here are some of my projects</p>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Project 1</h2>
          <p>Project 1 description goes here.</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Project 2</h2>
          <p>Project 2 description goes here.</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Project 3</h2>
          <p>Project 3 description goes here.</p>
        </div>
      </div>
    </section>
  );
}