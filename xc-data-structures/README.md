## xc-data-structures

Introduction to Data Structures and Algorithms.

# What are Data Structures?

A Data Structure is just a way of organizing data to make it easy to process, store, or retrieve data.

Some data structures work better for certain use cases than others, either because they are easier to work with or because they have better performance.

Data structures are most important when you are working with very large sets of data. For example, some data structures keep data sorted. This can be advantageous if you are working with 10,000+ objects. However, computers have gotten so fast that for smaller data sets it may actually be quicker to just sort the objects on the fly.

Never adopt a data structure solely for performance purposes until you have done measurements that prove that the code you wish to change is actually a performance problem! Adopting data structures when they aren't necessary is referred to as "premature optimization". This is a fairly big problem in the industry because engineers tend to enjoy making things as perfect as possible. However, shaving a few milliseconds off the code that will, for example, be sending a network request that may take 100s of milliseconds to complete just makes the code more complex and more difficult to work with and maintain, without providing any tangible benefit to the customer.

# Analyzing Data Structures and Algorithms

The standard technique for analyzing the performance of data structures and algorithms is to use "Big-O" notation, which indicates how a data structure or algorithm scales as the number of items in the structure grows. Big-O comes from the mathematical symbol `O(x)` where `O` refers to "order of" and `x` is the "order of magnitude" of how execution time grows as the data set grows. Performing this analysis is referred to as "complexity analysis".

Complexity analysis applies to situations where a data set grows very large. Execution time can slow significantly as the size of the data gets very large because of the number of operations that need to be carried out on each data item. In complexity analysis, we assume the data grows so large that only the largest factors matter, so only those are reported with the Big-O notation.

A tutorial on complexity analysis is beyond the scope of this presentation. In short, though, here is a list of the most common "Big-O" complexities you are likely to encounter, and what they mean.

- O(1) is constant time. Since `1` is a constant, this indicates that the execution time does not change even as the data set grows.
- O(N) is linear growth. It indicates that execution time grows at the same rate as the data. That is, if there is 10x more data, it will take 10x longer to process it.
- O(N^2) is quadratic growth. It indicates that execution time grows as the square of the size of the data. With 10x more data, it will take 100x longer to process it.
- O(logN) is logarithmic growth. It indicates that execution time grows as the log (base 2) of the size of the data. With 10x more data, it will take log(10) ≈ 3 times longer, while with 100x more data it will only take ≈ 6 times longer.
- O(NlogN) is log-linear growth. It indicates that execution time grows as the size of the data times log of the size of the data. With 10x more data, it will take 10 \* log(10) ≈ 30 times longer.

# Important Data Structures

Over the years, many data structures have been invented to address particular use cases. There are, however, a small number of common data structures that will cover almost every situation you are likely to encounter. Those are:

- List (or Array)
- Linked List
- Binary Search Tree
- Hash Table (or Hash Map or Dictionary)

There are 3 operations that data structures support that determine the most important characteristics of that data structure. Those are:

- Lookup Complexity: Time to locate an item in the data structure
- Insert Complexity: Time to insert a new item into the data structure
- Remove Complexity: Time to remove an item from the data structure (typically the same as insert)

## List

A list is just a set of items concatenated together. They are co-located in memory, with one following the other, all the same size. Each item can be found using its index in the array. To find an element in memory, simply multiply the item's index by the item size and add the memory location of the start of the list. This is a constant operation.

Lists are great if you have a small number of items and know the index of the items you want to access.

- Lookup Complexity: constant if you know the index; linear if you have to scan the list to find the item
- Insert Complexity: constant to add to the end of the list; linear to insert elsewhere since you have to move all the subsequent items up one location
- Remove Complexity: constant to remove from the end of the list; linear to remove elsewhere since you have to move all the subsequent items down one location

Note that a list may grow too large to fit in the memory that has been allocated for it. When that happens, it needs to be moved to a new location in memory. This operation may be expensive since a larger block of memory needs to be allocated and all the items copied to the new location.

## Linked List

A linked list addresses the problems of insertion and removal in a simple list. They do this by storing each item in an arbitrary location in memory with a reference (or pointer) to the next item in the list. You can enumerate all the items in a linked list by starting at the front and following the references until you get to the end. Inserting or removing an item in a linked list requires simply adjusting the nearby references to keep the reference chain correct.

