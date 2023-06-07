export default function takeTop(stack) {
  if (stack === undefined) {
    return undefined;
  } else {
    return stack.pop();
  }
}
