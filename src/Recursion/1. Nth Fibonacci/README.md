## Nth Fibonacci

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. In this sequence, the first number is denoted as F0, the second number as F1, and so on. To clarify, the Fibonacci sequence often starts with F0 = 0 and F1 = 1. Therefore, the function you need to write will take an integer n as input and return the nth Fibonacci number. For example, `getNthFib(1)` will return F0, `getNthFib(2)` will return F1, and so on.

**Note**: For this specific question, we will consider the first Fibonacci number as FO. Consequently, when calling the function getNthFib(1), it will return the value of F0. Similarly, getNthFib(2) will return the value of F1, and so on. The function takes an integer n as input and returns the nth Fibonacci number according to this modified convention.

### Signature

```typescript
type Memo = { [key: number]: number };

function ntFibonacci(n: number, memo: Memo): number;
```
