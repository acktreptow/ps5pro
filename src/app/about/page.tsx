const AboutPage = (): JSX.Element => {
  return (
    <div className="container mx-auto flex-grow text-slate-800">
      <h1 className="text-center text-4xl font-extrabold my-8 mx-4 p-8 bg-slate-100 border-2 rounded shadow-lg md:mx-8">
        About
      </h1>
      <div className="mx-4 mb-10 p-4 pb-8 bg-slate-100 border-2 rounded shadow-lg md:mx-8 md:p-8">
        <h2 className="text-center text-2xl font-bold underline mt-4 mb-2">
          Why This Website Exists
        </h2>
        <p className="mb-8">
          As technology continues to evolve, players are increasingly seeking
          ways to optimize their gaming experience. And the launch of the PS5
          Pro, with its enhanced hardware and new technologies like PSSR, offers
          even greater opportunities for players to customize games to best suit
          their preferences. A dedicated website that details all the PS5 Pro
          upgrades for each game is therefore an invaluable resource.
        </p>
        <h3 className="text-xl text-center font-semibold mb-2">
          1. Clarification of Enhancements
        </h3>
        <p className="mb-4">
          The PS5 Pro offers significant upgrades in terms of performance. These
          include higher frame rates, up to 8K resolution, AI upscaling, ray
          tracing improvements, and overall enhanced graphical fidelity.
          However, not every game will receive the same level and type of
          upgrade. For example:
        </p>
        <ul className="mb-4 mx-8 list-disc">
          <li>
            Some games will exclusively benefit from higher resolutions or from
            frame rate boosts, whereas others will improve both.
          </li>
          <li>
            Some games will introduce various forms of ray-tracing. For other
            games that already have ray-tracing, they will improve the quality
            of it and/or add more forms of ray-tracing.
          </li>
          <li>
            Some games will offer one bespoke PS5 Pro mode, whereas others will
            continue to include both the fidelity and performance modes we see
            in many base PS5 games. Just at a higher technical level.
          </li>
        </ul>
        <p className="mb-8">
          That&#39;s a lot of way to improve a game! A website dedicated to
          detailing these upgrades would provide clear information on what
          improvements players can expect from each game, eliminating confusion
          and speculation. After all, gamers invest significant amounts of time
          and money into this hobby. They therefore should know exactly how a
          game will perform on their upgraded hardware.
        </p>
        <h3 className="text-xl text-center font-semibold mb-2">
          2. Consumer Education and Purchasing Decisions
        </h3>
        <p className="mb-8">
          Many gamers are discerning when it comes to how their favorite titles
          perform, and some might prioritize specific features like smooth frame
          rates over higher resolutions, or vice versa. A website that outlines
          the PS5 Pro-specific upgrades for each game would allow consumers to
          make informed decisions about whether a particular game is worth
          buying on the new hardware, or if a current favorite is worth
          revisiting. Additionally, as new games are released or older titles
          receive patches to take advantage of the PS5 Pros capabilities, a
          central hub of information would help consumers track these changes
          and decide if they want to make an investment in a game or even in the
          PS5 Pro console itself.
        </p>
        <h3 className="text-xl text-center font-semibold mb-2">
          3. Improved Game Discovery
        </h3>
        <p className="mb-8">
          Not every gamer is deeply involved in following the latest news about
          patches, updates, and hardware optimizations. Many may not even be
          aware of which games have received PS5 Pro upgrades. A website that
          categorizes and lists these enhancements would make it easier for
          players to discover new or updated games that fully utilize the
          consoles power. This could boost interest in titles that might have
          flown under the radar or drive renewed enthusiasm for older games that
          have been upgraded to make the most of the PS5 Pros hardware.
        </p>
        <h3 className="text-xl text-center font-semibold mb-2">
          4. Keep Developers Accountable
        </h3>
        <p className="mb-8">
          Having a public record of which games receive PS5 Pro upgrades and
          what those upgrades entail would also help keep game developers
          accountable. Players would be able to see which studios are making the
          effort to improve their games for the latest hardware and which ones
          are not. This transparency could encourage more developers to invest
          the time and resources needed to optimize their titles, thereby
          enhancing the overall gaming ecosystem.
        </p>
        <h3 className="text-xl text-center font-semibold mb-2">
          5. Centralized Information Hub
        </h3>
        <p>
          Currently, information about PS5 Pro upgrades may be scattered across
          forums, news outlets, and patch notes, making it difficult for the
          average player to stay up to date. A centralized website dedicated to
          this purpose would serve as a one-stop shop, saving time and effort
          for gamers who want quick, reliable information. The website will also
          feature search filters, allowing users to easily find games that meet
          their preferred criteria, such as games with 4K resolution, 60fps, or
          ray tracing support.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
