//named exports
import {add,multiply} from './math.js'

console.log(add(5,3))//8
console.log(multiply(5,3))//15

import {add as sum,multiply as mul} from './math.js'

console.log(sum(5,3))
console.log(mul(5,3))

import * as math from './math.js'
console.log(math.add(5,3))
console.log(math.multiply(5,3))

import value,{pi,squarre} from './math.js'
console.log(squarre(5))
console.log("sahana")