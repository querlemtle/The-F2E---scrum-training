import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-y-3">
      <h1 className="text-white text-5xl font-huninn">糟糕！</h1>
      <h2 className="text-yellow text-4xl font-huninn">抱歉，發生未知錯誤。</h2>
      <p className="text-white text-3xl">{error.statusText || error.message}</p>
    </div>
  );
}
