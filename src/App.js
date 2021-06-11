import { useState } from "react";
import { ChileArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  // inputからイベントを受け取り、値を取得
  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);
  // アロー関数はレンダリングのたびに生成される
  // そのため引数として渡すと毎回新しい関数が渡されると判断されるため、memo化しても再レンダリングされる
  const onClickClose = () => setOpen(false);

  return (
    <div className="App">
      <input values={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChileArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
