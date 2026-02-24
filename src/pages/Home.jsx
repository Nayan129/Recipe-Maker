const Home = () => {

  return (
    <div className="border rounded-lg h-115">
      <div className="search flex justify-center mt-5 ">
        <input
          className=" max-w-130 md:min-w-110 lg:min-w-140 flex justify-center py-2 px-5 rounded-3xl outline-none bg-white/5 border border-white/10"
          type="text"
          placeholder="search recipes..."
        />
      </div>
    </div>
  );
};

export default Home;
