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
          <li>Does the fidelity mode have a 30fps cap?</li>
          <li>Does the 30fps cap keep a consistent frame time?</li>
          <li>What is the resolution of each mode?</li>
          <li>What upscaling is the game using?</li>
          <li>Is it a singleplayer or multiplayer game?</li>
          <li>Is the singleplayer game emphasizing story or gameplay?</li>
          <li>
            Is the singleplayer game emphasizing graphics as a selling point?
          </li>
          <li>What type of screen is being used?</li>
          <li>What size of the screen is being used?</li>
          <li>Is the screen an OLED or an LCD/LED/QLED?</li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default PS5vsPS5ProPage;