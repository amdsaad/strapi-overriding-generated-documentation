module.exports = {
    routes: [
        { // Path defined with an URL parameter
            method: 'GET',
            path: '/posts/slug/:slug',
            handler: 'post.findBySlug',
        },

    ]
}