export const Stack = () => {
  return (
    <section className="w-full py-10">
      <h2 id="stack" className="text-4xl font-extrabold">Stack</h2>
      <p className="text-lg">Here are some of the technologies I work with</p>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Technology 1</h3>
          <p>Technology 1 description goes here.</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Technology 2</h3>
          <p>Technology 2 description goes here.</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Technology 3</h3>
          <p>Technology 3 description goes here.</p>
        </div>
      </div>
    </section>
  );
}