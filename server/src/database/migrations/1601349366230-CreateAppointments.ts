import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateAppointments1601349366230 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'appointmens',
                columns:[
                   {
                        name:'id',
                        type:'varchar',
                        isPrimary:true,
                        generationStrategy:'uuid',
                    },
                    {
                        name:'provider',
                        type:'varchar',
                        isNullable:false
                    },
                    {
                        name:'date',
                        type:'timestamp with time zone',
                        isNullable:false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('appointmens')
    }

}
