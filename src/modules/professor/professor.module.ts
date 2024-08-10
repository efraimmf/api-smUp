import { Module } from '@nestjs/common';
import { ProfessorService } from "./professor.service";
import { ProfessorController } from "./professor.controller";
import { PrismaService } from "../../prisma.service";

@Module({
  imports: [],
  controllers: [ProfessorController],
  providers: [PrismaService, ProfessorService],
})
export class ProfessorModule {}