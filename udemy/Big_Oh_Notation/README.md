# Big Oh Notation (빅오 표기법)

## Object
객체는 거의 모든 것을 빠르게 처리하지만, 정렬되어 있지 않음.

## Array
배열은 정렬되어 있지만, 끝에 추가하고 제거하는 작업이 시작(혹은 중간)에 추가하고 제거하는 작업보다 훨씬 빠르다.
(시작에 넣거나 빼면 처음부터 끝까지 영향을 받으면서 인덱스를 전부 재정리 해야하기 때문.)
= push와 pop이 shift, unshift보다 빠름. (비어있는 배열일때는 제외)