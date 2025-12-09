## how measure code quality

- **time (time take to execute)**
- **space (memory used)**
- **readability**

## Time complexity

### why not timers

- Timers can be affected by many factors (CPU load, other processes, etc.)
- **Rather than counting time in seconds, we count the number of operations (or steps) an algorithm(code) takes relative to the size of the input.**

---

## Space complexity

### why not memory usage

- Measuring memory usage can be complex (different types of memory, cache effects, etc.)
- **Rather than counting memory in bytes, we count the amount of additional memory an algorithm uses relative to the size of the input.**

<img src="../images/00-bigO/time complexity.png" width=500>

---

### Object operations time complexity

- insert - O(1)
- delete - O(1)
- access - O(1)
- search - O(n) - loop though keys

### Array operations time complexity

- add to end - O(1)
- add to beginning - O(n)
- delete from end - O(1)
- delete from beginning - O(n)
- access - O(1)
- search - o(n) - loop though all elements
