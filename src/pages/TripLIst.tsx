import { useEffect, useState } from "react"
import { useParams } from "react-router"
import axios from "axios"

import type { TripProps } from "../components/TripCard"
import { TripCard } from "../components/TripCard"

import { api } from "../services/api"


export function TripList() {
    const [trips, setTrips] = useState<TripProps[]>([])
    const { truckId } = useParams()

    async function handleListTrips() {
        try {
            const tripsList = await api.get(`/trips/${truckId}`)
            setTrips(tripsList.data)
        } catch (error) {
            if(axios.isAxiosError(error)) {
                const message = error.response?.data?.message
                return alert(message || "Erro ao listar viagens")
            }
        }
    }

    useEffect(() => {
        if (truckId) {
            handleListTrips()
        }
    }, [truckId])
    return (
        <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className="text-xl font-bold">Lista de viagens</h1>
            <div className="grid grid-cols-2 gap-4">
                {trips.map(trip => (
                    <TripCard key={trip.id} trip={trip} />
                ))}
            </div>
        </div>
    )
}