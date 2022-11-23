import { useSelector, useDispatch } from "react-redux";
import { updateStep } from "../store/actions";

function Steps() {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.step);

  const handleStep = (step) => {
    dispatch(updateStep(step));
  };

  return (
    <div className="border-2 border-gray-100 p-2 rounded-lg">
      <h2 className="text-gray-100 text-2xl">Steps</h2>
      <div className="flex items-center justify-center space-x-8 my-4">
        <button
          className={`${step === 5 ? "btn_active" : "btn"}`}
          onClick={() => handleStep(5)}
        >
          5
        </button>
        <button
          className={`${step === 10 ? "btn_active" : "btn"}`}
          onClick={() => handleStep(10)}
        >
          10
        </button>
        <button
          className={`${step === 15 ? "btn_active" : "btn"}`}
          onClick={() => handleStep(15)}
        >
          15
        </button>
      </div>
    </div>
  );
}
export default Steps;
