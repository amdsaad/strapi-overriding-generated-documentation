'use strict';

/**
 * post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post', ({ strapi }) => ({
    async findBySlug(ctx) {
        const { slug } = ctx.params;
        const post = await strapi.db.query("api::post.post").findOne({
            where: { slug: slug },
            ...ctx.query
        });
        if (post === null) {
            // @ts-ignore
            return ctx.response.notFound(`can not find a post with slug ${id}`);
        }
        const sanitizedEntity = await this.sanitizeOutput(post, ctx);
        return this.transformResponse(sanitizedEntity);
    }
}));
