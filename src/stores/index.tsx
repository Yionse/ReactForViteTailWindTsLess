import React from "react";
import { Outlet } from "react-router-dom";

export default function Index() {
  return (
    <>
      <div>react模板</div>
      <Outlet />
    </>
  );
}
