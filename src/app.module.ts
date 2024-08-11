import { Module } from '@nestjs/common';
import { PrismaService } from "./prisma.service";
import { ProfessorModule } from "./modules/professor/professor.module";
import { AlunoModule } from "./modules/aluno/aluno.module";
import { MatriculaModule } from "./modules/matricula/matricula.module";
import { TurmaModule } from "./modules/turma/turma.module";

@Module({
  imports: [ProfessorModule, AlunoModule, MatriculaModule, TurmaModule],
  providers: [PrismaService],
})
export class AppModule {}