Linked lists are great if you need to insert or remove items next to an existing item. If you have a reference to an item in a linked list, adding one next to it or removing that item is a constant time operation. However, finding items in a linked list requires scanning the entire list.

- Lookup Complexity: linear
- Insert Complexity: constant if you have a reference to the item you want to insert after; linear if you have to find the location where you want to insert
- Remove Complexity: constant if you have a reference to the item you want to remove; linear if you have to find the item you want to remove

Because of the need to scan a linked list to locate an item, they are rarely used in practice.

## Binary Search Tree

A Binary Search Tree (or BST) addresses the shortcomings of lists when inserting or removing items. BSTs also keep their data sorted, so if there is a need to insert items into a data set and maintain them in sorted order, BSTs are great. They also have extremely favorable insert and removal times.

A BST structures its data in a tree, where each node in the tree has two children (hence the name "Binary"). The child to the left sorts "less than" the current node and the child to the right sorts "greater than" the current node. This arrangement means that you can find a particular node or insert into the tree in logarithmic time (hence the name "Search"). This is possible since at every traversal of the tree you are able to eliminate half the items from consideration. (As a rule of thumb, any algorithm that lets you remove half the items from consideration at each step will have logarithmic complexity.)

- Lookup Complexity: logarithmic
- Insert Complexity: logarithmic
- Removal Complexity: logarithmic

(These are all "typical" times. It is possible for the BST to become imbalanced and instead give linear times for all these operations.)

## Hash Table

A Hash Table stores data as key/value pairs. You look up an item in a Hash Table using the key, and the Hash Table returns the value. A Hash Table gets its name from the operation used to look up an item in the table using the key. A Hash Table stores the keys in a simple list. To locate an item, the key is "hashed", which means that a calculation is performed on it that reduces the key to a number between 0 and the size of the list. This hash value is used as an index into the table to find the item.

Hash functions (which implement the hash algorithm) do not produce a unique index for every key. Sometimes the hash value for two different keys can be the same, which means those two items get stored at the same index. In that case, all keys that hash to the same location must be searched to find the correct one. There are various approaches to minimizing the impact of these collisions. In most common situations, the impact of hash collisions is negligible.

Performance of hash tables for looking up keys is excellent. The hash algorithm is constant time and indexing into a list is constant time, so the overall lookup time is also constant time. With such great performance, why don't we use hash tables for every problem we encounter? One reason is because the order of items in a hash table is unpredictable, so they cannot be used to store sorted data. Another is that they take up extra memory to manage the list of keys and values. Other reasons also limit their use. However, they are a very important and frequently-used data structure. For example, in JavaScript, all objects have their properties and values stored in what is essentially a Hash Table.

- Lookup Complexity: constant
- Insert Complexity: constant
- Removal Complexity: constant

(These are all "typical" times. If there are many hash collisions, a hash table can instead give linear times for all these operations.)

# Will I really need to know all this?

The study of data structures and algorithms can be a life-long pursuit! Many people have built their careers around such a study. However, in practice for most software engineers, understanding the details of data structures and algorithms is not necessary.

In daily practice, software engineers typically make use of data structures implemented by others. And most frontend work will not deal with data sizes that are large enough that the data structure will have much impact on performance. However, understanding the basic characteristics of the above data structures can be valuable as you consider the best approaches to organizing data and operating on it.

Having said that, it has become very popular for data structure and algorithm problems to be part of a job interview (though typically for midlevel and higher positions). There is a belief in the industry (probably well-founded) that you can use the ability to solve data structure and algorithm problems as a proxy for overall software skill. Therefore, when preparing for interviews, it is wise to spend time learning about the characteristics of data structures and how to make use of them.

# Reference

The author of this presentation has made several YouTube videos discussing data structures and algorithms in a bit more detail. Keep in mind, though, that even those presentations only touch the surface of the topic. You can find these videos on the "DevMakers io" YouTube channel under The Technical Interview.

https://www.youtube.com/playlist?list=PL3qT43t-BqCbmPsxovJpRDHyuIq_cQwIk
