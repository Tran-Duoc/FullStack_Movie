import { generateImagePath } from "../../utils/image.util";
import Heart from "../Icon/Heart/Heart";
import Play from "../Icon/Play/Play";
import Title from "../Title/Title";

interface Props {
  name: string;
  poster: string;
}

const MovieCart: React.FC<Props> = ({ name, poster }) => {
  return (
    <section className="w-full  relative hover:z-10 md:hover:scale-125 hover:scale-100 duration-200 overflow-hidden group ">
      <img src={generateImagePath(poster)} alt="" className="w-full h-full" />
      <div className="absolute  duration-200  py-2 bg-slate-900/50 left-0 right-0 -bottom-20 group-hover:bottom-0">
        <div className="flex flex-col gap-1 px-3">
          <div>
            <Title
              content={name}
              className="text-xl font-semibold text-slate-50"
            />
          </div>
          <div className="flex flex-row  gap-3 items-center">
            <div className="lg:tooltip" data-tip="watch">
              <div className="bg-cyan-700 hover:bg-cyan-500 duration-150 text-white block  p-2 rounded-full uppercase  font-semibold ">
                <Play />
              </div>
            </div>
            <div className="lg:tooltip" data-tip="add to favorite">
              <div className="bg-red-700 hover:bg-red-500 duration-150 text-white block  p-2 rounded-full uppercase  font-semibold ">
                <Heart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieCart;
