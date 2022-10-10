const { database } = require("../../database");
const { v4: uuid } = require("uuid");

class PostsService {
  async findAll() {
    return await database("posts");
  }

  async create(post) {
    post.id = uuid();
    await database("posts").insert(post);

    return post;
  }

  async update(id, post) {
    return await database("posts").where({id}).update(post);
  }


  async findOneById(id) {
    return await database('posts').where({id}).first();
  }

  async deleteById(id) {
    await database('posts').where({id}).del();
  }
}

const postsService = new PostsService();

module.exports = { postsService };
