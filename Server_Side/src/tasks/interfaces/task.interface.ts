import { z } from 'zod';

export const TaskSchema = z.object({
    id: z.string(),
    title: z.string().nonempty(),
    description: z.string().nonempty()
  })
  .required();

export type Task = z.infer<typeof TaskSchema>;