// O(K) space where K is the no. of teams
// O(N) time where N is the no. of competitions

const HOME_WIN = 1;

export function tournamentWinner(
  competitions: string[][],
  results: number[]
): string {
  // Score tracker for each team
  const scoreTracker: { [team: string]: number } = {};

  // Winner team
  let winnerTeam = { team: "", score: 0 };

  // Loop through competitions
  for (let i = 0; i < competitions.length; i++) {
    const [homeTeam, awayTeam] = competitions[i];

    // Current game winner
    const currentWinnerTeam = results[i] === HOME_WIN ? homeTeam : awayTeam;

    // Current game winner gets 3 points
    scoreTracker[currentWinnerTeam] =
      (scoreTracker[currentWinnerTeam] ?? 0) + 3;

    // Check if current game winner is the overall winner so far (a greedy approach)
    if (scoreTracker[currentWinnerTeam] > winnerTeam.score) {
      winnerTeam = {
        team: currentWinnerTeam,
        score: scoreTracker[currentWinnerTeam],
      };
    }
  }

  // Return winner team
  return winnerTeam.team;
}
