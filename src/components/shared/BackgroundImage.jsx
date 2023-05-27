const BackgroundImage = () => {
  return (
    <div className="h-[60vh] sm:h-[70vh] md:h-auto md:w-[100vw]">
      <img
        className="w-full h-full object-cover"
        src="/assets/login.jpg"
        alt="Background Img"
      />
    </div>
  );
};
export default BackgroundImage;
