class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const node = new Node(val);

		if (!this.head) {
			this.head = node;
			this.tail = this.head;
		} else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
		}
        this.length++;
        return this;
	}

	pop() {
		if(!this.head) return undefined;
		const oldTail = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = removed.prev;
			this.tail.next = null;
			oldTail.prev = null;
		}

		this.length--;
		return removed;
	}

	shift() {
		if(!this.head) return undefined;
		const oldHead = this.head;
		if(this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}

		this.length--;
		return oldHead;
	}

	unshift(val) {
		const newNode = new Node(val);
		if(!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;
		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length) return null;
		let tmp, count;
		if (index <= this.length / 2) {
			count = 0;
			tmp = this.head;
			while (count !== index) {
				tmp = tmp.next;
				count++;
			}
		} else {
			count = this.length - 1;
			tmp = this.tail;
			while (count !== index) {
				tmp = tmp.prev;
				count--;
			}
		}

		return tmp;
	}

	set(index, val) {
		let foundNode = this.get(index);
		if (foundNode) {
			foundNode.val = val;
			return true;
		}
		return false;
	}

	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (!index) return !!this.unshift(val);
		if (index === this.length) return !!this.push(val);
		const newNode = new Node(val);
		let foundNode = this.get(index);
		let prevNode = foundNode.prev;
		prevNode.next = newNode, newNode.next = foundNode;
		newNode.prev = prevNode, foundNode.prev = newNode;
		this.length++;
		return true;
	}

	remove(index) {
		if (index < 0 || index > this.length) return undefined;
		if (!index) return this.shift();
		if (index === this.length - 1) return this.pop();
		let removedNode = this.get(index),
			prevNode = removedNode.prev,
			nextNode = removedNode.next;
		nextNode.prev = prevNode;
		prevNode.next = nextNode;
		removedNode.next = null;
		removedNode.prev = null;
		this.length--;
		return removedNode;
	}
}