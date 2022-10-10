const { database } = require("../../database");
const { v4: uuid } = require("uuid");

class UsersService {
  async findAll() {
    return await database("users");
  }

  async create(user) {
    user.id = uuid();
    await database("users").insert(user);

    return user;
  }

  async update(id, user) {
    return await database("users").where({id}).update(user);
  }


  async findOneById(id) {
    return await database('users').where({id}).first();
  }

  async deleteById(id) {
    await database('users').where({id}).del();
  }
}

const usersService = new UsersService();

module.exports = { usersService };
