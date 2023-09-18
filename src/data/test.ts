import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function prismaExample() {
  const newProduct = await prisma.product.create({
    data: {
      name: "Calzones CK x6 u.",
      description: "Ropa interior",
      category: "Indumentaria",
      price: 30000,
    },
  });

  const products = await prisma.product.findMany();
  return products;
}
