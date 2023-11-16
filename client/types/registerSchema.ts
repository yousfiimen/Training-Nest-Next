import * as z from "zod";
import { useForm } from "react-hook-form"


export const registerSchema = z.object({
    email:  z.string({required_error: "Required field"}).email().nonempty(),
    password: z.string({required_error: "Required field"}).nonempty()
}).required();

export type registerValues = z.infer<typeof registerSchema> 