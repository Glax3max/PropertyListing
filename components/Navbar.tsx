export default function Navbar() {
  return (
    <div className="fixed top-4 left-0 w-full flex justify-center z-50">
      <nav
        className="
          w-[97%] max-w-[97%]
          px-14 py-6
          flex items-center justify-between

          bg-white/10
          backdrop-blur-lg

          border border-white/20
          rounded-2xl

          shadow-md
          transition-all duration-300
        "
      >
        {/* Logo */}
        <h1 className="text-lg font-semibold text-black">
           EstatePro
        </h1>
      </nav>
    </div>
  );
}