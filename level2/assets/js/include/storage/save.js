import { listKey } from "../settings.js";

export default function save(value) {
  if (value.length >= 2) {
  }
  localStorage.setItem(listKey, JSON.stringify(value));
}
