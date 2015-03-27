import UIKit

// Basic Operators

var x = 1 + 2
// console ouput 
// 3

// Finding out the area of a room

let height = 12 // In feet
let width = 10  // In feet

let area = height * width 
// console output
// 120

// Lets Convert area to square meters.

// 1sq. meter = 1 sq. foot / 10.764
let areaInMeters = area / 10.764
//console output
// 12

let areaInMeters = Double(area) / 10.764
//console output
// 11.148272


// Using remainder operator % 
let chairWidth = 3 // 3
let spaceRemaining = width % chairWidth // 1
let chairs = width / chairWidth  // 3