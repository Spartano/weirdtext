export default function shuffle(array: any[]) {
  const shuffled = array.sort(() => Math.random() - 0.5);
  return shuffled;
}
