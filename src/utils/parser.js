export function parseInput(input) {
  input = input.replace(/\\n/g, "\n"); // 터미널 테스트용

  const customDelimiterPattern = /^\/\/(.)\n(.*)$/;
  const match = input.match(customDelimiterPattern);

  if (match) {
    const [, delimiter, numbers] = match;
    return numbers.split(delimiter);
  }

  return input.split(/,|:/);
}
