/*
  Warnings:

  - The `citationStyles` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `languages` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `disciplines` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `specialization` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `additionalSoftware` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "FreelancerApplication" ALTER COLUMN "status" SET DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "citationStyles",
ADD COLUMN     "citationStyles" TEXT[],
DROP COLUMN "languages",
ADD COLUMN     "languages" TEXT[],
DROP COLUMN "disciplines",
ADD COLUMN     "disciplines" TEXT[],
DROP COLUMN "specialization",
ADD COLUMN     "specialization" TEXT[],
DROP COLUMN "additionalSoftware",
ADD COLUMN     "additionalSoftware" TEXT[];
