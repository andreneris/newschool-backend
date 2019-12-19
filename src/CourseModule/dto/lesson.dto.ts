import { CourseDTO } from './course.dto';
import { Lesson } from './../entity';
import { ApiModelProperty } from "@nestjs/swagger";

export class LessonDTO {
    @ApiModelProperty({type:Number})
    id: Lesson['id'];

    @ApiModelProperty({type:String})
    title: Lesson['title'];

    @ApiModelProperty({type:CourseDTO})
    course: Lesson['course']
}