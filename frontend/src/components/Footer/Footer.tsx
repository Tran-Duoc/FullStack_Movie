import Title from "../Title/Title";

const Footer = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-950 py-5">
      <div className="flex flex-col max-w-8xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="flex flex-col">
            <div>
              <Title
                content="DMovie"
                className="text-slate-900 dark:text-blue-500 text-xl font-semibold"
              />
            </div>
            <div className="mt-3 text-lg text-justify leading-2 text-black dark:text-slate-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              tempora suscipit nisi minima at sunt temporibus eveniet, in
              cumque, unde consequatur incidunt veritatis autem, minus
              praesentium. Pariatur ipsa aperiam sed?
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <Title
                content="Social Media"
                className="text-slate-900 dark:text-blue-500 text-xl font-semibold"
              />
            </div>
            <div className="mt-3 text-lg text-justify leading-2 text-black dark:text-slate-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              tempora suscipit nisi minima at sunt temporibus eveniet, in
              cumque, unde consequatur incidunt veritatis autem, minus
              praesentium. Pariatur ipsa aperiam sed?.
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4    p-10">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xl font-semibold text-cyan-700">
              DMovie create by <span className="text-blue-600">Tran Duoc</span>
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
