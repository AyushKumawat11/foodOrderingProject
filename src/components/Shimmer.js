const Shimmer = () => {
  return (
    <div className="flex flex-wrap m-2">
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="bg-gray-200 h-96 w-56 shadow-lg ml-2 mt-2"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
