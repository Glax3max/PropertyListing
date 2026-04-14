export default function Hero({ onSearch }: any) {
  return (
    <div className="relative h-[60vh] flex items-center justify-center text-white">
      <img
        src="https://source.unsplash.com/1600x900/?luxury-house"
        className="absolute w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find Your Dream Home
        </h1>

        <input
          type="text"
          placeholder="Search by city..."
          className="p-3 rounded-xl text-black w-[300px] md:w-[500px]"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
}