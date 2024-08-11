import { Module } from "@nestjs/common";
import { PrismaService } from "../../prisma.service";
import { MatriculaService } from "./matricula.service";
import { MatriculaController } from "./matricula.controller";

@Module({
  controllers: [MatriculaController],
  providers: [PrismaService, MatriculaService],
})

export class MatriculaModule {}