# TODO API


____


#### URL: http://localhost:3001/todo
<hr>

## GET
### Return array of todo items 

#### Response: 
```js
{
    status: 'success',
    data: [
        {
            id: '3c6d265e-053b-4c24-9492-6873df83c17b',
            text: 'Some text',
            isDone: false,
        },
        {
            id: '74a92355-6b4e-414d-a3d8-09b66ea4818b',
            text: 'Another text',
            isDone: false,
        }
    ] 
}
```
<hr>

## POST
### Create new todo item and push it to array

#### Body:
```js
{
    text: 'Some text' // Required
}
```

#### Responses:

status: 200
```js
{
    status: 'success',
    data: {
            id: '3c6d265e-053b-4c24-9492-6873df83c17b',
            text: 'Some text',
            isDone: false,
        }
}
```

status: 400
```js
{
    status: 'error',
    error: 'Body is required'
}
```
<hr>

## PUT
### Change the text of item with specified id

#### Body:
```js
{
    id: '3c6d265e-053b-4c24-9492-6873df83c17b' // Required
    text: 'Another text' // Required
}
```

#### Responses:
status: 200
```js
{
    status: 'success',
    data: {
            id: '3c6d265e-053b-4c24-9492-6873df83c17b',
            text: 'Another text',
            isDone: false,
        }
}
```

status: 400
```js
{
    status: 'error',
    error: 'Body is required'
}
```

status: 404
```js
{
    status: 'error',
    error: 'Item with id not found'
}
```
<hr>


## PATCH
### Toggle isDone of item with specified id

#### Body:
```js
{
    id: '3c6d265e-053b-4c24-9492-6873df83c17b' // Required
}
```

#### Responses:
status: 200
```js
{
    status: 'success',
    data: {
            id: '3c6d265e-053b-4c24-9492-6873df83c17b',
            text: 'Some text',
            isDone: true,
        }
}
```

status: 400
```js
{
    status: 'error',
    error: 'Body is required'
}
```

status: 404
```js
{
    status: 'error',
    error: 'Item with id not found'
}
```
<hr>


## DELETE
### Delete item with specified id and send array with all todo items

#### URL: http:localhost:3001/todo?id=3c6d265e-053b-4c24-9492-6873df83c17b

#### Responses:
status: 200
```js
{
    status: 'success',
    data: [
        {
            id: '3c6d265e-053b-4c24-9492-6873df83c17b',
            text: 'Some text',
            isDone: false,
        },
        {
            id: '74a92355-6b4e-414d-a3d8-09b66ea4818b',
            text: 'Another text',
            isDone: false,
        }
    ]
}
```

status: 400
```js
{
    status: 'error',
    error: 'Query param "id" is required'
}
```

status: 404
```js
{
    status: 'error',
    error: 'Item with id not found'
}
```
<hr>
