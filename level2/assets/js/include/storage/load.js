import { listKey } from "../settings.js";

export default function load() {
  const currentList = localStorage.getItem(listKey);

  if (!currentList) {
    return [];
  }

  return JSON.parse(currentList);
}
