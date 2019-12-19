import { Lesson } from './lesson.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Audit } from '../../CommonsModule';

@Entity()
export class Course extends Audit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: false,
  })
  title: string;

  @Column({
    nullable: false,
  })
  description: string;

  @Column({
    nullable: true,
  })
  thumbUrl: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  authorId: string;

  @OneToMany<Lesson>(
    () => Lesson,
    (lesson: Lesson) => lesson.course,
  )
  lesson: Lesson[];
}
