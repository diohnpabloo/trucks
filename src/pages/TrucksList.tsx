import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

import type { TruckProps } from "../components/TruckCard"

import { api } from "../services/api"

import { TruckCard } from "../components/TruckCard"

export const mockTrucks = [
    {
        id: 1,
        plate: "pmt4a51",
        model: "bros",
        year: 2020,
        capacity: "120.00",
    },

    {
        id: 2,
        plate: "xyz6743",
        model: "scania r450",
        year: 2021,
        capacity: "1320.00",
    },

]

export function TrucksList() {
    const [trucks, setTrucks] = useState<TruckProps []>([])
    const navigate = useNavigate()

    function handleViewTrips(truckId: string) {
        navigate(`/trips/${truckId}`)
    }

    async function handleListTrucks() {
        try {
            const trucksList = await api.get("/trucks")
            setTrucks(trucksList.data)
        } catch (error) {
             alert("Erro ao listar caminhões:")
        }
    }
    useEffect(() => {
        handleListTrucks()
    }, [])
    return (
        <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className="text-xl font-bold">Lista de caminhões</h1>

            <div className="grid grid-cols-2 gap-4">
                {trucks.map((truck) => (
                    <TruckCard key={truck.id} truck={truck} onViewTrips={handleViewTrips} />
                ))}
            </div>
        </div>

    )
}