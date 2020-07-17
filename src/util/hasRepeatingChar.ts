export default function hasRepeatingChar(string: string, char: string) {
  //if has only repeating chars the length is less than 1
  return string.length - 1 === string.split(char).length;
}
