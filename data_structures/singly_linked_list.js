class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;   
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return undefined;
        else {
            let tmp = this.head;
            let newTail = tmp.next;
            while (!tmp.next) {
                newTail = tmp;
                tmp = tmp.next;
            }
            this.tail = newTail;
            this.tail.next = null;
            this.length--;
            if (!this.length) {
                this.head = null;
                this.tail = null;
            }
            return tmp;
        }
    }

    shift() {
        if(!this.head) return undefined;
        else {
            let tmp = this.head;
            this.head = tmp.next;
            this.length--;
            if(!this.length) {
                this.tail = null;
            }
            return tmp;
        }
    }

    unshift(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    set(index, val) {
        let foundNode = get(index);
        if (!foundNode) return false;
        foundNode.val = val;
        return true;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        else if (index === this.length) return !!this.push(val);
        else if (index === 0) return !!this.unshift(val);
        const newNode = new Node(val),
            nodeBefore = this.get(index - 1),
            nodeAfter = nodeBefore.next;
        nodeBefore.next = newNode;
        newNode.next = nodeAfter;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index > this.length) return undefined;
        if (index === length - 1) this.pop();
        if (index === 0) this.shift();
        let prevNode = this.get(index - 1);
        const removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return removed;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;
        for(let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

let list = new SinglyLinkedList();