"use strict";
exports.__esModule = true;
var point_1 = require("./point");
var point = new point_1.Point(20, 67);
var x = point.X;
point.X = 10;
point.draw();
