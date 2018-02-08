# sequence-parallel

Functional Programming with Sequence and Parallel

## install
`yarn add sequence-parallel`

## `parallel`

```js
import {parallel} from "sequence-parallel";

let calculator = parallel(
  x=>x * 1,
  x=>x * 2,
  x=>x * 3,
  (x, y, z)=>x + y + z
);
console.log(calculator(1)); // 6
```
```js
let calculator = parallel(
  x=>x.a.b.c,
  x=>x.a.d * 2,
  x=>x.e * 3,
  (x, y, z)=>x + y + z
);
console.log(calculator({a:{b:{c: 1}, d: 2}, e: 3})); // 14
```

## `sequence`
```js
import {sequence} from "sequence-parallel";
let calculator = sequence(
  x=>x * 2,
  x=>x * 3
);
console.log(calculator(5)); // 30
```

## `sequence + parallel`

```js
import {sequence, parallel} from "sequence-parallel";

let calculator = sequence(
  x=>x / 2,
  parallel(
    x=>x + 1,
    x=>x + 2,
    sequence(
      x=>x / 2,
      x=>x * 3
    ),
    (x, y, z)=>x + y + z
  )
);
console.log(calculator(4)); // 10
```