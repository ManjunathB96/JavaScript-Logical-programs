<<<<<<< HEAD
class Queue{
    constructor(){
        this.items={}
        this.tail=0
        this.head=0
    }
enqueue(element){
    this.items[this.tail]=element
    this.tail++
}
dequeue(){
    const element=this.items[this.head]
    delete this.items[this.head]
    this.head++
    return element
}
peek(){
    return this.items[this.head]
}

isEmpty(){
    return this.tail-this.head === 0
}
size(){
    return this.tail-this.head
}

print(){
    console.log(this.items);
}
}

const q= new Queue()

console.log(q.isEmpty());
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)

console.log(q.size());
q.print()

q.dequeue(20)

q.print()

console.log(q.dequeue(30))
 



q.print()

q.dequeue(40)
q.print()
console.log(q.isEmpty());


=======
class Queue{
    constructor(){
        this.items={}
        this.tail=0
        this.head=0
    }
enqueue(element){
    this.items[this.tail]=element
    this.tail++
}
dequeue(){
    const element=this.items[this.head]
    delete this.items[this.head]
    this.head++
    return element
}
peek(){
    return this.items[this.head]
}

isEmpty(){
    return this.tail-this.head === 0
}
size(){
    return this.tail-this.head
}

print(){
    console.log(this.items);
}
}

const q= new Queue()

console.log(q.isEmpty());
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)

console.log(q.size());
q.print()

q.dequeue(20)

q.print()

console.log(q.dequeue(30))
 



q.print()

q.dequeue(40)
q.print()
console.log(q.isEmpty());


>>>>>>> 4ec36c39a4083795e3e20b54e0f7a8742bc393aa
console.log("current queue is---",q);