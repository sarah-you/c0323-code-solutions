export default function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  let max = stack.pop();
  while (stack.peek() !== undefined) {
    if (stack.peek() > max) {
      max = stack.peek();
    }
    stack.pop();
  }
  return max;
}
