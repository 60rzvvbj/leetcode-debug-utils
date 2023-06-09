import { createBinaryTree, TreeNode } from '..';
import { printTree } from '../printTree';

test('test createBinaryTree', () => {
  expect(createBinaryTree([1, 2, 3, 4, 5, 6, 7])).toEqual(
    new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3, new TreeNode(6), new TreeNode(7)),
    ),
  );

  expect(createBinaryTree([1, null, 2, 3, null, 5, 6, 7])).toEqual(
    new TreeNode(1, null, new TreeNode(2, new TreeNode(3, new TreeNode(5, new TreeNode(7)), new TreeNode(6)), null)),
  );

  expect(createBinaryTree([1, 2, 3, 4, 5, null, 6, 7])).toEqual(
    new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4, new TreeNode(7), null), new TreeNode(5)),
      new TreeNode(3, null, new TreeNode(6)),
    ),
  );
});

test('test printTree', () => {
  let root = new TreeNode(
    1,
    new TreeNode(2, null, new TreeNode(5, new TreeNode(8))),
    new TreeNode(3, new TreeNode(6), new TreeNode(7, null, new TreeNode(9))),
  );

  expect(root === null).toEqual(false);

  let logs: string = '';
  let log = console.log;
  console.log = function (res: string) {
    logs = res;
    log(res);
  };
  printTree(root!);

  expect(logs).toEqual(
    [
      '             1              ',
      '          /     \\           ',
      '       2           3        ',
      '        \\        /  \\       ',
      '          5     6     7     ',
      '         /             \\    ',
      '        8               9   ',
      '                            ',
    ].join('\n'),
  );
});
