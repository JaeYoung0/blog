import { useEffect, useState } from "react";

function Test() {
  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCnt(cnt + 1);
    }, 1500);
  }, []);

  useEffect(() => {
    setInterval(() => {
      console.log("@@cnt", cnt);
    }, 1500);
  }, []);

  return (
    <div>
      <button onClick={() => setCnt(cnt + 1)}>UP</button>
    </div>
  );
}

export default Test;
