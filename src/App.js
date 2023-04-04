import "./styles.css";
import { useState } from "react";
import Start from "./Start";
import Increment from "./Increment";
import Decrement from "./Decrement";
export default function App() {
  const [data, setData] = useState(0);

  const incre = () => {
    if (data < 10) setData(data + 1);
  };
  const decre = () => {
    if (data > 0) setData(data - 1);
  };
  return (
    <div>
      <Start data={data} />
      <Increment incre={incre} />
      <Decrement decre={decre} />
    </div>
  );
}
