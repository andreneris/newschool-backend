import { Audit } from "src/CommonsModule";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Course } from '.';


@Entity()
export class Lesson extends Audit{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({nullable:false})
    title: string;

    @Column({nullable:false})
    description: string;

    // @ManyToOne(() => Course, (course: Course) => course.lesson)
    @ManyToOne(type=>Course)
    course: Course;
}