import { RolePo } from "../../assets/images";
import ProductBacklog from "../../components/ProductBacklog/ProductBacklog";

export default function Task() {
  return (
    <section className="relative h-screen overflow-hidden grid grid-rows-task-layout">
      <h3 className="text-white text-3xl font-huninn text-center mt-20">
        請把需求放到產品待辦清單，並調整待辦的優先度順序。
      </h3>
      <div>
        <img
          src={RolePo}
          alt="role-po"
          className="w-1/3 absolute right-11 top-15"
        />
        <div className="w-auto h-full bg-task-pad bg-cover bg-center relative grid justify-center items-center">
          <ProductBacklog />
        </div>
      </div>
    </section>
  );
}
