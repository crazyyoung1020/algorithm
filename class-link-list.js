
// 实现一个链表类，实现增删查方法，具体有以下方法
// append,往链表最后面添加一个节点
// addNodeAt, 在指定位置增加链表节点
// removeAt, 删除指定下表的链表节点
// getNode,获取直接下标的链表节点
// indexOf,通过链表节点的值，查找链表命中第一个节点的下标

// 链表节点类

class ListNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// 链表类

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0
    }
    append(val){
        if(this.size == 0){
            this.head = new ListNode(val);
        }else{
            let lastNode = this.getNode(this.size-1)
            lastNode.next = new ListNode(val)
        }
        this.size++
    }
    addNodeAt(index,val){
        if(index <0 || index > this.size ) console.log('index不在链表长度范围内')
        if(index == 0){
            let cur = this.head
            this.head = new ListNode(val)
            this.head.next = cur
        }else{
            let pre = this.getNode(index - 1)
            let cur = this.getNode(index)
            let addNode = new ListNode(val)
            pre.next = addNode
            addNode.next = cur
        }
        this.size++
    }
    removeAt(index){
        if(index < 0 || index >= this.size) console.log('index不在链表长度范围内')
        if(index == 0){
            let next = this.getNode(index + 1)
            this.head = next
        }else{
            let pre = this.getNode(index - 1)
            let next = this.getNode(index + 1)
            pre.next = next
        }
        this.size--
    }
    indexOf(val){
        for (let i = 0; i < this.size; i++) {
            let cur = this.getNode(i)
            if(val == cur.val){
                return i
            }
        }
        console.log('未查找到对应节点')
    }
    getNode(index){
        let cur = this.head
        for (let i = 0; i < index; i++) {
            cur = cur.next
        }
        return cur
    }
}

let a1 = new LinkedList()
a1.append(1)
a1.append(2)
a1.append(3)
a1.append(4)
a1.addNodeAt(2,5)
a1.removeAt(4)
console.dir(a1,{depth:10})
let index1 = a1.indexOf(5)
console.log('index1',index1)