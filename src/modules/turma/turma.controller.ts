import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { TurmaService } from "./turma.service";
import { CreateTurmaDto } from "./dto/createTurma.dto";
import { UpdateTurmaDto } from "./dto/updateTurma.dto";

@Controller('/app')
export class TurmaController{
  constructor(private readonly turmaService: TurmaService){}

  @Post('/turma')
  async createTurma(@Body() data: CreateTurmaDto){
    return this.turmaService.createTurma(data);
  }

  @Get('/turma')
  async getAllTurma(){
    return this.turmaService.getAllTurma();
  }

  @Get('/turma:id')
  async getTurma(@Param('id') id: string){
    return this.turmaService.getTurma(id);
  }

  @Put('/turma:id')
  async updateTurma(@Param('id') id: string, @Body() data: UpdateTurmaDto){
    return this.turmaService.updateTurma(id, data);
  }

  @Delete('/turma:id')
  async deleteTurma(@Param('id') id: string){
    return this.turmaService.deleteTurma(id);
  }
}