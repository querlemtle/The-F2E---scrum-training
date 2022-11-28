import { Link } from "react-router-dom";
import { RolePo } from "../../assets/images";

export default function Intro() {
  return (
    <section className="text-gray-dark h-screen text-center">
      <img src={RolePo} alt="role-po" className="w-1/3 mx-auto" />
      <div className="w-full h-full bg-intro-pad bg-cover bg-center fixed bottom-0">
        <div className="absolute top-1/2 left-[50vw] -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-[45px] mb-20">
            Welcome to TT 資訊，
            <br />
            在加入我們之前，
            <br />
            請先了解 Scrum 的精神並通過任務!
          </h1>
          <Link to="/intro/1" className="text-6xl font-chikara">
            接受
          </Link>
        </div>
      </div>
    </section>
  );
}
