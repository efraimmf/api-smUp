import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma.service";
import { CreateTurmaDto } from "./dto/createTurma.dto";
import { UpdateTurmaDto } from "./dto/updateTurma.dto";

@Injectable()
export class TurmaService{
  constructor(private readonly prismaService: PrismaService){}

  async createTurma(data: CreateTurmaDto){
    return this.prismaService.turma.create({
      data:{
        disciplina: data.disciplina,
        professor:{
          connect:{id: data.professorId}
        }
      }});
  }

  async getAllTurma(){
    return this.prismaService.turma.findMany();
  }

  async getTurma(id: string){
    return this.prismaService.turma.findMany({
      where:{id}
    })
  }

  async updateTurma(id: string, data: UpdateTurmaDto){
    return this.prismaService.turma.update({
      where:{id}, data
    })
  }

  async deleteTurma(id: string){
    return this.prismaService.turma.delete({
      where:{id}
    })
  }
}