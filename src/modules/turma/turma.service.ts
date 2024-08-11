import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma.service";
import { CreateTurmaDto } from "./dto/createTurma.dto";

@Injectable()
export class TurmaService{
  constructor(private readonly prismaService: PrismaService){}

  async createTurma(data: CreateTurmaDto){
    return this.prismaService.turma.create({data});
  }
}