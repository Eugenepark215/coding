// Definition for singly-linked list.
// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = (val === undefined ? 0 : val);
//     this.next = (next === undefined ? null : next);
//   }
// }

function middleNode(head: ListNode | null): ListNode | null {
  let twice = head;
  let once = head;
  while (twice && twice.next) {
    twice = twice.next.next;
    once = once.next;
  }
  return once;
}
middleNode([1, 2, 3, 4, 5, 6]);
