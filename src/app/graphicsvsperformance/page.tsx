import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Graphics vs Performance",
  description:
    "Listing the 50+ factors to consider when choosing between fidelity and performance modes in PS5 games.",
};

const GraphicsvsPerformancePage = (): JSX.Element => {
  return (
    <div className="container mx-auto flex-grow text-slate-800">
      <h1 className="text-center text-4xl font-extrabold my-8 mx-4 p-8 bg-slate-100 border-2 rounded shadow-lg md:mx-8">
        Graphics vs Performance
      </h1>
      <div className="mx-4 mb-10 p-4 pb-8 bg-slate-100 border-2 rounded shadow-lg md:mx-8 md:p-8 lg:p-12">
        <h2 className="text-center text-2xl font-extrabold my-4 md:text-start md:mt-0 lg:text-3xl lg:mb-6">
          Why <span className="md:hidden lg:inline">choosing</span>{" "}
          <span className="hidden md:inline lg:hidden">picking</span> a mode is
          a game-by-game decision
        </h2>
        <p className="mb-4">
          As was always going to be the case, there are PS5 Pro enhanced games
          like Alan Wake 2, and even first-party titles like Spider-Man, that
          still offer fidelity and performance modes. This begs the
          question - which mode should you choose?
        </p>
        <p className="mb-4">
          Some gamers swear by 60fps performance modes because 30fps is
          apparently unplayable, whereas others claim they can&#39;t see any
          difference between 30fps and 60fps, so will always choose fidelity
          mode. They&#39;re both wrong, because the correct answer is when
          choosing between fidelity and performance, it depends entirely on that
          specific game and individual player.
        </p>
        <p className="mb-4">
          To prove it, here are 50+ factors to consider before settling on a
          mode. After all, what&#39;s the point in choosing fidelity mode in a
          cinematic game like The Last of Us if it&#39;s being played in a
          brightly lit room on a small 1080p monitor? Why bother with a
          performance mode in a slow-paced game that drops resolution below
          1080p to achieve 60fps?
        </p>
        <p className="mb-12">
          It&#39;s all about context! So hopefully these factors help you make a
          more informed decision on which mode to choose for each game.
        </p>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <h3 className="text-center text-2xl font-bold underline mb-2 md:text-start">
              Game factors
            </h3>
            <ul className="list-disc mb-8 ml-4 space-y-1 lg:ml-4">
              <li>Is the game in first or third-person?</li>
              <li>What genre is the game?</li>
              <li>Does the game emphasize story or gameplay?</li>
              <li>Does the game emphasize its graphics?</li>
              <li>Is it mainly a singleplayer or multiplayer game?</li>
              <li>How fast is the gameplay?</li>
              <li>What art style does the game have?</li>
              <li>Is the game a remake or remaster?</li>
            </ul>
            <h3 className="text-center text-2xl font-bold underline mb-2 md:text-start">
              Technical factors
            </h3>
            <ul className="list-disc mb-8 ml-4 space-y-1 lg:ml-4">
              <li>Does fidelity mode hold a steady 30fps?</li>
              <li>Does the 30fps keep a consistent frame time?</li>
              <li>Does performance mode hold a steady 60fps?</li>
              <li>Does the frame rate stay above the VRR limit?</li>
              <li>Does the game support 40fps/120fps modes?</li>
              <li>What is the resolution boundary of each mode?</li>
              <li>Do the modes even use DRS?</li>
              <li>How low does the resolution drop in each mode?</li>
              <li>How often does the resolution hit the low point?</li>
              <li>What upscaling technique does the game use?</li>
              <li>Does the game support HDR?</li>
              <li>Is the HDR support even good?</li>
              <li>Does the game support ray-tracing?</li>
              <li>If so, how many/what types of RT?</li>
              <li>How good is the RT implementation?</li>
              <li>Does the game use in-game cutscenes?</li>
              <li>Does the game have a weird filter?</li>
              <li>How dense are the assets in environments?</li>
              <li>How detailed are the textures?</li>
              <li>How detailed are characters?</li>
              <li>Does the game have a lot of particle effects?</li>
              <li>Does the game suffer from screen tearing?</li>
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
                <li>Does the game have good gamma calibration?</li>
                <li>Can you toggle motion blur?</li>
                <li>Can you toggle chromatic aberration?</li>
                <li>Can you toggle depth of field?</li>
                <li>Can you toggle film grain?</li>
                <li>Can you toggle VSync?</li>
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
