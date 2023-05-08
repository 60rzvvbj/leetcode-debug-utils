import { NodeValue } from '../common';

export class LinkNode {
  val: NodeValue;
  next: LinkNode | null;
  constructor(val: NodeValue, next?: LinkNode | null) {
    this.val = val;
    this.next = next ?? null;
  }
}
