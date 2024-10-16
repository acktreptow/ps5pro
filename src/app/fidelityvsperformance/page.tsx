const PS5vsPS5ProPage = (): JSX.Element => {
  return (
    <div className="container mx-auto flex-grow text-slate-800">
      <h1 className="text-slate-800 text-center text-4xl font-extrabold my-8 bg-slate-100 p-8 rounded shadow-lg">
        Fidelity vs Performance
      </h1>
      <div className="bg-slate-100 p-8 rounded shadow-lg mb-8">
        <h2 className="text-slate-800 text-2xl font-bold mb-8 underline">
          Why the choice is a game by game choice
        </h2>
        <p className="mb-4 text-xl">
          There are many factors to consider when choosing the difference as
          well as more indirect things to look for. Here they are:
        </p>
        <ul>
          <li>Is the game first or third-person?</li>
          <li>What genre is the game?</li>
          <li>Does the game have an FOV slider?</li>
          <li>Does the game hold a steady 60fps?</li>
          <li>If not, does it at least stay above the VRR threshold?</li>
        </ul>
      </div>
    </div>
  );
};

export default PS5vsPS5ProPage;
