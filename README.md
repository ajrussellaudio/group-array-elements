# groupArrayElements

Given an array of length >= 0, and a positive integer N, this function returns the contents of the array divided into N equally sized arrays.

Where the size of the original array cannot be divided equally by N, the final part has a length equal to the remainder.

```js
groupArrayElements([​1​, ​2​, ​3​, ​4,​ ​5​], ​3​);
// [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
```

## Usage

- Clone this repo and `cd` into the folder
- (Optional) Switch your Node version. This was built with Node v10.4.0 (LTS) and relies on some ES6 features present in newer Node versions. There is no Babel dependency and no polyfills.
  ```
  nvm use
  ```
- Install dependencies. The only dependency here is `mocha`, a testing library.
  ```
  npm install
  ```
- Run the tests
  ```
  npm test
  ```
