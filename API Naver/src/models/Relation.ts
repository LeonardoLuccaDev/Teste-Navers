import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';


@Entity('Relation')
export default class relation {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    projects_id: number;

    @Column()
    navers_id: number;
}