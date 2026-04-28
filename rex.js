import { getMemory, saveMemory } from "./memory";

export function getRexResponse(input, history = []) {
  const memory = getMemory();
  const text = input.toLowerCase();

  if (text.includes("my name is")) {
    memory.userName = input.split("my name is")[1].trim();
    saveMemory(memory);
    return `Nice to meet you, ${memory.userName} 💛`;
  }

  if (text.includes("goal")) {
    memory.goals.push({ text: input, progress: 0 });
    saveMemory(memory);
    return "I love that goal 💛 what’s the smallest first step?";
  }

  return "I’m here with you 💛 tell me more.";
}
