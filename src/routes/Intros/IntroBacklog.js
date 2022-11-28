import { RolePo, Talking } from "../../assets/images";
import DialogBox from "../../components/DialogBox/DialogBox";

export default function IntroBacklog() {
  return (
    <section className="w-full h-full">
      <div className="flex">
        <img src={RolePo} alt="role-po" className="w-1/3 h-auto -scale-x-100" />
        <img
          src={Talking}
          alt="talking"
          className="w-44 h-44 opacity-60 rotate-12"
        />
      </div>
      <DialogBox />
    </section>
  );
}
