import { arrayDiff as arrayDiff1 } from './solution1.js'
import { arrayDiff as arrayDiff2 } from './solution2.js'
import { arrayDiff as arrayDiff3 } from './solution3.js'

const a = [1, 2, 3, 4, 5]
const b = [1, 2]

console.log('Result from solution 1: ', arrayDiff1(a, b))
console.log('Result from solution 2: ', arrayDiff2(a, b))
console.log('Result from solution 3: ', arrayDiff3(a, b))
