import { LessonMapper } from './../mapper/lesson.mapper';
import { LessonService } from './../service/lesson.service';
import { LessonDTO } from './../dto';
import { Constants } from './../../CommonsModule/constants';
import { ApiUseTags, ApiBearerAuth, ApiOperation, ApiOkResponse, ApiImplicitQuery, ApiCreatedResponse, ApiImplicitBody } from '@nestjs/swagger';
import { Controller, Get, HttpCode, UseGuards, Param, Post, Body, Delete } from '@nestjs/common';
import { NeedRole, RoleGuard } from 'src/CommonsModule';
import { RoleEnum } from 'src/SecurityModule/enum';
import { NewLessonDTO } from '../dto/new-lesson.dto';

@ApiUseTags('Lesson')
@ApiBearerAuth()
@Controller(
  `${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${Constants.LESSON_ENDPOINT}`,
)
export class LessonController {
  constructor(
    private readonly service: LessonService,
    private readonly mapper: LessonMapper,
  ) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ title: 'Get Lessons', description: 'Get all Lessons' })
  @ApiOkResponse({ type: LessonDTO, isArray: true, description: 'All Lessons' })
  @NeedRole(RoleEnum.ADMIN, RoleEnum.ALUNO)
  @UseGuards(RoleGuard)
  public async getAll(): Promise<LessonDTO[]> {
    return this.mapper.toDtoList(await this.service.getAll());
  }

  @Get('/:id')
  @HttpCode(200)
  @ApiOkResponse({ type: LessonDTO })
  @ApiImplicitQuery({
    name: 'id',
    type: Number,
    required: true,
    description: 'Lesson id',
  })
  @ApiOperation({
    title: 'Find Lesson by id',
    description: 'Find Lesson by id',
  })
  @NeedRole(RoleEnum.ADMIN, RoleEnum.ALUNO)
  @UseGuards(RoleGuard)
  public async findById(@Param('id') id: LessonDTO['id']): Promise<LessonDTO> {
    return this.mapper.toDto(await this.service.findById(id));
  }

  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({ type: NewLessonDTO, description: 'Lesson created' })
  @ApiOperation({ title: 'Add lesson', description: 'Creates a new lesson' })
  // @ApiImplicitBody({ name: 'Lesson', type: NewLessonSwagger })
  @NeedRole(RoleEnum.ADMIN)
  @UseGuards(RoleGuard)
  public async add(@Body() lesson: NewLessonDTO): Promise<LessonDTO> {
    return this.mapper.toDto(await this.service.add(lesson));
  }

  // @Put('/:id')
  // @HttpCode(200)
  // @ApiOkResponse({ type: NewLessonDTO })
  // @ApiImplicitQuery({
  //   name: 'id',
  //   type: Number,
  //   required: true,
  //   description: 'Lesson id',
  // })
  // @ApiOperation({ title: 'Update lesson', description: 'Update lesson by id' })
  // @NeedRole(RoleEnum.ADMIN)
  // @UseGuards(RoleGuard)
  // public async update(
  //   @Param('id') id: LessonDTO['id'],
  //   @Body() userUpdatedInfo: UserUpdateDTO,
  // ): Promise<LessonDTO> {
  //   return await this.service.update(
  //     id,
  //     this.mapper.toEntity(userUpdatedInfo as UserDTO),
  //   );
  // }

  @Delete('/:id')
  @HttpCode(200)
  @ApiOkResponse({ type: null })
  @ApiImplicitQuery({
    name: 'id',
    type: Number,
    required: true,
    description: 'Lesson id',
  })
  @ApiOperation({ title: 'Delete lesson', description: 'Delete lesson by id' })
  @NeedRole(RoleEnum.ADMIN)
  @UseGuards(RoleGuard)
  public async delete(@Param('id') id: LessonDTO['id']): Promise<void> {
    await this.service.delete(id);
  }
}
