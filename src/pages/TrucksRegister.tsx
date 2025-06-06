import { useState } from "react";
import { Controller, useForm } from "react-hook-form"
import { api } from "../services/api";

import { ZodError } from "zod"
import axios from "axios"

import { trucksRegisterFormSchema } from "../validations/trucksValidation";

import { Button } from "../components/Button";
import { Input } from "../components/Input";

type FormData = {
    plate: string;
    model: string;
    year_manufacture: string;
    load_capacity: string;
}



export function TrucksRegister() {
    const [isLoading, setIsLoading] = useState(false)
    const { control, handleSubmit, reset } = useForm<FormData>({
        defaultValues: {
            plate: "",
            model: "",
            year_manufacture: "",
            load_capacity: "",
        },
    })

    async function handleTrucksRegister(data: FormData) {
        try {
            
            setIsLoading(true)

            const parsedData = trucksRegisterFormSchema.parse(data)

            await api.post("/trucks", parsedData)

            alert("Caminhão cadastrado com sucesso!")

            reset()
        } catch (error) {
            if (error instanceof ZodError) {
                return alert(error.issues[0].message)
            }

            if (axios.isAxiosError(error)) {
                const message = error.response?.data?.message || "Erro ao cadastrar o caminhão"
                return alert(message)
            }
            alert("Não foi possível cadastrar o caminhão.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleTrucksRegister)}>
            <Controller
                control={control}
                name="plate"
                render={({ field }) => (
                    <Input {...field} legend="Placa" placeholder="PMT4A32" />
                )}
            />
            <Controller
                control={control}
                name="model"
                render={({ field }) => (
                    <Input {...field} legend="Modelo" placeholder="modelo" />
                )}
            />

            <Controller
                control={control}
                name="year_manufacture"
                render={({ field }) => (
                    <Input {...field} legend="Ano de fabricação" placeholder="2025" />
                )}
            />

            <Controller
                control={control}
                name="load_capacity"
                render={({ field }) => (
                    <Input {...field} legend="Capacidade" placeholder="1200.76" />
                )}
            />

            <Button type="submit" isLoading={isLoading}>Cadastrar</Button>
        </form>
    )
}