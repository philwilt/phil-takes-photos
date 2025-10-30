import { Link } from "react-router-dom";
import Logo from "../public/philtakesphotos-logo.png";
import "./App.css";

function Home() {
  return (
    <>
      <div className="grid items-center justify-items-center">
        <main className="flex flex-col gap-[16px] row-start-1 items-center sm:items-start justify-center mb-6 mt-10">
          <img
            src={Logo}
            alt="Phil takes photos logo"
            width={36}
            height={36}
            className="text-3xl font-large flex flex-row content-center"
          />
          <h1 className="text-3xl font-large flex flex-row">
            Phil Takes Photos
          </h1>
          <h2 className="text-xl font-large flex flex-row  text-center">
            capturing the surreal and the serene
          </h2>
          <div className="flex flex-row">
            <Link to={"/galleries"}>
              <div className="shadow-md shadow-black-950/10 p-2 transform transition duration-300 hover:scale-102">
                <div className=" text-xl font-large flex flex-row mt-2 text-center rounded-sm pl-10 pr-40 pt-10 pb-20 bg-[url(/hero-1.png)] bg-cover">
                  <div className="text-xl font-large font-bold flex flex-row mt-2 text-center bg-neutral-50 pl-5 pr-5">
                    Gallery
                  </div>
                </div>
              </div>
            </Link>

            <Link to={"/about"}>
              <div className="shadow-md shadow-black-950/10 p-2 transform transition duration-300 hover:scale-102">
                <div className=" text-xl font-large flex flex-row mt-2 text-center rounded-sm pl-10 pr-40 pt-10 pb-20 bg-[url(/about-me.jpg)] bg-cover">
                  <div className="text-xl font-large font-bold flex flex-row mt-2 text-center bg-neutral-50 pl-5 pr-5">
                    About
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
