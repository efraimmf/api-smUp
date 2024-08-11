import { Module } from "@nestjs/common";
import { PrismaService } from "../../prisma.service";
import { AlunoService } from "./aluno.service";
import { AlunoController } from "./aluno.controller";

@Module({
  controllers:[AlunoController],
  providers:[PrismaService, AlunoService],
})

export class AlunoModule {}