

const Logo = ({ className = "", textSize = "text-2xl sm:text-3xl" }) => {
  return (
    <div className={`w-full pt-4 inline-flex items-center gap-2 ${className}`}>
     
      {/* Brand Name */}
      <h1
        className={`logo ${textSize} font-bold tracking-wide text-violet-800`}
      >
        NoteNest
      </h1>
    </div>
  );
};

export default Logo;
