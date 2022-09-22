// 2번째로 자주 등장하는 알파벳
function solution(s) {
  let answer = '';
  let max = 0;

  // 오브젝트로 분류
  const alpObj = {};
  // for ... of는 value 값
  for (let alp of s) {
    if (!alpObj[alp]) {
      alpObj[alp] = 1;
    } else {
      alpObj[alp]++;
    }
  }

  // for (let i = 0; i < s.length; i++) {
  //   if (!alpObj[s[i]]) {
  //     alpObj[s[i]] = 1;
  //   } else {
  //     alpObj[s[i]]++;
  //   }
  // }

  // 최대값 산출
  // for ... in 은 key값
  for (let alp in alpObj) {
    if (alpObj[alp] > max) {
      max = alpObj[alp];
    }
  }

  // filter를 쓰기위해 배열화
  const alpObjArr = Object.values(alpObj); // 객체의 value값들만 뽑아서 배열로 반환
  // max = Math.max(...alpObjArr); // [fix] 최대값 산출
  // 최대값을 제외한 값을 가진 배열
  const secondMax = alpObjArr.filter((word) => word < max);
  if (secondMax.length < 2) return (answer = '-');

  // 2번째로 높은 값 산출
  const set = new Set(secondMax); // 중복된 값을 하나로 가지기 위해서 Set 사용
  const second = Math.max(...set);
  // const second = Math.max(...secondMax); // [fix] Set을 쓸 필요가 없었음.

  let answerArr = [];
  for (let alp in alpObj) {
    // 2번째로 자주 등장하는 값 산출
    if (alpObj[alp] === second) {
      answerArr.push(alp);
    }
  }

  answer = answerArr.sort().join('');
  return answer;
}

console.log(solution('ccdasbddcscas'));