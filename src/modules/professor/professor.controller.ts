import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProfessorService } from "./professor.service";
import { CreateProfessorDto } from "./dto/createProfessor.dto";
import { UpdateProfessorDto } from "./dto/updateProfessor.dto";


@Controller('/app')
export class ProfessorController {
  constructor(private readonly professorService: ProfessorService) {}

  @Post('/professor')
  async createProfessor(@Body() data:CreateProfessorDto) {
    return this.professorService.createProfessor(data);
  }

  @Get('/professor')
  async getAllProfessor() {
    return this.professorService.getAllProfessor();
  }

  @Get('/professor/:nome')
  async getProfessor(@Param('nome') nome: string) {
    return this.professorService.getProfessor(nome);
  }

  @Put('/professor/:id')
  async updateProfessor(@Param('id') id: string, @Body() data: UpdateProfessorDto) {
    return this.professorService.updateProfessor(id, data);
  }

  @Delete('/professor/:id')
  async deleteProfessor(@Param('id') id: string) {
    return this.professorService.deleteProfessor(id);
  }
}