function solution(votes, k) {
  var objectCanidates = {};
  for (var j = 0; j < votes.length; j++) {
    if (!objectCanidates[votes[j]]) {
      objectCanidates[votes[j]] = 1;
    } else {
      objectCanidates[votes[j]]++;
    }
  }
  var currentLeader = Math.max.apply(Math, votes);
  if (objectCanidates[currentLeader] > 1 && k === 0) {
    return 0;
  }
  var winner = 0;
  for (var i = 0; i < votes.length; i++) {
    if ((votes[i] + k) > currentLeader) {
      winner += 1;
    } else if (k === 0 && votes[i] === currentLeader) {
      return 1;
    }
  }
  return winner;
}
solution([5, 1, 3, 4, 1], 0);
