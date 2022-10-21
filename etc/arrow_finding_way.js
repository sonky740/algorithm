// >, < 빠져나올 수 있는 출발점의 갯수.
function solution(p) {
  let answer = 0;
  let firstTurning = 0;
  let lastTurning = 0;
  let firstString = '';
  let lastString = '';
  const turningPoint = '><';

  firstTurning = p.indexOf(turningPoint);
  lastTurning = p.lastIndexOf(turningPoint);
ㅣ
  if (firstTurning === -1) return (answer = p.length);

  firstString = p.substring(0, firstTurning);

  if (firstTurning === lastTurning) {
    lastString = p.substring(firstTurning + 1, p.length);
  } else {
    lastString = p.substring(lastTurning + 1, p.length);
  }

  answer = firstString.split('<').length - 1 + lastString.split('>').length - 1;
  return answer;
}