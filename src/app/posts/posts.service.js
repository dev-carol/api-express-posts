const { database } = require("../../database");
const { v4: uuid } = require("uuid");

class PostsService {
  async findAll() {
    return await database("posts").select('posts.*', 'users.first_name', 'users.last_name').leftJoin('users','posts.user_id', 'users.id');
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

  async findPostsByUserId(userId) {
    return await database('posts').where({user_id: userId});
  }

  async deleteById(id) {
    await database('posts').where({id}).del();
  }
}

const postsService = new PostsService();

module.exports = { postsService };
