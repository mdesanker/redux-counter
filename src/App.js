import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { counterActions, increment } from "./store/counterSlice";

const App = () => {
  // Read counter value from store
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  // Functions
  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <Wrapper>
      <h1>{counter}</h1>
      <div>
        <button onClick={incrementHandler}>+ 1</button>
        <button onClick={decrementHandler}>- 1</button>
      </div>
      <form action="">
        <label htmlFor="amount">Enter amount:</label>
        <input type="text" name="amount" id="amount" />
        <button>+ Amount</button>
      </form>
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
