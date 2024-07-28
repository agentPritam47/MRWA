import loader from "/loader1.gif";

const Loader = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-black">
      <div className="h-[60vh] w-[60vh]  rounded-full overflow-hidden">
        <img className="h-full w-full object-cover" src={loader} alt="" />
      </div>
    </div>
  );
};

export default Loader;
