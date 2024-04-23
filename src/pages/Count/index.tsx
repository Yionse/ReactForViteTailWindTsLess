import { increment, decrement } from "@/stores/count";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Count() {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div>Count Page</div>
      <div>{count}</div>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <Button onClick={() => dispatch(decrement())}>Increment</Button>
      <Button onClick={() => navigate("/todo")}>go todo</Button>
    </>
  );
}
