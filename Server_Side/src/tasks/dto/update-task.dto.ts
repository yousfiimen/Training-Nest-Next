import { z } from 'zod';

export const updateTaskSchema = z.object({
    id: z.string({required_error: "Obligatoire!!!!"}).nonempty(),
    title: z.string({required_error: "Obligatoire!!!!"}).min(2, {message: 'Min 2 caractéres',}).max(10, {message: 'Max 10 caractéres'}).nonempty(),
    description: z.string({required_error: "Obligatoire!!!!"}).min(3, {message: "min de description 3 caractéres"}).nonempty(),
}).required();

export type updateTaskDTO = z.infer<typeof updateTaskSchema>;