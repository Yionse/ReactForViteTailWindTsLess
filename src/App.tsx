import { useQuery } from "react-query";
import { fetchUpdateUserInfo } from "./apis/test";
import { post } from "./apis";

export default function App() {
  const { mutateAsync } = fetchUpdateUserInfo();
  const { data } = useQuery(["test-data"], async () =>
    post<{ testType: number }>("/test")
  );
  console.log(data?.testType);

  return (
    <div
      className="bg-slate-400"
      onClick={async () => {
        const data = await mutateAsync({ userId: "111" });
        console.log(data.isSuccess);
      }}
    >
      首页
    </div>
  );
}
