const NotAvailable = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <h1 className="text-white font-bold text-4xl rounded-3xl bg-gray-800 px-14 py-2 pb-3">
        No Movies available for selected genre
      </h1>
    </div>
  );
};
export default NotAvailable;
