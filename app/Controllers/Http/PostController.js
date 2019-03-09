'use strict'

class PostController {

    async index({ view }){
        //return `This is a Posts`

        const posts = [
            {
                title : 'Post One',
                body  : 'This is the post one'
            },
            {
                title : 'Post Two',
                body  : 'This is the post two'
            },
            {
                title : 'Post Three',
                body  : 'This is the post three'
            }                        
        ]

        return view.render('posts.index', {
            title: 'Latest Post',
            posts: posts
        })
    }

}

module.exports = PostController
