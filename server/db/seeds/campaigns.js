exports.seed = function (knex) {
  return knex('activities')
    .del()
    .then(function () {
      return knex('activities').insert([
        {
          id: 1,
          title: "Petone Shore Clean Drive",
          description: "Join me in a clean drive of Petone shore by picking up at least 3 rubbish items you'll see, and bin it properly.",
          image: "./images/shore.jpg",
          category: "Environmental Protection",
          date: "2022-03-01"
        }
      ])
    })
}
