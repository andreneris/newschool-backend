import { LessonDTO } from './lesson.dto';
import { Course, Lesson } from '../entity';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CourseDTO {
  @ApiModelProperty({ type: Number })
  id: Course['id'];

  @ApiModelProperty({ type: String })
  @IsNotEmpty()
  title: Course['title'];

  @ApiModelProperty({ type: String })
  thumbUrl: Course['thumbUrl'];

  @ApiModelProperty({ type: Number })
  authorId: Course['authorId'];

  @ApiModelProperty({type: LessonDTO})
  lesson: Course['lesson'];


}
