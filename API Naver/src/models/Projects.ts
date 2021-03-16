import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';


@Entity('projects')
export default class Projects {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;
}