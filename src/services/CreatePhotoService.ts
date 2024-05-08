import prismaClient from "../Prisma";

interface CreatePhotoProps{
    title: string;
    desc: string;
}

class CreatePhotoService{
    async execute({title, desc}: CreatePhotoProps){
        
        if(!title || !desc){
            throw new Error("Preencha todos os campos, por favor.")
        }

        // console.log(title, desc); 

        const photo = await prismaClient.photo.create({
            data:{
                title,
                desc
            }
        })

        return photo
    }
}

export {CreatePhotoService}