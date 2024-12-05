### todos
- [x] figure out how to log transactions
    - [x] need to read MongoDB documentation to how to create new entry
    - [x] figure out MongoDB schema for transactions
- make handler async?
- make it so the success bar goes away after a bit?
- ~~need to syncronize next-auth and user data with MongoDB~~
- [x] create a draft of the accounts page
    - [x] modify the cart checkout component
    - [x] get it working so empty orders don't crash


### nice to have
- way to quickly look up documentation in VsCode



orders [
  {
    _id: new ObjectId('6750f7af76c01e10e035465d'),
    user_email: 'astrollin.neil@gmail.com',
    order_total: 27298,
    items: [ [Object], [Object] ],
    timestamp: 2024-12-05T01:15:05.758Z
  },
  {
    _id: new ObjectId('6750f9c876c01e10e0354661'),
    user_email: 'astrollin.neil@gmail.com',
    timestamp: 2024-12-05T00:54:32.879Z,
    order_total: 25848,
    items: [ [Object], [Object], [Object] ]
  }
]