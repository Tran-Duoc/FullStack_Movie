import { Movie } from "../../types/movie.type";
import { generateImagePath } from "../../utils/image.util";
import Title from "../Title/Title";
import Heart from "../Icon/Heart/Heart";
import Button from "../Button/Button";
import ProcessCircularBar from "../ProcessCircularBar/ProcessCirculBar";
import { convertDateFormat } from "../../validations/date";

type Props = {
  data?: Movie;
};

const Hero = ({ data }: Props) => {
  return (
    <section>
      <div className="flex  items-center md:items-start md:pt-10 px-5  min-h-[50vh] lg:min-h-screen justify-center lg:justify-start">
        <div className="flex flex-col md:flex-row gap-10 mt-20">
          <div>
            <img
              src={generateImagePath(data?.poster_path as string)}
              alt=""
              className="w-full lg:w-96"
            />
          </div>
          <div className="flex flex-col max-w-3xl w-full gap-3">
            <Title
              content={data?.original_title as string}
              className="text-slate-900 dark:text-slate-50 text-xl md:text-2xl lg:text-3xl  font-bold "
            />
            <div className="flex flex-row gap-5 mt-2 items-center">
              <ProcessCircularBar />
              <span className="text-xl bg-cyan-600 px-5 text-center rounded-full dark:text-slate-900 text-slate-50 font-bold">
                {data?.original_language}
              </span>
            </div>

            <span className="dark:text-slate-50  text-slate-900  text-sm md:text-base text-justify mt-2 ">
              {data?.overview}
            </span>

            <div className="flex items-center gap-10">
              <Heart />
              <Button
                content="Watch Now"
                className="bg-cyan-600 hover:bg-cyan-500 duration-100 px-3 py-2 rounded-xl font-semibold text-slate-50 dark:text-slate-900"
              />
            </div>
            <div className="flex flex-row gap-5 mt-2 items-center">
              <span className=" text-slate-900 dark:text-slate-50 text-xl underline font-semibold ">
                Release
              </span>
              <span className="text-xl bg-cyan-600 px-5 text-center rounded-full dark:text-slate-900 text-slate-50 font-semibold">
                {convertDateFormat(data?.release_date as string)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
