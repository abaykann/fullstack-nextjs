
exports.up = function(knex) {
    return knex.schema.createTable('products', function(table) {
        table.increments();
        table.string('productName').notNullable();
        table.decimal('price', 12,2).notNullable();
        table.integer('disc').notNullable().defaultTo(0)
        table.decimal('netPrice', 12,2).notNullable();
        table.integer('categoryId').notNullable();
        table.string('imageUrl').notNullable();
        table.string('pubId').notNullable();
        table.text('desc');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return kenx.schema.dropTable('products');
};
