import React, { useEffect, useState } from "react";

const RSP_ARR = ["가위", "바위", "보"];

export default function RSPGame() {
  const [comRsp, setComRsp] = useState("");
  const [myRsp, setMyRsp] = useState("");
  const [winner, setWinner] = useState("");
  console.log("@@comRsp", comRsp);
  console.log("@@myRsp", myRsp);
  console.log("@@winner", winner);

  const init = () => {
    const num = Math.floor(Math.random() * 3); //0, 1, 2
    setComRsp(RSP_ARR[num]);
    setMyRsp("");
    setWinner("");
  };

  useEffect(() => {
    init();
  }, []);

  const pickWinner = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const myRsp = (e.target as HTMLElement).innerText;
    const myRspNum = RSP_ARR.indexOf((e.target as HTMLElement).innerText);

    setMyRsp((e.target as HTMLElement).innerText);

    const comRspNum = RSP_ARR.indexOf(comRsp);

    console.log("myRspNum", RSP_ARR.indexOf(myRsp));
    console.log("comRspNum", RSP_ARR.indexOf(comRsp));

    if (myRspNum - comRspNum === 1) return setWinner("내가 이김");

    if (myRspNum === 0 && myRspNum - comRspNum === -2)
      return setWinner("내가 이김");

    if (myRspNum - comRspNum === 0) return setWinner("비김");

    setWinner("내가짐");
  };

  return (
    <>
      <h1>컴퓨터::::{comRsp}</h1>
      <h1>나::::{myRsp}</h1>
      <h1>승자는::::{winner}</h1>
      <button onClick={pickWinner}>가위</button>
      <button onClick={pickWinner}>바위</button>
      <button onClick={pickWinner}>보</button>
      <button
        onClick={() => {
          // setComRsp("");

          init();
        }}
      >
        초기화
      </button>
    </>
  );
}
