'use strict'

// to get data from MySQL, we have to Bring in Post Model
const Post = use('App/Models/Post')


class PostController {

    async index({ view }){
        //return `This is a Posts`

        // const posts = [
        //     {
        //         title : 'Post One',
        //         body  : 'This is the post one'
        //     },
        //     {
        //         title : 'Post Two',
        //         body  : 'This is the post two'
        //     },
        //     {
        //         title : 'Post Three',
        //         body  : 'This is the post three'
        //     }                        
        // ]

        const posts = await Post.all()

        return view.render('posts.index', {
            title: 'Latest Post',
            //posts: posts
            posts: posts.toJSON()
        })
    }

    async details({ params, view }){

        const post = await Post.find(params.id)

        return view.render('posts.details', {
            post: post
        })
    }
}

module.exports = PostController
