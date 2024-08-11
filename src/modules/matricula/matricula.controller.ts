import { Body, Controller, Post } from "@nestjs/common";
import { MatriculaService } from "./matricula.service";
import { CreateMatriculaDto } from "./dto/createMatricula.dto";

@Controller('/app')
export class MatriculaController {
  constructor(private readonly matriculaService: MatriculaService) {}

  @Post('/matricula')
  async createMatricula(@Body() data: CreateMatriculaDto){
    return this.matriculaService.createMatricula(data);
  }
}