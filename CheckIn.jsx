import { useState } from "react";
import { save } from "../lib/storage";
import { addMood } from "../lib/memory";

export default function CheckIn() {
  const [mood, setMood] = useState(3);

  const handleSave = () => {
    save("checkin", { mood });
    addMood(mood);
    alert("Saved!");
  };

  return (
    <div>
      <h2>Check-In</h2>
      <input type="range" min="1" max="5" value={mood} onChange={e => setMood(e.target.value)} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
