import { Link } from "react-router-dom";
import Logo from "../public/philtakesphotos-logo.png";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

function About() {
  return (
    <>
      <div className="w-full">
        <header className="flex justify-between items-center p-4 pl-0">
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="Phil takes photos logo"
              width={36}
              height={36}
            />
          </Link>
          <ThemeToggle />
        </header>
      </div>
      <div className="grid justify-items-center">
        <main className="flex flex-col gap-[16px] row-start-1 items-center sm:items-start justify-center mb-6">
          <Link
            to="/"
            className="text-3xl font-large flex flex-row content-center justify-center"
          >
            <h1 className="text-3xl font-large flex flex-row">
              Phil Takes Photos
            </h1>
          </Link>

          <h2 className="text-xl font-large flex flex-row text-center">
            capturing the surreal and the serene
          </h2>

          <div className="flex lg:flex-row flex-col">
            <div className="shadow-md shadow-black-950/10 p-2 flex flex-col">
              <div className=" text-xl font-large flex flex-row mt-2 rounded-sm pl-2 sm:pl-10 pr-40 pt-2 pb-20 bg-[url(/about-me.jpg)] bg-cover bg-top-right md:bg-center h-[260px] sm:w-sm">
                <div className="text-xl font-large font-bold flex flex-row mt-2 bg-neutral-50 text-neutral-600 pl-3 pr-5 h-fit">
                  About Phil
                </div>
              </div>
            </div>

            <div className="flex pt-4 pb-12 pl-1">
              <p>
                My journey as a photographer began in my youth, exploring the
                streets of Seattle with a growing passion for analog
                photography. Living in the Pacific Northwest has deeply
                influenced my eye for atmosphere and light, inspiring me to
                capture both its moody landscapes and fleeting moments of
                serenity. Transitioning to digital in my twenties, a
                serendipitous trip to Taipei ignited my love for photographing
                life abroad. United with my partner, I’ve since traveled from
                the bustling streets of Saigon to the majestic landscapes of
                Patagonia, each destination expanding my artistic vision.
                Alongside travel, I explore infrared photography to reveal the
                surreal and unseen qualities of familiar places. Through my
                lens, I invite viewers to share in a journey of discovery, where
                curiosity, connection, and the beauty of the world converge.
              </p>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col-reverse items-center">
            <div className="flex pt-4 pr-1">
              <p>
                Infrared photography captures light that lies beyond the visible
                spectrum—specifically infrared wavelengths that the human eye
                cannot see. By using special film, filters, or digital sensors
                sensitive to infrared light, photographers reveal a hidden world
                where familiar scenes transform into dreamlike landscapes.
                Foliage glows white or silver, skies darken to near black, and
                water takes on a smooth, reflective quality. The result is a
                surreal, otherworldly aesthetic—one that blurs the line between
                reality and imagination, exposing a dimension of light that
                exists all around us but remains invisible to ordinary
              </p>
            </div>

            <div className="shadow-md shadow-black-950/10 p-2">
              <div className=" text-xl font-large flex mt-2 rounded-sm  pl-10 pr-40 pt-10 pb-20 bg-[url(/about-ir.jpg)] bg-cover h-[260px] sm:w-sm">
                <div className="text-xl font-large font-bold flex flex-row mt-2 text-left bg-neutral-50 text-neutral-600 pl-5 pr-5 h-fit">
                  Infrared
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default About;
