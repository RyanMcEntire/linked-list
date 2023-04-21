class LinkedList {
    constructor() {
        this.LLHead = null;
        this.length = 0;
    }

    prepend(value) {
        let temp = null;
        if (this.LLHead != null) temp = this.LLHead;
        this.LLHead = new Node(value);
        this.LLHead.next = temp;
        this.length++;
    }

    append(value) {
        if (this.LLHead === null) this.prepend(value);
        else {
            let temp = this.LLHead;
            while (temp.next != null) temp = temp.next;
            temp.next = new Node(value);
            this.length++;
        }
    }

    size() {
        return this.length;
    }

    head() {
        return this.LLHead;
    }

    tail() {
        if (this.LLHead === null) return 'list is empty';
        let temp = this.LLHead;
        while (temp.next != null) temp = temp.next;
        return temp;
    }

    at(index) {
        let temp = this.LLHead;
        for (let i = 0; i < index; i++) temp = temp.next;
        if (temp === null) return 'List does not contain that index';
        return temp;
    }

    pop() {
        let temp = this.LLHead;
        let prev = temp;
        for (let i = 0; i < this.length - 1; i++) {
            prev = temp;
            temp = temp.next;
        }
        prev.next = temp.next;
        this.length--;
        return temp;
    }

    contains(value) {
        let temp = this.LLHead;
        let i = 0;
        while (temp.value != value) {
            temp = temp.next;
            i++;
            if (i >= this.length) {
                return false;
            }
        }
        return true;
    }

    find(value) {
        let temp = this.LLHead;
        let i = 0;
        while (temp.value != value) {
            temp = temp.next;
            i++;
            if (i >= this.length) {
                return null;
            }
        }
        return i;
    }

    toString() {
        let temp = this.LLHead;
        let text = '';
        while (temp != null) {
            text += `( ${temp.value} ) -> `;
            temp = temp.next;
        }
        return text += 'null'
    }
}

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

const myStuff = {
    name: 'clowdy',
    interest: 'web dev',
};

const myList = new LinkedList();
myList.append('the stuff');
myList.append('the other stuff');
myList.prepend('New Stuff');

console.log(myList.toString());