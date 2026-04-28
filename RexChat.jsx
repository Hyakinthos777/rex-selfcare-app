import { useState } from "react";
import { getRexResponse } from "../lib/rex";

export default function RexChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const send = () => {
    const reply = getRexResponse(input, messages);
    setMessages([...messages, { role: "user", text: input }, { role: "rex", text: reply }]);
    setInput("");
  };

  return (
    <div>
      <h2>Rex Chat</h2>
      {messages.map((m, i) => <p key={i}>{m.text}</p>)}
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={send}>Send</button>
    </div>
  );
}
