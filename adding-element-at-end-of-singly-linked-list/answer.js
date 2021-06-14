class ListNode {
  constructor (element, next = null){
    this.element = element;
    this.next = next;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
    this.length = 0;
  }

	// write your code below
  insertNodeAtEnd = (element) => {
		let currentNode = this.head;
    if(currentNode) {
      while(currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = new ListNode(element);
    }
    else {
      this.head = new ListNode(element);
    }
    this.length++;
    console.log(this.head);
    return this.head;
	};
  // code ends here

  check = () => {
    let current = head;
    const sol = [];
    while (current) {
      sol.push(current.element);
      current = current.next;
    }
    return sol.join("");
  };
}

const element = 3;
const element2 = 2;
let big = new LinkedList(element);

document.getElementById('ans').textContent = big.insertNodeAtEnd(element);document.getElementById('ans').textContent = big.insertNodeAtEnd(element2);