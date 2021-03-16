import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createRelations1615861903395 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'relation',
            columns:[
                {
                name:'id',
                type:'integer',
                unsigned: true,
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment'
            },
            {
                name: 'projects_id',
                type:'integer'
            },
            {
                name: 'navers_id',
                type: 'integer'
            },
        ],
        foreignKeys: [
            {
                name: 'RelationProjects',
                columnNames: ['projects_id'],
                referencedTableName: 'projects',
                referencedColumnNames: ['id'],
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },

            {
                name: 'RelatioNavers',
                columnNames: ['navers_id'],
                referencedTableName: 'navers',
                referencedColumnNames: ['id'],
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },

    ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('relation');
    }

}
