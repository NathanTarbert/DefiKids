import dynamic from "next/dynamic";
import UnderlineText from "../components/underline_text";
import { useStore } from "../services/store";

const Login = dynamic(() => import("../components/login"), {
  ssr: false,
});

export default function Home() {
  const {
    state: { userType },
  } = useStore();
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <h1 className="text-hero text-blue-dark text-center mb-[8vh]">
        Teach your kids
        <br /> to use <span className="text-orange">crypto</span>,
        <br />
        <UnderlineText className="text-blue-oil" color="bg-orange">
          safely
        </UnderlineText>{" "}
        and
        <br />
        <UnderlineText className="text-blue-oil" color="bg-blue-dark">
          confidently
        </UnderlineText>
      </h1>
      {!userType ? <Login /> : <p>Parent or Child</p>}
    </div>
  );
}
