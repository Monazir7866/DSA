// You are designing your own library and now you have to make your own shuffle function that takes a list and returns the shuffled from, i.e. all nodes are shuffled.

// You think that the ideal approach is to take one node from the beginning and then one from the end untill all nodes are covered.

// You do not have to output anything. Just complete the shuffleAll function such that the shuffled list also has the same pointer as head.

// shuffleAll has the following parameters:

// -LinkedListNode pointer list:a reference to the head node in the list

// input 
// 5
// 1 34 5 2 108

// output
// 1 108 34 2 5

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var shuffle = function (head) {
     let l=0;
     let cur=head;
     while(cur){
         l++;
         cur=cur.next;
     }
     if(l<3){
         return head;
     }
     let i=0;
     cur=head;
      while (i!=Math.floor(l/2)){
        cur = cur.next;
        i++;
      }
       let pre = null
       while (cur){
       let cur2 = cur.next;
        cur.next = pre;
        pre = cur;
        cur = cur2;
       }
       cur = head;
       let [curl,curr] = [cur.next,pre.next];
       while(cur){
        curl = cur.next;
        if(pre) curr = pre.next;
        cur.next = pre;
        if(pre) pre.next = curl;
        cur = curl;
        if(pre){
            pre = curr;
        } 
      }  
       return head;
};