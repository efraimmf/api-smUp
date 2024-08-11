import { Body, Controller, Post } from "@nestjs/common";
import { TurmaService } from "./turma.service";
import { CreateTurmaDto } from "./dto/createTurma.dto";

@Controller('/app')
export class TurmaController{
  constructor(private readonly turmaService: TurmaService){}

  @Post('/turma')
  async createTurma(@Body() data: CreateTurmaDto){
    return this.turmaService.createTurma(data);
  }
}