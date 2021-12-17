import { useSelector } from "react-redux";
import styled from "styled-components";

const App = () => {
  const counter = useSelector((state) => state.counter.counter);

  return (
    <Wrapper>
      <h1>{counter}</h1>
      <div>
        <button>+ 1</button>
        <button>- 1</button>
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
