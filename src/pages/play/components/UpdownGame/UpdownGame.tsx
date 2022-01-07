import { useEffect, useState } from "react";

function UpdownGame() {
  const [comNum, setComNum] = useState<number | null>(null);
  const [myNum, setMyNum] = useState<number | null>(null);
  const [tryCount, setTryCount] = useState(3);
  console.log("@@myNum", myNum);

  const init = () => {
    const randomNum = Math.floor(Math.random() * 20);
    console.log("@@randomNum", randomNum);

    setComNum(randomNum);
    setMyNum(null);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <h1>UpdownGame</h1>
      <h2>컴퓨터가 떠올린 숫자를 맞춰보세요</h2>
      <h2>는{comNum}이다</h2>
      <h2>남은기회:{tryCount}</h2>
      <h2>숫자는 1부터 20까지 존재합니다.</h2>
      <form>
        <input
          style={{ width: "100px" }}
          type="number"
          //   value={1}
          min={1}
          max={20}
          required
          onChange={(e) => {
            console.log(e.currentTarget.value);
            setMyNum(Number(e.currentTarget.value));
          }}
        ></input>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (tryCount === 0) return alert("기회는 이제 없어");
            setTryCount(tryCount - 1);
            if (!myNum || !comNum) return;
            if (myNum === comNum) {
              init();
              return alert("정답입니다");
            }
            if (myNum > comNum) return alert("다운");
            return alert("업");
          }}
        >
          제출하기
        </button>
      </form>
    </>
  );
}

export default UpdownGame;
