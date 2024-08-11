import { Body, Controller, Post } from "@nestjs/common";
import { AlunoService } from "./aluno.service";
import { CreateAlunoDto } from "./dto/createAluno.dto";

@Controller('/app')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  @Post('/aluno')
  async createAluno(@Body() data:CreateAlunoDto) {
    return this.alunoService.createAluno(data);
  }
}