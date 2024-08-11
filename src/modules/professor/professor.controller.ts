import { Body, Controller, Post } from "@nestjs/common";
import { ProfessorService } from "./professor.service";
import { CreateProfessorDto } from "./dto/createProfessor.dto";


@Controller('/app')
export class ProfessorController {
  constructor(private readonly professorService: ProfessorService) {}

  @Post('/professor')
  async createProfessor(@Body() data:CreateProfessorDto) {
    return this.professorService.createProfessor(data);
  }
}