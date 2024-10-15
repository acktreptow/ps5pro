function AboutPage() {
  return (
    <div className="container mx-auto flex-grow text-slate-800">
      <h1 className="text-slate-800 text-center text-4xl font-extrabold my-8 bg-slate-100 p-8 rounded shadow-lg">
        About
      </h1>
      <div className="bg-slate-100 p-8 rounded shadow-lg mb-8">
        <h2 className="text-slate-800 text-2xl font-bold mb-4 underline">
          Why This Website Exists
        </h2>
        <p className="mb-8">
          A dedicated website that details all the PlayStation 5 Pro (PS5 Pro)
          upgrades for each game would be an invaluable resource for both gamers
          and industry professionals. As gaming technology continues to evolve,
          players are increasingly looking for ways to optimize their
          experience, and the launch of the PS5 Pro, with its enhanced hardware,
          presents a significant opportunity to do just that. Here is why.
        </p>
        <h3 className="text-slate-800 text-xl font-bold mb-4">
          1. Clarification of Enhanced Features
        </h3>
        <p className="mb-8">
          The PS5 Pro offers significant upgrades in terms of performance,
          including higher frame rates, up to 8K resolution, AI upscaling, ray
          tracing improvements, and overall enhanced graphical fidelity.
          However, not every game will receive the same level of upgrade. Some
          will benefit from higher resolutions, others from frame rate boosts,
          while certain games may implement both or add new visual effects such
          as improved lighting and shadow quality. Some games will offer a
          bespoke PS5 Pro mode where as other will continue to add fidelity and
          performance modes. A website dedicated to detailing these upgrades
          would provide clear information on what improvements players can
          expect from each game, eliminating confusion and speculation. This is
          especially important because gamers invest significant amounts of time
          and money into their gaming experiences, and they want to know exactly
          how a game will perform on their upgraded hardware.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
