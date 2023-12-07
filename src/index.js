'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {
    if (strapi.plugin('documentation')) {
      console.log('register override')
      const override = {
        paths: {
          '/posts/slug/{slug}': {
            get: {
              operationId: 'findBySlug',
              summary: 'Find a post by slug',
              description: '',
              parameters: [
                {
                  name: 'slug',
                  in: 'path',
                  description: 'slug of post',
                  required: true,
                  schema: {
                    type: 'string',
                  },
                },
              ],
              responses: {
                200: {
                  description: 'Successful response',
                  content: {
                    'application/json': {},
                  },
                },
              },
              tags: ['Post'],
            },
          },

        },
      }
      strapi
        .plugin('documentation')
        .service('override')
        .registerOverride(override)
    }
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) { },
};
