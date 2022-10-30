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
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
