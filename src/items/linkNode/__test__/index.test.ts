import { ListNode, cloneLinkedList, createLinkedList, printLinkedList } from '..';

test('test createLinkedList', () => {
  let arr = [1, 2, 3];
  let head = createLinkedList(arr);
  expect(head).toEqual(new ListNode(1, new ListNode(2, new ListNode(3))));
});

test('test cloneLinkedList', () => {
  let arr = [1, 2, 3];
  let head = createLinkedList(arr);
  expect(head).toEqual(cloneLinkedList(head));
});

test('test printLinkedList', () => {
  let arr = [1, 2, 3];
  let head = createLinkedList(arr);
  let str;
  console.log = function (s: string) {
    str = s;
  };
  printLinkedList(head);
  expect(str).toEqual('1 -> 2 -> 3');
});
