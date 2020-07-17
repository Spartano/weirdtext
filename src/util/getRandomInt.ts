export default function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}
