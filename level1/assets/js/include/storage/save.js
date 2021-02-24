import { listKey } from "../settings.js";

export default function save(list, value) {
  localStorage.setItem(listKey, JSON.stringify(value));
}
