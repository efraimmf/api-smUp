import { Module } from '@nestjs/common';
import { PrismaService } from "./prisma.service";
import { ProfessorModule } from "./modules/professor/professor.module";

@Module({
  imports: [ProfessorModule],
  providers: [PrismaService],
})
export class AppModule {}
