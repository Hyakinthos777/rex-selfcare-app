export function getMemory() {
  return JSON.parse(localStorage.getItem("rex_memory")) || {
    moodHistory: [],
    goals: [],
    notes: [],
    userName: null
  };
}

export function saveMemory(memory) {
  localStorage.setItem("rex_memory", JSON.stringify(memory));
}

export function addMood(mood) {
  const memory = getMemory();
  memory.moodHistory.push({ mood, date: new Date().toISOString() });
  saveMemory(memory);
}
