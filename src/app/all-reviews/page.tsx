import { getCookieOfToken } from "@/utils/cookieToken";

const Page = async () => {
  const token = await getCookieOfToken();
  console.log("token: ", token ? "token ok" : "undefined");
  return (
    <div>
      <h1>Welcome to the All Reviews Page merge Test</h1>
      <p>{token}</p>
    </div>
  );
};

export default Page;
