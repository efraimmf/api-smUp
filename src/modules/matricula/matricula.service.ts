import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma.service";
import { CreateMatriculaDto } from "./dto/createMatricula.dto";
import { UpdateMatriculaDto } from "./dto/updateMatricula.dto";

@Injectable()
export class MatriculaService {
  constructor(private readonly prismaService: PrismaService) {}

  async createMatricula(data: CreateMatriculaDto) {
    return this.prismaService.matricula.create({
      data: {
        alunoid: data.alunoId,
        turmas: {
          connect: data.turmaId.map(turmaId=>({id: turmaId}))}
      }
    });
  }

  async getAllMatriculas() {
    return this.prismaService.matricula.findMany()
  }

  async getMatricula(id: string) {
    return this.prismaService.matricula.findMany({
      where:{id}
    });
  }

  async updateMatricula(id: string, data: UpdateMatriculaDto) {
    return this.prismaService.matricula.update({
      where:{ id },
        data: {
          alunoid: data.alunoId,
          turmas: {
            connect: data.turmaId.map(turmaId=>({id: turmaId}))}
        }
    });
  }

  async deleteMatricula(id: string){
    return this.prismaService.matricula.delete({
      where: {id}
    })
  }
}