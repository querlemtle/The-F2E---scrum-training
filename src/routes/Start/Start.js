import { Link } from "react-router-dom";
import { ScrumSticker } from "../../assets/images";

export default function Start() {
  return (
    <section className="bg-gray-dark h-screen grid grid-rows-start-layout">
      <img src={ScrumSticker} alt="scrum-sticker" className="self-start" />
      <div className="self-center h-full grid grid-cols-3 items-stretch">
        <div className="w-full h-auto -scale-x-100 bg-po bg-cover bg-[left_3rem]" />
        <div className="flex flex-col justify-around items-center text-center">
          <h1 className="text-white text-6xl font-KFhimaji">
            S C R U M<p className="text-white text-9xl font-KFhimaji">新手村</p>
          </h1>
          <Link
            to="/story"
            className="text-yellow text-6xl font-KFhimaji hover:scale-125"
          >
            S T A R T
          </Link>
          <p className="text-gray-light font-huninn">design by Rong</p>
        </div>
        <div className="w-full h-auto -scale-x-100 bg-user bg-cover bg-center" />
      </div>
      <img src={ScrumSticker} alt="scrum-sticker" className="self-end" />
    </section>
  );
}
