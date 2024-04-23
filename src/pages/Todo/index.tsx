import { Button } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Todo() {
  const state = useSelector((state) => state.counter.value);
  const navigate = useNavigate();
  return (
    <>
      <div>Todo-{state}</div>
      <Button onClick={() => navigate("/count")}>go counter</Button>
    </>
  );
}
