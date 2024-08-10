import { Injectable } from '@nestjs/common';
import { PrismaService } from "../../prisma.service";
import { CreateProfessorDto } from "./dto/createProfessor.dto";

@Injectable()
export class ProfessorService {
  constructor(private readonly prismaService: PrismaService) {}

  async createProfessor(data: CreateProfessorDto) {
    const professor = await this.prismaService.professor.create({data});
    return professor;
  }
}
