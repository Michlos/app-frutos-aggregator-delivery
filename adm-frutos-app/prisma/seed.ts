import { PrismaClient } from '../src/generated/prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {

    const passwordHash = await bcrypt.hash(
        'Admin@123',
        10
    )

    await prisma.user.upsert({
        where: {
            email: 'admin@frutos.com.br'
        },
        update: {},
        create: {
            name: 'Administrador',
            email: 'admin@frutos.com.br',
            passwordHash,
            role: 'ADMIN'
        }
    })
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
  })