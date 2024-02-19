// 총 N개의 디렉토리가 다음과 같이 트리(tree) 형태의 간단한 구조를 이루고 있습니다.
// - 모든 디렉토리에는 1부터 N까지 번호가 붙어있습니다.
// - 모든 디렉토리에는 이름이 붙어있습니다.
// - 최상위 디렉토리는 1개만 존재하며, 최상위 디렉토리의 번호는 1번입니다.
// - 모든 디렉토리는 0개 이상의 하위 디렉토리를 가질 수 있습니다.
// - 최상위 디렉토리는 같은 이름이 하위 디렉토리를 2개 이상 가질 수 없습니다.
// - 모든 디렉토리는 같은 이름의 하위 디렉토리를 2개 이상 가질 수 없습니다.
// root -- abcd -- etc
//      |       |-- hello
//      |
//      |-- cs  -- solution
//      |
//      |-- hello
// 위 그림은 총 7개의 디렉토리를 표현하고 있습니다. 1번 디렉토리는 최상위 디렉토리로, "root"라는 이름이 붙어있습니다. "root" 디렉토리의 하위 디렉토리는 3개가 있으며, "abcd", "cs", "hello"라는 이름이 붙어있습니다. "root" 디렉토리 밑의 "abcd" 디렉토리에는 2개의 하위 디렉토리가 있으며 각각 "etc", "hello"라는 이름이 붙어있습니다. "root" 디렉토리 밑의 "cs" 디렉토리에는 1개의 하위 디렉토리가 있으며 "solution" 이라는 이름이 붙어 있습니다. 마지막으로 "root" 디렉토리 밑의 "hello" 디렉토리는 하위 디렉토리를 가지고 있지 않습니다. 각 디렉토리의 위치는 절대 경로(path)를 사용해 표현합니다. 절대 경로는 "root" 디렉토리에서 시작하여 현재 디렉토리까지 오기 위한 디렉토리들의 /(슬래쉬)를 이용하여 순서대로 이어붙여 만듭니다. 위 예시에서는 다음과 같이 총 7가지의 경로를 만들 수 있습니다.
// 1. "root"
// 2. "root/abcd"
// 3. "root/cs"
// 4. "root/hello"
// 5. "root/abcd/etc"
// 6. "root/abcd/hello"
// 7. "root/cs/solution"
// 이때 만들어진 경로 중 가장 긴 경로(가장 많은 무자를 사용한 경로)는 "root/cs/solution"이며, 총 16개의 문자(큰따옴표 제외)를 사용했습니다. 전체 디렉토리의 개수 N, 디렉토리의 관계를 나타내는 배열 relation, 각 디렉토리의 이름이 순서대로 들어있는 배열 dirname이 매개변수로 주어질 때, 가장 긴 경로(가장 많은 문자를 사용한 경로)의 길이를 return 하도록 solution 함수를 완성해주세요.
// - 디렉토리의 개수 N은 2 이상 100,000 이하의 자연수입니다.
// - relation은 디렉토리의 관계를 담고 있는 배열이며 길이는 N - 1 입니다.
// - relation의 각 원소는 디렉토리의 관계를 나타내는 길이가 2인 배열이며, 순서대로 [상위 디렉토리 번호, 하위 디렉토리 번호]를 나타냅니다.
// - 예를 들어 디렉토리 관계가 [2, 5]로 주어진다면 2번 디렉토리의 하위 디렉토리에 5번 디렉토리가 있다는 의미입니다.
// - 디렉토리의 관계는 한 번씩만 들어있습니다.
// - 항상 올바른 디렉토리 관계만 입력으로 주어집니다.
// - dirname은 1번 디렉토리부터 N번 디렉토리까지 각 디렉토리의 이름을 순서대로 담고 있는 배열입니다.
// - 한 디렉토리가 같은 이름의 하위 디렉토리를 두 개 이상 가지는 경우는 주어지지 않습니다.
// - 모든 디렉토리 이름은 알파벳 소문자로만 이루어져 있으며, 길이는 1 이상 255 이하입니다.

function solution(N, relation, dirname) {
  const parentMap = {};
  for (let i = 0; i < relation.length; i++) {
    parentMap[relation[i][1]] = relation[i][0];
  }

  let maxLength = 0;

  for (let i = 2; i <= N; i++) {
    let length = dirname[i - 1].length;
    let current = i;

    for (let j = 0; j < N; j++) {
      if (!parentMap[current]) break;
      current = parentMap[current];
      length += dirname[current - 1].length + 1;
    }

    maxLength = maxLength > length ? maxLength : length;
  }

  return maxLength;
}

console.log(
  solution(
    7,
    [
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 5],
      [2, 6],
      [3, 7],
    ],
    ['root', 'abcd', 'cs', 'hello', 'etc', 'hello', 'solution']
  )
); // 16
console.log(
  solution(
    7,
    [
      [1, 2],
      [1, 6],
      [2, 3],
      [3, 4],
      [4, 5],
      [6, 7],
    ],
    ['root', 'a', 'b', 'c', 'd', 'efghij', 'k']
  )
); // 13
