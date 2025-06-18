export const Stack = () => {
  return (
    <section id="stack" className="w-full py-10">
      <div className="bg-gradient-to-r from-purple-950 to-foreground bg-clip-text text-transparent">
        <h2 className="text-4xl font-extrabold">Stack</h2>
      </div>
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