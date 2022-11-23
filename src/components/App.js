import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../store/actions";
import MaxValue from "./MaxValue";
import Steps from "./Steps";
function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <div className="max-w-lg mx-auto text-center text-gray-700">
        <h1 className="text-8xl font-bold text-gray-100">{count}</h1>

        {/* step and max_value cotainer */}
        <div className="flex items-center justify-center space-x-8 my-4">
          <Steps />
          <MaxValue />
        </div>

        {/* button container */}
        <div className="flex items-center justify-center space-x-8 my-4 border-2 border-gray-100 p-2 rounded-lg">
          <button className="btn" onClick={() => dispatch(increment())}>
            Increment
          </button>
          <button className="btn" onClick={() => dispatch(decrement())}>
            Decrement
          </button>
          <button className="btn" onClick={() => dispatch(reset())}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
export default App;
