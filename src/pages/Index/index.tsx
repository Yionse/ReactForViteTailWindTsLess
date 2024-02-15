import { Button } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  return (
    <>
      <div>公共部分</div>
      <Outlet></Outlet>
      <Button onClick={() => navigate("/home")}>去往Home</Button>
    </>
  );
}
