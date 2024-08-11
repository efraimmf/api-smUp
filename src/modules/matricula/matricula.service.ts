import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma.service";
import { CreateMatriculaDto } from "./dto/createMatricula.dto";

@Injectable()
export class MatriculaService {
  constructor(private readonly prismaService: PrismaService) {}

  async createMatricula(data: CreateMatriculaDto) {
    return this.prismaService.matricula.create({
      data: {
        alunoid: data.alunoId,
        turmas: {
          connect: { id: data.turmaId },
        },
      },
    });
  }
}
