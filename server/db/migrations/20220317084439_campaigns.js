exports.up = function (knex) {
    return knex.schema.createTable('campaigns', (table) => {
      table.increments('id')
      table.string('title')
      table.string('description')
      table.string('image')
      table.string('category')
      table.string('date')
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('campaigns')
  }