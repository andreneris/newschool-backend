import { LessonRepository } from './../repository/lesson.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Lesson } from '../entity';
import { NewLessonDTO } from '../dto/new-lesson.dto';

@Injectable()
export class LessonService {

    constructor(private readonly lessonRepository: LessonRepository){}

    public async getAll(): Promise<Lesson[]>{
        return this.lessonRepository.find();
    }

    public async findById( id: Lesson['id']): Promise<Lesson>{
        const lesson: Lesson = await this.lessonRepository.findOne(id);

        if (!lesson){
            throw new NotFoundException();
        }
        return lesson;
    }

    public async add(lesson: NewLessonDTO): Promise<Lesson> {
        return await this.lessonRepository.save(lesson);
    }

    public async delete( id: Lesson['id']): Promise<void>{
        await this.lessonRepository.delete(id);
    }

    public async findByTitle( title: Lesson['title']): Promise<Lesson>{
        const lesson:Lesson = await this.lessonRepository.findByTitle(title);
        if (!lesson){
            throw new NotFoundException();
        }
        return lesson;

    }

}