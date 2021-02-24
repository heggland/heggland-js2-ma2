export default function load(list) {
  const currentList = localStorage.getItem(list);

  if (!currentList) {
    return [];
  }

  return JSON.parse(currentList);
}
