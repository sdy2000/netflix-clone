const BackgroundImage = ({ imgUrl }) => {
  return (
    <div className="h-[60vh] sm:h-[70vh] md:h-[100vh]">
      <img
        className="w-full h-full object-cover"
        src={imgUrl}
        alt="Background Img"
      />
    </div>
  );
};
export default BackgroundImage;
