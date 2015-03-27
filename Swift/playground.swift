// Playground - noun: a place where people can play

import UIKit

var str : String = "Hello"
let modernProgrammingLanguage: String = "Swift"
var greeting = str + modernProgrammingLanguage  //implicit type String or inferred

// print - prints values to the console
// print - is not a command, it's a function.
println("To build an iPhone app we need to learn")

//println - print out values + new line
print(modernProgrammingLanguage)

println("To build an iPhone app we need to learn " + modernProgrammingLanguage )

// string interpolation
println("To build an iPhone app we need to learn \ (modernProgrammingLanguage)")

var greeting = "\(str) \(modernProgrammingLanguage)"

//variables are mutable strings
//var str = "Edgar"

//constants are Immutable strings / can Not be modify
//let name = "Emilee"

//concatination
//adding 2 or more stings together
//var greeting = "hello" + name

//stings interpolation
//insert a variable inside a string
//var greeting = "Hello \(name)"