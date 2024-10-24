const AboutPage = (): JSX.Element => {
  return (
    <div className="container mx-auto flex-grow text-slate-800">
      <h1 className="text-center text-4xl font-extrabold my-8 mx-4 p-8 bg-slate-100 border-2 rounded shadow-lg md:mx-8">
        About
      </h1>
      <div className="mx-4 mb-10 p-4 pb-8 bg-slate-100 border-2 rounded shadow-lg md:mx-8 md:p-8 lg:p-12">
        <h2 className="text-center text-2xl font-bold underline mt-4 mb-2 md:text-start md:mt-0 lg:mb-1">
          Why This Website Exists
        </h2>
        <p className="mb-4">
          As technology continues to evolve, players are increasingly seeking
          ways to optimize their gaming experience. Furthermore, the launch of
          the PS5 Pro, with its enhanced hardware and new features like PSSR,
          now offers even greater opportunities for console gamers to customize
          PS5 games to best suit their preferences.
        </p>
        <p className="mb-8 md:mb-12">
          A dedicated website that details all the PS5 Pro upgrades for each
          game is therefore an invaluable resource for this market.
        </p>
        <h3 className="text-xl text-center font-semibold mb-2 md:text-start lg:mb-1">
          1. Clarification of Enhancements
        </h3>
        <p className="mb-4">
          The PS5 Pro offers significant performance upgrades when compared to
          the base PS5. These include higher frame rates, up to 8K resolution,
          AI upscaling, ray tracing improvements, and overall enhanced graphical
          fidelity.
        </p>
        <p className="mb-4">
          However, every game won&#39;t receive the same level and type of
          upgrade. For example:
        </p>
        <ul className="mb-4 mx-8 list-disc">
          <li>
            Some games will only benefit from a higher resolution or frame rate,
            whereas others will improve both.
          </li>
          <li>
            Some games will introduce various types of ray tracing. For others
            that already include RT, they will improve the quality of it and/or
            add more types.
          </li>
          <li>
            Some games will offer one bespoke PS5 Pro mode, whereas others will
            continue to include both the fidelity and performance modes we see
            in many base PS5 games. Just at a higher technical level.
          </li>
        </ul>
        <p className="mb-4">
          That&#39;s a lot of way to improve a game! This site can therefore
          eliminate any confusion or speculation by detailing exactly what
          upgrades players can expect from each game.
        </p>
        <p className="mb-8 md:mb-12">
          After all, gamers invest significant time and money into this hobby.
          They therefore deserve to know exactly how games perform on their
          hardware.
        </p>
        <h3 className="text-xl text-center font-semibold mb-2 md:text-start lg:mb-1">
          2. Consumer Education and Purchasing Decisions
        </h3>
        <p className="mb-4">
          Many players are discerning in regards to how their games perform. For
          example, some prioritize 60fps over higher resolutions, or vice versa.
          As this site outlines Pro upgrades for each PS5 title, it helps
          consumers make educated decisions about whether a game is worth buying
          for their Pro hardware. Or if a favorite is worth revisiting.
        </p>
        <p className="mb-8 md:mb-12">
          As new games release and older titles are patched with Pro support, a
          central hub of info also helps consumers track changes on a macro
          level and decide if they want to invest in the console itself.
        </p>
        <h3 className="text-xl text-center font-semibold mb-2 md:text-start lg:mb-1">
          3. Improved Game Discovery
        </h3>
        <p className="mb-4">
          Not every gamer deeply follows news about patches and hardware
          optimizations, resulting in being unaware of which games receive PS5
          Pro upgrades. By detailing these enhancements, this site makes it far
          easier for them to discover what games fully utilize the PS5 Pro.
        </p>
        <p className="mb-8 md:mb-12">
          This helps boosts interest in titles that flew under the radar or
          drive renewed enthusiasm for older games that were Pro enhanced.
        </p>
        <h3 className="text-xl text-center font-semibold mb-2 md:text-start lg:mb-1">
          4. Keep The Industry Accountable
        </h3>
        <p className="mb-4">
          Having a public record of which games receive PS5 Pro upgrades and
          what those upgrades entail keeps the industry accountable.
        </p>
        <p className="mb-8 md:mb-12">
          By separating the studios who get to improve their games from the ones
          who aren&#39;t, or do so poorly, the transparency encourages
          publishers to invest the time and resources needed to optimize games
          properly. Thereby enhancing the Pro ecosystem.
        </p>
        <h3 className="text-xl text-center font-semibold mb-2 md:text-start lg:mb-1">
          5. Centralized Information Hub
        </h3>
        <p className="mb-4">
          Currently, information about PS5 Pro upgrades are scattered across
          forums, news outlets, and patch notes. Thus making it difficult for
          even a dedicated player to stay up to date. This one-stop centralized
          site dedicated to this purpose now saves time and effort for gamers
          who want quick, reliable data.
        </p>
        <p>
          The site also features search filters, allowing users to easily find
          games that meet preferred criteria. For example, games with 60fps or
          RT support.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
