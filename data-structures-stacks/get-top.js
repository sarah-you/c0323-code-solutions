import './lib/stack';

export default function getTop(stack) {
  if (stack === undefined) {
    return undefined;
  } else {
    return stack.peek();
  }
}
