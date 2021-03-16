import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createNavers1615490892344 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'navers',
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
                name: 'name',
                type:'varchar'
            },
            {
                name: 'birthdate',
                type: 'date'
            },
            {
                name: 'admission_date',
                type: 'date'
            },
            {
                name: 'job_role',
                type: 'varchar'
            }
        ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('navers');
    }

}