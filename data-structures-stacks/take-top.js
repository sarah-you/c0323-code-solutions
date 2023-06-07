export default function takeTop(stack) {
  if (stack === '' || null) {
    return undefined;
  } else {
    return stack.pop();
  }
}
