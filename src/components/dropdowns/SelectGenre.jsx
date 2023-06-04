import { useDispatch } from "react-redux";
import { fetchDataByGenre } from "../../store";

const SelectGenre = ({ genres, type }) => {
  const dispatch = useDispatch();

  return (
    <select
      onChange={(e) => {
        dispatch(fetchDataByGenre({ genre: e.target.value, type }));
      }}
      className="bg-gray-50 border border-gray-300 text-gray-900 w-52 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      {genres.map((genre) => (
        <option value={genre.id} key={genre.id}>
          {genre.name}
        </option>
      ))}
    </select>
  );
};
export default SelectGenre;
