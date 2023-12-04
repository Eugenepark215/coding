function minTimeToVisitAllPoints(points) {
  var times = 0;
  for (var i = 1; i < points.length; ++i) {
    var p0 = points[i - 1];
    var p1 = points[i];
    // will add the max value of difference
    times += Math.max(Math.abs(p1[0] - p0[0]), Math.abs(p1[1] - p0[1]));
  }
  return times;
}
