/*
  10969 - Integer
  -------
  by HuaBing (@hbcraft) #medium #template-literal

  ### Question

  Please complete type `Integer<T>`, type `T` inherits from `number`, if `T` is an integer return it, otherwise return `never`.

  > View on GitHub: https://tsch.js.org/10969
*/

/* _____________ Your Code Here _____________ */

type Integer<N extends number> = number extends N
  ? never
  : `${N}` extends `${string}.${infer End}`
    ? End extends `${string}${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}${string}` ? never : N
    : N

type IntegerShort<T> = `${T & number}` extends `${bigint}` ? T : never

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

let x = 1
let y = 1 as const

type cases1 = [
  Expect<Equal<Integer<1>, 1>>,
  Expect<Equal<IntegerShort<1.1>, never>>,
  Expect<Equal<Integer<1.0>, 1>>,
  Expect<Equal<Integer<1.000000000>, 1>>,
  Expect<Equal<Integer<0.5>, never>>,
  Expect<Equal<Integer<28.00>, 28>>,
  Expect<Equal<Integer<28.101>, never>>,
  Expect<Equal<Integer<typeof x>, never>>,
  Expect<Equal<Integer<typeof y>, 1>>,
]

type cases2 = [
  Expect<Equal<IntegerShort<1>, 1>>,
  Expect<Equal<IntegerShort<1.1>, never>>,
  Expect<Equal<IntegerShort<1.0>, 1>>,
  Expect<Equal<IntegerShort<1.000000000>, 1>>,
  Expect<Equal<IntegerShort<0.5>, never>>,
  Expect<Equal<IntegerShort<28.00>, 28>>,
  Expect<Equal<IntegerShort<28.101>, never>>,
  Expect<Equal<IntegerShort<typeof x>, never>>,
  Expect<Equal<IntegerShort<typeof y>, 1>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/10969/answer
  > View solutions: https://tsch.js.org/10969/solutions
  > More Challenges: https://tsch.js.org
*/
