import { ApiModelProperty } from '@nestjs/swagger';
import { Lesson } from '../entity';
import { IsNotEmpty } from 'class-validator';

export class NewLessonDTO {
  @ApiModelProperty({ type: String })
  @IsNotEmpty()
  title: Lesson['title'];

  @ApiModelProperty({ type: Lesson['course'] })
  @IsNotEmpty()
  course: Lesson['course'];
}
