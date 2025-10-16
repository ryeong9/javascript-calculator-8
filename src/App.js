import { Console } from "@woowacourse/mission-utils";
import { parseInput } from "./utils/parser.js";

class App {
  async run() {
    let input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");
    if (input === "") {
      Console.print("결과 : 0");
      return;
    }
    const numbers = parseInput(input);
    Console.print(`분리된 값 : ${numbers}`);
  }
}

export default App;
