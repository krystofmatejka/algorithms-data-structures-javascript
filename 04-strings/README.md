# Strings

## Comparison

- If you are comparing two strings of different lengths, it starts comparing from the start of the string until the length of the smaller string.

```js
expect('b' > 'a').toBe(true)
expect('ad' > 'c').toBe(false)
expect('dd' > 'c').toBe(true)
```
