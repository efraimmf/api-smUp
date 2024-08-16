import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { MatriculaService } from "./matricula.service";
import { CreateMatriculaDto } from "./dto/createMatricula.dto";
import { UpdateMatriculaDto } from "./dto/updateMatricula.dto";

@Controller('/app')
export class MatriculaController {
  constructor(private readonly matriculaService: MatriculaService) {}

  @Post('/matricula')
  async createMatricula(@Body() data: CreateMatriculaDto){
    return this.matriculaService.createMatricula(data);
  }

  @Get('/matricula/')
  async getAllMatriculas() {
    return this.matriculaService.getAllMatriculas()
  }

  @Get('/matricula/:id')
  async getMatricula(@Param('id') id: string) {
    return this.matriculaService.getMatricula(id);
  }

  @Put('/matricula/:id')
  async updateMatricula(@Param('id') id: string, @Body() data: UpdateMatriculaDto){
    return this.matriculaService.updateMatricula(id, data);
  }

  @Delete('/matricula/:id')
  async deleteMatricula(@Param("id") id: string){
    return this.matriculaService.deleteMatricula(id);
  }
}