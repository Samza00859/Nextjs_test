import Link from "next/link";
import Counter from "./components/counter";
import Chat from "./page/pages/chat";

export default function Home() {
  return (
    <div>
      Home
      <Link href={"/login"}>login</Link>
      <Counter/>
      <Chat/>
    </div>
    
  );
}
 