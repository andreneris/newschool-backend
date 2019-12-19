import { LessonDTO } from './../dto';
import { Constants } from './../../CommonsModule/constants';
import { ApiUseTags, ApiBearerAuth, ApiOperation, ApiOkResponse } from '@nestjs/swagger';
import { Controller, Get, HttpCode, UseGuards } from '@nestjs/common';
import { NeedRole, RoleGuard } from 'src/CommonsModule';
import { RoleEnum } from 'src/SecurityModule/enum';
@ApiUseTags('Lesson')
@ApiBearerAuth()
@Controller(
  `${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${Constants.LESSON_ENDPOINT}`,
)
export class LessonController {
  constructor() {}

    @Get()
    @HttpCode(200)
    @ApiOperation({ title: 'Get Lessons', description: 'Get all Lessons' })
    @ApiOkResponse({ type: LessonDTO, isArray: true, description: 'All Lessons' })
    @NeedRole(RoleEnum.ADMIN, RoleEnum.ALUNO)
    @UseGuards(RoleGuard)
    public async getAll(): Promise<LessonDTO[]> {
        // return this.mapper.toDtoList(await this.service.getAll());
        return;
    }

}
