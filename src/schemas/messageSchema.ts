import {z} from "zod"

export const messageSchema = z.object({
    content: z
    .string()
    .min(10,{message: "content must be at least of 10 chareacters"})
    .max(300,{message:"Content must be not no longer than 300 characters"})

})