import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma.service";
import { CreateAlunoDto } from "./dto/createAluno.dto";

@Injectable()
export class AlunoService {
  constructor(private readonly prismaService: PrismaService) {}

  async createAluno(data: CreateAlunoDto) {
    return this.prismaService.aluno.create({data});
  }
}