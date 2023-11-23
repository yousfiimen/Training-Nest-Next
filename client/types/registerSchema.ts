import * as z from "zod";
export const registerSchema = z.object({
    name:  z.string({required_error: "Required field"}).nonempty(),
    email:  z.string({required_error: "Required field"}).email().nonempty(),
    password: z.string({required_error: "Required field"}).nonempty(),
    confirm: z.string({required_error: "Required field"}).nonempty(),
    birthday: z.string({required_error: "Required field"}).nonempty()

}).required()
.refine(data => {
    return data.password === data.confirm; 
}, {
    message: "Les mots de passe ne sont pas identiques",
    path: ["confirm"]
})

export type registerValues = z.infer<typeof registerSchema> 