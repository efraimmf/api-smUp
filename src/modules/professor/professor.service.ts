import { Injectable } from '@nestjs/common';
import { PrismaService } from "../../prisma.service";
import { CreateProfessorDto } from "./dto/createProfessor.dto";
import { UpdateProfessorDto } from "./dto/updateProfessor.dto";

@Injectable()
export class ProfessorService {
  constructor(private readonly prismaService: PrismaService) {}

  async createProfessor(data: CreateProfessorDto) {
    return this.prismaService.professor.create({data});
  }

  async getAllProfessor(){
    return this.prismaService.professor.findMany();
  }

  async getProfessor(nome: string){
    return this.prismaService.professor.findMany({
      where:{
        nome: {contains: nome, mode:'insensitive'}
      }
    });
  }

  async updateProfessor(id: string, data: UpdateProfessorDto) {
    return this.prismaService.professor.update({
      where:{
        id:id},
        data: data
    });
  }

  async deleteProfessor(id: string){
    return this.prismaService.professor.delete({
      where:{
        id:id}
    })
  }
}