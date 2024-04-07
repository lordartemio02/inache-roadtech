import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProgressBar = () => {
  const [count, setCount] = useState(0);
  const nav = useNavigate();

  useEffect(() => {
    if (count === 100) nav(-1);
    const id = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 100);

    return () => clearInterval(id);
  }, [count]);

  return (
    <div className="w-full rounded-10 bg-natural-300 h-[1px]">
      <div
        className={`bg-white rounded-10 h-[1px]`}
        style={{ width: count + "%" }}></div>
    </div>
  );
};

export default ProgressBar;
