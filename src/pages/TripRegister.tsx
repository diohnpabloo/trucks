import { useEffect, useState } from "react"
import { useForm, Controller } from "react-hook-form"

import axios from "axios"
import { ZodError } from "zod"

import { tripsRegisterFormSchema } from "../validations/tripsValidation"

import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { api } from "../services/api"

import type { TruckProps } from "../components/TruckCard"


type TripFormData = {
    truck_id: string
    departure_date: string
    destination: string
    cargo: string
    km_start: string
    km_end?: string
}


export function TripRegister() {
    const [trucks, setTrucks] = useState<TruckProps[]>([])
    const [isLoading, setIsLoading] = useState(false)

    const { control, handleSubmit } = useForm<TripFormData>({
        defaultValues: {
            truck_id: "",
            departure_date: "",
            destination: "",
            cargo: "",
            km_start: "",
            km_end: ""
        }
    })

    async function handleFormTripSubmit(data: TripFormData) {
        console.log("Form data:", data)
        try {
            setIsLoading(true)
            const parsedData = tripsRegisterFormSchema.parse(data)
            await api.post("/trips", parsedData)

            alert("Viagem registrada com sucesso!")

        } catch (error) {
            if (error instanceof ZodError) {
                return alert(error.issues[0].message)
            }

            if(axios.isAxiosError(error)) {
                const message = error.response?.data?.message
                return alert(message || "Erro ao registrar viagem")
            }
            alert("Erro ao registrar viagem")

        }
    }

    async function handleListTrucks() {
        try {
            const trucksList = await api.get("/trucks")
            setTrucks(trucksList.data)
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const message = error.response?.data?.message || "Erro ao listar caminhões"
                return alert(message)
            }
        }
    }

    useEffect(() => {
        handleListTrucks()
    }, [])

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleFormTripSubmit)}>
            <h2>Registrar viagem</h2>
            <Controller
                control={control}
                name="truck_id"
                render={({ field }) => (
                    <select {...field}>
                        <option className="uppercase" value="">SELECIONE UM CAMINHÃO</option>
                        {trucks.map(truck => (
                            <option className="uppercase" key={truck.id} value={truck.id}>{truck.plate} - {truck.model}</option>
                        ))}
                    </select>
                )}
            />

            <Controller
                control={control}
                name="departure_date"
                render={({ field }) => (
                    <Input {...field} legend="Data da partida" type="date" />
                )}
            />

            <Controller
                control={control}
                name="destination"
                render={({ field }) => (
                    <Input {...field} legend="Destino" />
                )}
            />
            <Controller
                control={control}
                name="cargo"
                render={({ field }) => (
                    <Input {...field} legend="Carga" />
                )}
            />
            <Controller
                control={control}
                name="km_start"
                render={({ field }) => (
                    <Input {...field} legend="Km inicial" />
                )}
            />
            <Controller
                control={control}
                name="km_end"
                render={({ field }) => (
                    <Input {...field} legend="Km final" />
                )}
            />

            <Button type="submit">Cadastrar viagem</Button>
        </form>
    )
}