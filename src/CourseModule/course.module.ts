import { LessonRepository } from './repository/lesson.repository';
import { Module } from '@nestjs/common';
import { CourseController, LessonController } from './controllers';
import { CourseService, LessonService } from './service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseRepository } from './repository';
import { Course, Lesson } from './entity';
import { CourseMapper, LessonMapper } from './mapper';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [
    TypeOrmModule.forFeature([Course, CourseRepository, Lesson, LessonRepository]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.EXPIRES_IN_ACCESS_TOKEN },
    }),
  ],
  controllers: [CourseController,LessonController],
  providers: [CourseService, CourseMapper, LessonService, LessonMapper],
  exports: [CourseService],
})
export class CourseModule {
}
