import './lib/stack';

export default function getTop(stack) {
  if (stack === '' || null) {
    return undefined;
  } else {
    return stack.peek();
  }
}
