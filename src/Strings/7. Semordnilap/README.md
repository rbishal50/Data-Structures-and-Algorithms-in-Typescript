## Semordnilap

### Description

Write a function that takes in a list of unique strings and returns a list of semordnilap pairs.
A semordnilap pair is defined as a set of different strings where the reverse of one word is the same as the forward version of the other. For example the words "diaper" and "repaid" are a semordnilap pair, as are the words "palindromes" and "semordnilap".
The order of the returned pairs and the order of the strings within each pair does not matter.## Signature

```typescript
function semordnilap(words: string[]): string[][];
```
