import { RootState } from "../store";
import { useSelector } from "react-redux";

const Banner = () => {
  const dark = useSelector((state: RootState) => state.toggle.value);
  return (
    <section className={`bg-gray-50 dark:bg-black`}>
      <div className="mx-auto max-w-screen-xl px-4 py-24 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1
            className={`${
              dark
                ? "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl text-transparent sm:text-5xl"
                : "text-3xl  sm:text-5xl"
            } font-extrabold`}
          >
            Understand User Flow.
            <strong
              className={`${
                dark
                  ? "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl text-transparent sm:text-5xl"
                  : "text-red-700"
              } font-extrabold sm:block`}
            >
              Increase Conversion.
            </strong>
          </h1>

          <p className={`text-black dark:text-white mt-4 sm:text-xl/relaxed`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              className={`dark:bg-white dark:text-black bg-red-600 hover:bg-red-700 text-white block w-full rounded  px-12 py-3 text-sm font-medium shadow  sm:w-auto`}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
