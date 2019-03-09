'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('home')

Route.get('/posts', 'PostController.index')
Route.get('/posts/add', 'PostController.add')
Route.get('/posts/edit/:id', 'PostController.edit')
Route.get('posts/:id', 'PostController.details')
Route.post('/posts', 'PostController.store')
Route.put('/posts/:id', 'PostController.update')
Route.delete('/posts/:id', 'PostController.destroy')

// Testing Route using non ES6 syntax
// Route.get('/api/:id', function ({params}) {
//     return `<p>ini adalah ${params.id}</p>`
// })

// Testing Route using non ES6 syntax (arrow function)
// Route.get('/contoh', () => { return `Haii` })
