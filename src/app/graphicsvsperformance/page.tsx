const GraphicsvsPerformancePage = (): JSX.Element => {
  return (
    <div className="container mx-auto flex-grow text-slate-800">
      <h1 className="text-center text-4xl font-extrabold my-8 mx-4 p-8 bg-slate-100 border-2 rounded shadow-lg md:mx-8">
        Graphics vs Performance
      </h1>
      <div className="mx-4 mb-10 p-4 pb-8 bg-slate-100 border-2 rounded shadow-lg md:mx-8 md:p-8 lg:p-12">
        <h2 className="text-center text-2xl font-extrabold mt-4 mb-2 md:text-start md:mt-0 lg:mb-1">
          Why it&#39;s game-by-game
        </h2>
        <p className="text-center mb-12 md:text-start md:mb-8">
          There are numerous factors gamers should consider when choosing the
          difference as well as more indirect things to look for. Here they are:
        </p>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <h3 className="text-center text-2xl font-bold underline mb-2 md:text-start">
              Game factors
            </h3>
            <ul className="list-disc mb-8 ml-4 space-y-1 lg:ml-4">
              <li>What genre is the game?</li>
              <li>Is the game first or third-person?</li>
              <li>How fast is the game?</li>
              <li>Is it a singleplayer or multiplayer game?</li>
              <li>Does the game emphasize story or gameplay?</li>
              <li>Does the game emphasize its graphics?</li>
              <li>What is the art style of the game?</li>
              <li>Does the game hold a steady 60fps?</li>
              <li>Does the frame rate stay above the VRR limit?</li>
              <li>Does the fidelity mode have a 30fps cap?</li>
              <li>Does the 30fps keep a consistent frame time?</li>
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
              <h3 className="text-center text-2xl font-bold underline mb-2 md:text-start lg:ml-8">
                Settings factors
              </h3>
              <ul className="list-disc mb-8 ml-4 space-y-1 lg:ml-12">
                <li>Does the game have an FOV slider?</li>
                <li>Does the game use motion blur?</li>
                <li>Does the game use chromatic aberration?</li>
                <li>Does the game use depth of field?</li>
                <li>Does the game use film grain?</li>
                <li>Does the game use v-sync?</li>
              </ul>
            </div>
            <div>
              <h3 className="text-center text-2xl font-bold underline mb-2 md:text-start lg:ml-8">
                Screen factors
              </h3>
              <ul className="list-disc mb-8 ml-4 space-y-1 lg:ml-12">
                <li>What size is the screen?</li>
                <li>What resolution is the screen?</li>
                <li>Is the screen a TV, monitor, laptop, phone etc?</li>
                <li>Is it an OLED screen or an LCD/LED/QLED?</li>
                <li>Does the screen support HDR?</li>
                <li>What is the max refresh rate of the screen?</li>
                <li>Does the screen support a Game mode?</li>
                <li>Does the screen have a low response time?</li>
                <li>Does the screen support VRR?</li>
                <li>Does the screen use other HDMI 2.1 features?</li>
              </ul>
            </div>
            <div>
              <h3 className="text-center text-2xl font-bold underline mb-2 md:text-start lg:ml-8">
                External factors
              </h3>
              <ul className="list-disc mb-8 ml-4 space-y-1 lg:ml-12">
                <li>How close are you to the screen?</li>
                <li>Do you play in a dark or bright room?</li>
                <li>Do you have others around you when playing?</li>
                <li>How long are your gaming sessions?</li>
              </ul>
            </div>
            <div>
              <h3 className="text-center text-2xl font-bold underline mb-2 md:text-start lg:ml-8">
                Personal factors
              </h3>
              <ul className="list-disc ml-4 space-y-1 lg:ml-12">
                <li>Can you feel a big gap between 30fps & 60fps?</li>
                <li>Can you feel a big gap between resolutions?</li>
                <li>What&#39;s your skill level in singleplayer games?</li>
                <li>Need extra frames to compete in multiplayer?</li>
                <li>Do you use photo mode a lot?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicsvsPerformancePage;
