import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { increment, decrement, increase } from "./store/counterSlice";

const App = () => {
  // Read counter value from store
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  // Functions
  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  const increaseHandler = () => {
    const amount = document.querySelector("#amount");

    dispatch(increase(Number(amount.value)));
    amount.value = "";
  };

  return (
    <Wrapper>
      <h1>{counter}</h1>
      <div>
        <button onClick={incrementHandler}>+ 1</button>
        <button onClick={decrementHandler}>- 1</button>
      </div>
      <div>
        <label htmlFor="amount">Enter amount:</label>
        <input type="text" name="amount" id="amount" />
        <button onClick={increaseHandler}>+ Amount</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 3rem;
`;

export default App;
