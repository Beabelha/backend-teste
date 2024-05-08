import prismaClient from "../Prisma";

class ListPhotosService{
    async execute(){
        const photos = await prismaClient.photo.findMany()

        return photos;
    }
}

export {ListPhotosService}