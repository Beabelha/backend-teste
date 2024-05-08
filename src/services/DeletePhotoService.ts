import prismaClient from "../Prisma";

interface DeletePhotoProps {
    id: string;
}

class DeletePhotoService {
    async execute({ id }: DeletePhotoProps) {
        if (!id) {
            throw new Error("Não foi possivel deletar")
        }

        const findPhoto = await prismaClient.photo.findFirst({
            where: {
                id: id
            }
        })

        if(!findPhoto){
            throw new Error("Foto não existe.")
        }

        await prismaClient.photo.delete({
            where: {
                id: findPhoto.id
            }
        })

        return {message: "Deletado com sucesso"}
    }
}

export { DeletePhotoService }