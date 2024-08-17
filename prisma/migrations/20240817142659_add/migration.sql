-- prisma/migrations/20240817142659_add/migration.sql

-- Adicionar a coluna `professorid` com um valor temporário específico
ALTER TABLE "Turma" ADD COLUMN "professorid" TEXT NOT NULL DEFAULT '8116b3c4-1db5-4a29-9fa6-dc14b795b5a4';

-- Remover o valor padrão temporário após a migração
ALTER TABLE "Turma" ALTER COLUMN "professorid" DROP DEFAULT;

-- Adicionar a chave estrangeira
ALTER TABLE "Turma" ADD CONSTRAINT "Turma_professorid_fkey" FOREIGN KEY ("professorid") REFERENCES "Professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;