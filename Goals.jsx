import { useState } from "react";
import { getMemory, saveMemory } from "../lib/memory";

export default function Goals() {
  const [memory, setMemory] = useState(getMemory());
  const [input, setInput] = useState("");

  const addGoal = () => {
    const updated = { ...memory, goals: [...memory.goals, { text: input, progress: 0 }] };
    setMemory(updated);
    saveMemory(updated);
    setInput("");
  };

  return (
    <div>
      <h2>Goals</h2>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addGoal}>Add</button>
      {memory.goals.map((g, i) => <p key={i}>{g.text}</p>)}
    </div>
  );
}
