import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma.service";
import { CreateAlunoDto } from "./dto/createAluno.dto";
import { UpdateAlunoDto } from "./dto/updateAluno.dto";

@Injectable()
export class AlunoService {
  constructor(private readonly prismaService: PrismaService) {}

  async createAluno(data: CreateAlunoDto) {
    return this.prismaService.aluno.create({data});
  }

  async getAllAlunos() {
    return this.prismaService.aluno.findMany();
  }

  async getAluno(nome: string) {
    return this.prismaService.aluno.findMany({
      where:{
        nome: {contains: nome, mode:'insensitive'}
      }
    });
  }

  async updateAluno(id: string, data: UpdateAlunoDto) {
    return this.prismaService.aluno.update({
      where:{
        id:id},
        data: data
    });
  }

  async deleteAluno(id: string) {
    return this.prismaService.aluno.delete({
      where:{
        id:id }
    })
  }
}