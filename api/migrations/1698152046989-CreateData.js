const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class CreateData1698152046989 {

    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE data (
                id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                key TEXT NOT NULL,
                value TEXT NOT NULL
            )
        `);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE data`);
    }

}
