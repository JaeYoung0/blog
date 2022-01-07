import styled from "@emotion/styled";
import { useEffect, useState, useRef } from "react";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background: #108dc7; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #ef8e38,
    #108dc7
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #ef8e38,
    #108dc7
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

function useInterval(callback: () => void, delay: number, isRunning: boolean) {
  const savedCallback = useRef(callback); //savedCallback.current에 callback함수가 담긴 객체를 반환
  console.log("@@savedCallback", savedCallback);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (!isRunning) return;
    const trigger = () => savedCallback.current();

    const intervalId = setInterval(trigger, delay);
    console.log("@@intervalId", intervalId);

    return () => clearInterval(intervalId);
  }, [delay, isRunning]);
}

function IntervalGame() {
  const [count, setCount] = useState(0);
  // const [delay, setDelay] = useState(1000);
  // const [isRunning, setIsRunning] = useState(false);
  const [money, setMoney] = useState(0);
  const [totalMoney, setTotalMoney] = useState(0);
  const [isMoneyRunning, setIsMoneyRunning] = useState(false);

  //   try1.
  //   useEffect 2번째 인자가 없는 경우 이펙트는 매 랜더 이후 재적용된다.
  //   이는 API 구독할 때 유용하라고 있는것. setInterval같은 애들이 아니라!

  //   useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       setCount(count + 1);
  //     }, 10);
  //     console.log("@@intervalId", intervalId);

  //     return () => clearInterval(intervalId);
  //   });

  //   try2. would cause the interval to be reset on every change.
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCount(count + 1);
  //   }, 1000);
  //   console.log("@@intervalId", intervalId);

  //   return () => clearInterval(intervalId);
  // }, [count]);

  // try3. good
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);
  //   console.log("@@intervalId", intervalId);

  //   return () => clearInterval(intervalId);
  // }, [count]);

  //   try4. best

  // useInterval(
  //   () => {
  //     console.log(`@@useInterval 실행 count: ${count}`);

  //     setCount(count + 1);
  //   },
  //   delay,
  //   isRunning
  // );

  useInterval(
    () => {
      const moneyPerSec = (money * 10000) / (365 * 24 * 60 * 60);
      setCount(count + 1);
      setTotalMoney(totalMoney + moneyPerSec);
      // setCount(count + moneyPerSec);
    },
    1000,
    isMoneyRunning
  );

  return (
    <Wrapper>
      <h1>IntervalGame</h1>
      {/* <h1>count:{count}</h1>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "stop" : "start"}
      </button>
      <input
        type="number"
        value={delay}
        onChange={(e) => {
          setDelay(Number(e.currentTarget.value));
        }}
      ></input> */}
      <h1 style={{ margin: "3rem 0 2rem 0" }}>연봉을 입력해보세요 (만원)</h1>
      <input
        // type="number"
        placeholder="연봉을 입력해보세요 (만원)"
        // value={money}
        onChange={(e) => {
          setMoney(Number(e.currentTarget.value));
        }}
      ></input>
      <h3 style={{ margin: "2rem 0 1rem 0" }}>
        당신은 1초에 얼마나 벌고 있을까요?
      </h3>
      <button onClick={() => setIsMoneyRunning(!isMoneyRunning)}>
        {isMoneyRunning ? "중지할래요" : "계산하기"}
      </button>{" "}
      <h1>⬇️</h1>
      <h1>
        {`당신은 ${count}초에 ${totalMoney.toFixed(1)}원을 벌고 있습니다.`}
      </h1>
    </Wrapper>
  );
}

export default IntervalGame;
