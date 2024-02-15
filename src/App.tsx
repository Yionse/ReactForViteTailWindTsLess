import { useQuery } from "react-query";
import { fetchUpdateUserInfo } from "./apis/test";
import { post } from "./apis";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "@/pages/Index";
import Home from "@/pages/Home";

export default function App() {
  const { mutateAsync } = fetchUpdateUserInfo();
  const { data } = useQuery(["test-data"], async () =>
    post<{ testType: number }>("/test")
  );
  console.log(data?.testType);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
