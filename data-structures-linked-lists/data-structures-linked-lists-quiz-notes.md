# data-structures-linked-lists-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How are linked lists different from an array?

  - they are sequential, meaning to find a specific data, you have to go from beginning and traverse through each node

- How would you access an arbitrary node in a linked list (not just the "head")?
  - use while loop to loop through the list until the next is null and assign list as list.next to keep moving through the list

## Notes

A linked list is a concrete data structure consisting of a bunch of value-containing "nodes" strung together into a single, sequential list. A basic linked list node has the following **properties**:

- `.data` - contains the node's value.
- `.next` a reference to the next node in the list, if there is one. If there is no "next" node in the list, this property is typically set to `null`.

![linked-list](linked-list.png)

Linked lists are sequential access (like a queue), not random access (like an array). That means that, in order to go to a specific place in the list, you have to start at the **beginning**, then jump from node to node until you get there. However, unlike a queue, a linked list doesn't need to be mutated to scan its contents.

In a basic linked list, you start at the "head" node, then jump to the next node through the `.next` property. The last node in a basic linked list is called the "tail" node. The "list" itself is simply a reference to the "head" node. **Since each node only contains a reference to the next node in the list, there is no way to backtrack**. That means each node is the "head" of its own list, and there's no way to tell if any other nodes came before it.\*

- Unless you have circular node references in the list. For this exercise, no circular references will be used, so every list has an end.
