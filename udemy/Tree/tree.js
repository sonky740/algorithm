// 이진 트리
// 이진 트리는 노드가 최대 두 개의 자식 노드를 가질 수 있는 트리를 말한다.
// 이진 트리는 노드의 왼쪽에는 작은 값, 오른쪽에는 큰 값을 가지는 트리를 말한다.
// 이진 탐색 트리는 이진 트리의 일종으로, 왼쪽 자식 노드는 부모 노드보다 작고, 오른쪽 자식 노드는 부모 노드보다 큰 값을 가지는 트리를 말한다.
// 이진 탐색 트리는 탐색에 특화된 자료구조이다.
// 이진 탐색 트리는 탐색, 삽입, 삭제에 O(logN)의 시간 복잡도를 가진다.

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value === currentNode.value) return undefined;
        if (value < currentNode.value) {
          // Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    let currentNode = this.root;
    let found = false;
    while (currentNode && !found) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return currentNode;
  }
  contains(value) {
    if (this.root === null) return false;
    let currentNode = this.root;
    let found = false;
    while (currentNode && !found) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  }
  // BFS: 너비 우선 탐색
  // BFS는 루트 노드에서 시작해서 인접한 노드를 먼저 탐색하는 방법이다.
  // BFS는 큐 자료구조를 사용한다.
  BFS() {
    let node = this.root;
    let data = [];
    let queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  // DFS: 깊이 우선 탐색
  // DFS는 루트 노드에서 시작해서 자식 노드를 먼저 탐색하는 방법이다.
  // DFS는 스택 자료구조를 사용한다.
  // DFS는 세 가지 방법이 있다.
  // 1. 전위 순회: 루트 노드 -> 왼쪽 자식 노드 -> 오른쪽 자식 노드
  DFSPreOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
  // 2. 후위 순회: 왼쪽 자식 노드 -> 오른쪽 자식 노드 -> 루트 노드
  DFSPostOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(current);
    return data;
  }
  // 3. 중위 순회: 왼쪽 자식 노드 -> 루트 노드 -> 오른쪽 자식 노드
  DFSInOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
}

//   10
//  6 15
// 3 8 20

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
