// 단어 변환 lv.3
// https://school.programmers.co.kr/learn/courses/30/lessons/43163
// 두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.
// 1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
// 2. words에 있는 단어로만 변환할 수 있습니다.
// 예를 들어 begin이 "hit", target가 "cog", words가 ["hot","dot","dog","lot","log","cog"]라면 "hit" -> "hot" -> "dot" -> "dog" -> "cog"와 같이 4단계를 거쳐 변환할 수 있습니다. 두 개의 단어 begin, target과 단어의 집합 words가 매개변수로 주어질 때, 최소 몇 단계의 과정을 거쳐 begin을 target으로 변환할 수 있는지 return 하도록 solution 함수를 작성해주세요.
// 각 단어는 알파벳 소문자로만 이루어져 있습니다.
// 각 단어의 길이는 3 이상 10 이하이며 모든 단어의 길이는 같습니다.
// words에는 3개 이상 50개 이하의 단어가 있으며 중복되는 단어는 없습니다.
// begin과 target은 같지 않습니다.
// 변환할 수 없는 경우에는 0를 return 합니다.
function solution(begin, target, words) {
  let answer = 0;

  // words에 target이 없으면 0을 return
  if (!words.some((word) => word === target)) return 0;

  for (let i = 0; i < words.length; i++) {
    // begin과 words[i]가 몇 글자나 다른지 체크하여 test에 누적
    let test = 0;

    for (let j = 0; j < words[i].length; j++) {
      // begin과 words[i]의 글자가 다르면 test에 1을 더함
      if (begin[j] !== words[i][j]) {
        test++;
      }
    }

    if (test === 1) {
      answer++;
      begin = words[i];
    }

    // begin과 target이 몇 글자나 다른지 체크하여 answerTest에 누적
    let answerTest = 0;
    for (let k = 0; k < target.length; k++) {
      // begin과 target의 글자가 다르면 answerTest에 1을 더함
      if (begin[k] !== target[k]) {
        answerTest++;
      }
    }

    // begin과 target이 1글자만 다르면 answer에 1을 더하고 return
    if (answerTest === 1) {
      answer++;
      return answer;
    }
  }

  return answer;
}
solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']); // 4
solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']); // 0
