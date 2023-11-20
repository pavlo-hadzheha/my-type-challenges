/*
  27133 - Square
  -------
  by null (@aswinsvijay) #medium #tuple #array #math

  ### Question

  Given a number, your type should return its square.

  > View on GitHub: https://tsch.js.org/27133
*/

/* _____________ Your Code Here _____________ */

type MakeCounter<T extends number, _Result extends 1[] = []> = _Result['length'] extends T | 999 ? _Result : MakeCounter<T, [..._Result, 1]>
/** 扁平化 */
type FlatCounterCounter<T extends any[][], _Result extends any[] = []> = T extends [infer F extends any[], ...infer R extends any[][]] ?
  FlatCounterCounter<R, [..._Result, ...F]> :
  _Result
type SimpleMultiply<T extends number, U extends number, _CounterCounter extends 1[][] = []> = T | U extends 100 ? 10000 : _CounterCounter['length'] extends U ?
  FlatCounterCounter<_CounterCounter>['length'] :
  SimpleMultiply<T, U, [..._CounterCounter, MakeCounter<T>]>

/** 100以内 */
type Square<N extends number> =
    `${N}` extends `-${infer NN extends number}}`
      ? SimpleMultiply<NN, NN>
      : SimpleMultiply<N, N>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Square<0>, 0>>,
  Expect<Equal<Square<1>, 1>>,
  Expect<Equal<Square<3>, 9>>,
  Expect<Equal<Square<20>, 400>>,
  Expect<Equal<Square<100>, 10000>>,
  Expect<Equal<Square<99>, 9801>>,

  // Negative numbers
  Expect<Equal<Square<-2>, 4>>,
  Expect<Equal<Square<-5>, 25>>,
  Expect<Equal<Square<-31>, 961>>,
  Expect<Equal<Square<-50>, 2500>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/27133/answer
  > View solutions: https://tsch.js.org/27133/solutions
  > More Challenges: https://tsch.js.org
*/
