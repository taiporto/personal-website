export const Stack = () => {
  return (
    <section className="w-full p-10">
      <h1 className="text-4xl font-extrabold">Stack</h1>
      <p className="text-lg">Here are some of the technologies I work with</p>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Technology 1</h2>
          <p>Technology 1 description goes here.</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Technology 2</h2>
          <p>Technology 2 description goes here.</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Technology 3</h2>
          <p>Technology 3 description goes here.</p>
        </div>
      </div>
    </section>
  );
}