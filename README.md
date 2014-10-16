Hoodie plugin to create databases
=================================

allow users to create databases

Frontend API:

```js
hoodie.createDb({
  name: 'myDb'
});
```

Optionally grant public access:

```js
hoodie.createDb({
  name: 'myDb',
  read: true,
  write: true
});
```
