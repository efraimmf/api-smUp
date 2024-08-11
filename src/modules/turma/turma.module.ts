import { Module } from "@nestjs/common";
import { PrismaService } from "../../prisma.service";
import { TurmaService } from "./turma.service";
import { TurmaController } from "./turma.controller";

@Module({
  controllers: [TurmaController],
  providers: [PrismaService, TurmaService],
})

export class TurmaModule {}