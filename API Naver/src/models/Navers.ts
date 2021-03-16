import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('navers')
export default class navers {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    birthdate: string;

    @Column()
    admission_date: string;

    @Column()
    job_role: string;

}