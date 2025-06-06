import { z } from "zod"

export const trucksRegisterFormSchema = z.object({
    plate: z.string().trim().min(7, "Placa é obrigatória"),
    model: z.string(),
    year_manufacture: z
        .string({ message: "Digite um número no ano de fabricação" })
        .transform((value) => Number(value))
        .refine((value) => !isNaN(value), {
            message: "Ano de fabricação deve ser um número",
        }),
    load_capacity: z
        .string({ message: "Digite um número na capacidade de carga" })
        .transform((value) => Number(value))
        .refine((value) => !isNaN(value), {
            message: "Capacidade de carga deve ser um número",
        }),
})