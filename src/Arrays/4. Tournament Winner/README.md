## Tournament Winner

### Description

In this problem, there is an game tournament where teams compete in a round-robin format. The goal is to determine the winner of the tournament based on the given array of pairs representing the teams' competitions and an array containing the results of each competition.

competitions: An array of pairs representing the teams that have competed against each other. Each pair is in the form [homeTeam, awayTeam], where each team is a string of at most 30 characters representing the name of the team.

results: An array containing information about the winner of each corresponding competition in the competitions array. Each element results[i] denotes the winner of competitions[i], where a value of 1 means the home team in the corresponding competition won, and a value of 0 means the away team won.

### Signature

```typescript
function tournamentWinner(competitions: string[][], results: number[]): string;
```
