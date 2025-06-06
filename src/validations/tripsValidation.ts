import { z } from "zod"

export const tripsRegisterFormSchema = z.object({
    truck_id: z.string().min(1, "Caminhão é obrigatório"),
    departure_date: z
        .string()
        .min(1, "Data de partida é obrigatória")
        .refine((value) => !isNaN(Date.parse(value)), {
            message: "Data de partida deve ser uma data válida",
        }),
    destination: z.string().min(1, "Destino é obrigatório"),
    cargo: z
        .string()
        .optional()
        .transform((value) => Number(value))
        .refine((value) => !isNaN(value), {
            message: "Carga deve ser um número",
        }),
    km_start: z
        .string()
        .min(1, "Km inicial é obrigatório")
        .transform((value) => Number(value))
        .refine((value) => !isNaN(value), {
            message: "Km inicial deve ser um número",
        }),
    km_end: z
        .string()
        .min(1, "Km final é obrigatório")
        .transform((value) => Number(value))
        .refine((value) => !isNaN(value), {
            message: "Km final deve ser um número",
        }),
})
