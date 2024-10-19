const GraphicsvsPerformancePage = (): JSX.Element => {
  return (
    <div className="container mx-auto flex-grow text-slate-800">
      <h1 className="text-center text-4xl border-2 font-extrabold my-8 mx-4 p-8 bg-slate-100 rounded shadow-lg md:mx-8">
        Graphics vs Performance
      </h1>
      <div className="bg-slate-100 p-4 pb-8 mx-4 rounded border-2 shadow-lg mb-10 md:mx-8 md:p-8">
        <h2 className="text-center text-2xl font-bold underline mt-4 mb-2 md:text-start md:mt-0 lg:mb-1">
          Why it&#39;s game-by-game
        </h2>
        <p className="text-xl text-center mb-4">
          There are numerous factors gamers should consider when choosing the difference as
          well as more indirect things to look for. Here they are:
        </p>
        <div className="flex">
          <div className="w-1/2">
            <h3 className="text-slate-800 text-xl font-bold mb-4 underline">
              Game factors
            </h3>
            <ul className="mb-8">
              <li>What genre is the game?</li>
              <li>Is the game first or third-person?</li>
              <li>How fast is the game?</li>
              <li>Is it a singleplayer or multiplayer game?</li>
              <li>Is the singleplayer emphasizing story or gameplay?</li>
              <li>Is the singleplayer game emphasizing its graphics?</li>
              <li>What is the art style of the game?</li>
              <li>Does the game hold a steady 60fps?</li>
              <li>If not, does it at least stay above the VRR threshold?</li>
              <li>Does the fidelity mode have a 30fps cap?</li>
              <li>Does the 30fps cap keep a consistent frame time?</li>
              <li>Does the game have a 40fps or 120fps mode?</li>
              <li>Does the game support a 30/60fps cap?</li>
              <li>What is the resolution of each mode?</li>
              <li>Do the modes use DRS?</li>
              <li>How low does the resolution drop in each mode?</li>
              <li>How often does the resolution hit the lowest?</li>
              <li>What upscaling is the game using?</li>
              <li>Does the game support good HDR?</li>
              <li>Does the game even support HDR?</li>
              <li>Does the game have a weird filter?</li>
              <li>Is the game a remake or remaster?</li>
              <li>How dense is the geometry?</li>
              <li>How detailed are the textures?</li>
              <li>How detailed are characters?</li>
              <li>Does the game have a lot of particle effects?</li>
              <li>Does the game support ray-tracing?</li>
              <li>If so, what types of RT? RTAO/lighting/RTGI etc</li>
              <li>How good is the RT implementation?</li>
              <li>Does the game have screen tearing?</li>
              <li>Does the game use in-game cutscenes?</li>
              <li>Does the game have a long draw distance?</li>
            </ul>
          </div>
          <div>
            <div>
              <h3 className="text-slate-800 text-xl font-bold mb-4 underline">
                Settings factors
              </h3>
              <ul className="mb-8">
                <li>Does the game have an FOV slider?</li>
                <li>Does the game use motion blur?</li>
                <li>Does the game use chromatic aberration?</li>
                <li>Does the game use depth of field?</li>
                <li>Does the game use film grain?</li>
                <li>Does the game use v-sync?</li>
              </ul>
            </div>
            <div>
              <h3 className="text-slate-800 text-xl font-bold mb-4 underline">
                Screen factors
              </h3>
              <ul className="mb-8">
                <li>What size of the screen is being used?</li>
                <li>What resolution is the screen?</li>
                <li>What type of screen is being used?</li>
                <li>What is the max refresh rate of the screen?</li>
                <li>Is the screen an OLED or an LCD/LED/QLED?</li>
                <li>
                  Does the screen use a Game mode/have a low response time?
                </li>
                <li>Does the screen support VRR?</li>
              </ul>
            </div>
            <div>
              <h3 className="text-slate-800 text-xl font-bold mb-4 underline">
                External factors
              </h3>
              <ul className="mb-8">
                <li>How close are you to the screen?</li>
                <li>Are you playing in a dark or bright room?</li>
              </ul>
            </div>
            <div>
              <h3 className="text-slate-800 text-xl font-bold mb-4 underline">
                Personal factors
              </h3>
              <ul className="mb-8">
                <li>
                  Can you personally feel a big difference between 30 and 60fps?
                </li>
                <li>
                  Can you personally see a big difference between resolutions?
                </li>
                <li>
                  What&#39;s your skill level? Do you need extra frames to
                  compete?
                </li>
                <li>How long are your gaming sessions?</li>
                <li>Does the game use photo mode and do you use it a lot?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicsvsPerformancePage;
