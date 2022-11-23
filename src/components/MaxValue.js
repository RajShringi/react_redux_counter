import { useDispatch, useSelector } from "react-redux";
import { updateMaxValue } from "../store/actions";
function MaxValue() {
  const max = useSelector((state) => state.max);
  const dispatch = useDispatch();

  const handleMaxValue = (value) => {
    dispatch(updateMaxValue(value));
  };

  return (
    <div className="border-2 border-gray-100 p-2 rounded-lg">
      <h2 className="text-gray-100 text-2xl">Max Value</h2>
      <div className="flex items-center justify-center space-x-8 my-4">
        <button
          className={`${max === 15 ? "btn_active" : "btn"}`}
          onClick={() => handleMaxValue(15)}
        >
          15
        </button>
        <button
          className={`${max === 100 ? "btn_active" : "btn"}`}
          onClick={() => handleMaxValue(100)}
        >
          100
        </button>
        <button
          className={`${max === 200 ? "btn_active" : "btn"}`}
          onClick={() => handleMaxValue(200)}
        >
          200
        </button>
      </div>
    </div>
  );
}
export default MaxValue;
