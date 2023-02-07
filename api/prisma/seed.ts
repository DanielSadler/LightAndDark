import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { hashPassword } from "../src/utils";

const prisma = new PrismaClient();

async function main() {
  await prisma.users.createMany({
    data: new Array(10).fill(0).map((_) => ({
      email: faker.internet.email(undefined, undefined, "contic.co.uk"),
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      hashed_password: hashPassword("Password123!"),
      title: faker.name.prefix(),
    })),
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
