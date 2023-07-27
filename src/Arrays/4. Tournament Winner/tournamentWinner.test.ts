import { tournamentWinner } from "./tournamentWinner";

describe("tournamentWinner", () => {
  describe("Cases with one team competition", () => {
    test("should return the name of the winning team", () => {
      const competitions = [["TeamA", "TeamB"]];
      const results = [0];

      expect(tournamentWinner(competitions, results)).toBe("TeamB");
    });
  });

  describe("Cases with multiple team competitions", () => {
    test("should return the name of the winning team", () => {
      const competitions = [
        ["TeamA", "TeamB"],
        ["TeamC", "TeamD"],
        ["TeamB", "TeamC"],
      ];
      const results = [0, 0, 1];

      expect(tournamentWinner(competitions, results)).toBe("TeamB");
    });
  });

  describe("Cases with team names of different lengths", () => {
    test("should return the name of the winning team", () => {
      const competitions = [
        ["ShortName", "ReallyLongTeamNameThatWins"],
        ["ReallyLongTeamNameThatWins", "RandomTeam"],
      ];
      const results = [0, 1];

      expect(tournamentWinner(competitions, results)).toBe(
        "ReallyLongTeamNameThatWins"
      );
    });
  });

  describe("Cases with the same team name winning multiple times", () => {
    test("should return the name of the winning team", () => {
      const competitions = [
        ["TeamA", "TeamB"],
        ["TeamA", "TeamC"],
        ["TeamC", "TeamB"],
      ];
      const results = [1, 1, 0];

      expect(tournamentWinner(competitions, results)).toBe("TeamA");
    });
  });
});
