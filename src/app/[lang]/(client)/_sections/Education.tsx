export const Education = () => {
  return (
    <section className="w-full p-10">
      <h1 className="text-4xl font-extrabold">Education</h1>
      <p className="text-lg">Here are some of my education details</p>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Degree 1</h2>
          <p>Degree 1 description goes here.</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Degree 2</h2>
          <p>Degree 2 description goes here.</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Degree 3</h2>
          <p>Degree 3 description goes here.</p>
        </div>
      </div>
    </section>
  );
}