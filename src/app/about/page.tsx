import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About page explaining why detailing how every PS5 game is enhanced for the PS5 Pro is important.",
};

const AboutPage = (): JSX.Element => {
  return (
    <div className="container mx-auto flex-grow text-slate-800">
      <h1 className="text-center text-4xl font-extrabold my-8 mx-4 p-8 bg-slate-100 border-2 rounded shadow-lg md:mx-8">
        About
      </h1>
      <div className="mx-4 mb-10 p-4 pb-8 bg-slate-100 border-2 rounded shadow-lg md:mx-8 md:p-8 lg:p-12">
        <h2 className="text-center text-2xl font-extrabold my-4 md:text-start md:mt-0 lg:text-3xl">
          Why This Website Exists
        </h2>
        <p className="mb-4">
          As technology continues to evolve, players are increasingly seeking
          ways to optimize their gaming experience. Furthermore, the launch of
          the PS5 Pro, with its enhanced hardware and new features like PSSR,
          now offers even greater opportunities for console gamers to customize
          PS5 games to best suit their preferences.
        </p>
        <p className="mb-12">
          A dedicated website that details all the PS5 Pro upgrades for each
          game is therefore an invaluable resource for this market.
        </p>
        <h3 className="text-center text-xl font-semibold mb-2 md:text-start lg:text-2xl lg:mb-2">
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
        <p className="mb-12">
          After all, gamers invest significant time and money into this hobby.
          They therefore deserve to know exactly how games perform on their
          hardware.
        </p>
        <h3 className="text-center text-xl font-semibold mb-2 md:text-start lg:text-2xl lg:mb-2">
          2. Consumer Education and Purchasing Decisions
        </h3>
        <p className="mb-4">
          Many players are discerning in regards to how their games perform. For
          example, some prioritize 60fps over higher resolutions, or vice versa.
          As this site outlines Pro upgrades for each PS5 title, it helps
          consumers make educated decisions about whether a game is worth buying
          for their Pro hardware. Or if an old favorite is worth revisiting.
        </p>
        <p className="mb-12">
          As games release and older titles are patched with Pro support, a
          central hub of info also helps consumers track changes on a macro
          level and decide if they want to invest in the console itself.
        </p>
        <h3 className="text-center text-xl font-semibold mb-2 md:text-start lg:text-2xl lg:mb-2">
          3. Improved Game Discovery
        </h3>
        <p className="mb-4">
          Not every gamer deeply follows news about patches and game
          optimizations, thus being unaware of which PS5 games receive Pro
          upgrades. By detailing these enhancements, this site makes it far
          easier for them to discover what games fully utilize the PS5 Pro.
        </p>
        <p className="mb-12">
          This helps boosts interest in titles that flew under the radar and
          drives renewed enthusiasm for older games that are now Pro enhanced.
        </p>
        <h3 className="text-center text-xl font-semibold mb-2 md:text-start lg:text-2xl lg:mb-2">
          4. Keep the Industry Accountable
        </h3>
        <p className="mb-4">
          A public record of which games receive PS5 Pro upgrades and what the
          upgrades entail keeps the industry accountable.
        </p>
        <p className="mb-12">
          By separating studios who enhance their games from the ones who
          don&#39;t, or do so poorly, the resulting transparency encourages
          publishers to invest time and resources to be part of the former.
          Thereby enhancing the PS5 Pro ecosystem.
        </p>
        <h3 className="text-center text-xl font-semibold mb-2 md:text-start lg:text-2xl lg:mb-2">
          5. Centralized Information Hub
        </h3>
        <p className="mb-4">
          Information about PS5 Pro upgrades are scattered across forums, news
          outlets, and patch notes, which makes it difficult for even hardcore
          gamers to stay up to date. As a one-stop, centralized hub dedicated to
          the Pro, time and effort is now saved for those who want quick,
          reliable data.
        </p>
        <p>
          The site will also soon feature search filters, allowing users to
          easily find games that meet preferred criteria. For example, games
          that can run at 120fps, or games with RT implementation etc.
        </p>
      </div>
      <div className="mx-4 mb-10 p-4 pb-8 bg-slate-100 border-2 rounded shadow-lg md:mx-8 md:p-8 lg:p-12">
        <h2 className="text-center text-2xl font-extrabold my-4 mb-12 md:text-start md:mt-0 lg:text-3xl">
          Special Thanks
        </h2>
        <h3 className="text-center text-xl font-semibold mb-2 md:text-start lg:text-2xl lg:mb-2">
          Primary Sources
        </h3>
        <p className="mb-4">
          Thank you to the following developers and publishers for collaborating
          with me to complete an informational page for your respective game.
          Although at times, all the technical figures could not be provided for
          a variety of reasons, information such as a timeframe for when we can
          expect you to discuss Pro enhancements still provides invaluable
          context for people who are interested in your game!
        </p>
        <ul className="mb-12 mx-8 list-disc">
          <li>Anima Project</li>
          <li>BlackMill Games</li>
          <li>Free Lives</li>
          <li>Nacon</li>
          <li>My World</li>
          <li>Owlcat Games</li>
          <li>Pearl Abyss</li>
          <li>Ripstone Games</li>
          <li>Stonebrick Studios</li>
          <li>Superkami</li>
          <li>Tower Five</li>
        </ul>

        <h3 className="text-center text-xl font-semibold mb-2 md:text-start lg:text-2xl lg:mb-2">
          Secondary Sources
        </h3>
        <p className="mb-4">
          Special thanks in particular to the following. The VAST majority of
          secondary source analysis comes from them due to how reputable they
          are.
        </p>
        <ul className="mb-6 mx-8 list-disc">
          <li>
            Digital Foundry (the best in the business. Watch their excellent
            videos{" "}
            <a
              href="https://www.youtube.com/@DigitalFoundry/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              here
            </a>{" "}
            and check out their new site{" "}
            <a
              href="https://www.digitalfoundry.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              here
            </a>
            )
          </li>
          <li>
            NX Gamer (basically the Northern arm of DF. Check out his excellent
            analysis{" "}
            <a
              href="https://www.youtube.com/@NXGamer/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              here
            </a>
            )
          </li>
          <li>
            ElAnalistaDeBits (The best in the business for no frills side by
            side comparisons (complete with that catchy music!). Check them out
            here{" "}
            <a
              href="https://www.youtube.com/@ElAnalistaDeBits/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              here
            </a>
            )
          </li>
        </ul>
        <p className="mb-4">
          The following secondary sources also deserve mention for their more
          bespoke contributions.
        </p>
        <ul className="mb-12 mx-8 list-disc">
          <li>
            GamingTech (for his S-tier HDR analysis and Pro coverage at the
            beginning. Check him out{" "}
            <a
              href="https://www.youtube.com/@GamingTech-YouTube/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              here
            </a>
            )
          </li>
          <li>
            Brazil Pixel (for his one of a kind realtime DRS analysis - make
            more videos because you deserve to blow up! Check them out{" "}
            <a
              href="https://www.youtube.com/@brazilpixel/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              here
            </a>
            )
          </li>
          <li>
            Skycaptin5 (for his high video quality and for showing the actual
            menus which can provide much needed context. Check him out{" "}
            <a
              href="https://www.youtube.com/@Skycaptin5/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              here
            </a>
            )
          </li>
          <li>
            GamingBolt (for their great developer interviews that usually
            includes questions about Pro, Check them out{" "}
            <a
              href="https://www.reddit.com/r/PS5/comments/1fq8jo5/every_ps5_pro_enhanced_game_confirmed/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              here
            </a>
            )
          </li>
          <li>
            ZXII (for their extensive, consistently updated PS5 Pro games list
            Check out the list here{" "}
            <a
              href="https://www.reddit.com/r/PS5/comments/1fq8jo5/every_ps5_pro_enhanced_game_confirmed/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              here
            </a>
            )
          </li>
          <li>
            Often Ignored Bear (for his HQ screenshots on the Resetera thread of
            those more obscure Pro games like Carmen Sandiego and Fantasy Life.
            Check out an example here{" "}
            <a
              href="https://www.resetera.com/threads/all-games-with-ps5-pro-enhancements.1026072/page-286"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              here
            </a>
            )
          </li>
          <li>
            Speaking of the{" "}
            <a
              href="https://www.resetera.com/threads/all-games-with-ps5-pro-enhancements.1026072/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Resetera{" "}
            </a>
            thread as well as some{" "}
            <a
              href="https://gamefaqs.gamespot.com/boards/467687-path-of-exile-2/80897440"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Gamefaqs{" "}
            </a>
            and{" "}
            <a
              href="https://www.reddit.com/r/Slitterhead/comments/1hdbu15/difference_on_ps5_pro_to_base_model_on_slitterhead/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Reddit
            </a>{" "}
            threads, and random SEO articles like on{" "}
            <a
              href="https://www.gamespot.com/gallery/every-ps5-pro-enhanced-game/2900-5758/#131"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Gamespot,
            </a>{" "}
            a shoutout to them too. Although they were only used as sources for
            a few games like Pipistrello, POE2, Slitterhead and Vampire
            Survivors as I could not vet the info myself (this is made very
            clear on the few games where they were used), they still deserve the
            shoutout for giving these small Pro updates some air!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
