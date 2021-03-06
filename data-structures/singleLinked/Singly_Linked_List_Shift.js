// SHIFT(): Removing a new NODE from the beginning of a list

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(){
// Edge case if list is empty ↓
        if(!this.head) return undefined;

        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
// ↓ Conditional to ensure value of tail is NULL after last item is shifted
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
}


var list = new SinglyLinkedList()
list.push("HELLO") 
list.push("GOODBYE") 
list.push("!")
