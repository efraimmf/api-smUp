import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AlunoService } from "./aluno.service";
import { CreateAlunoDto } from "./dto/createAluno.dto";
import { UpdateAlunoDto } from "./dto/updateAluno.dto";

@Controller('/app')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  @Post('/aluno')
  async createAluno(@Body() data:CreateAlunoDto) {
    return this.alunoService.createAluno(data);
  }

  @Get('/aluno')
  async getAllAlunos(){
    return this.alunoService.getAllAlunos();
  }

  @Get('/aluno/:nome')
  async getAluno(@Param('nome') nome: string) {
    return this.alunoService.getAluno(nome);
  }

  @Put('/aluno/:id')
  async updateAluno(@Param('id') id: string, @Body() data: UpdateAlunoDto) {
    return this.alunoService.updateAluno(id, data)
  }

  @Delete('/aluno/:id')
  async deleteAluno(@Param('id') id: string) {
    return this.alunoService.deleteAluno(id);
  }
}