## get-string-middle-index-without-cutting-words

## Install

```bash
$ npm install get-string-middle-index-without-cutting-words
```

## Usage

```js
import getMiddleIndex from "get-string-middle-index-without-cutting-words";

getMiddleIndex("123 56");
// => 3
getMiddleIndex("12 456");
// => 2
getMiddleIndex("1 3");
// => 1
getMiddleIndex("12 45 7");
// => 2
getMiddleIndex("123 5 7");
// => 3
getMiddleIndex("12 4 67");
// => 2
getMiddleIndex("123");
// => cant cut, so returns -1
getMiddleIndex("");
// => -1
getMiddleIndex(null);
// throws if argument is not a string
```
