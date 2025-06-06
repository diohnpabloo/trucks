export type TripProps = {
    id: string
    departure_date: string
    cargo: string
    destination: string
    km_start: string
    km_end: string
}

type TripCardProps = {
    trip: TripProps
    onViewTrips?: (tripId: string) => void
}

export function TripCard({ trip }: TripCardProps) {

    const kmStart = parseFloat(trip.km_start)
    const kmEnd = parseFloat(trip.km_end)
    const kmTraveled = isNaN(kmEnd - kmStart) ? "N/A" : (kmEnd - kmStart).toFixed(2)

    const formateDate = new Date(trip.departure_date).toLocaleDateString("pt-BR", {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'UTC',
    })
    return (
        <div className="border rounded-xl p-4 shadow-md bg-green-200 mb-2">
            <p className="uppercase"><strong>Data de partida: </strong>{formateDate}</p>
            <p className="text-sm uppercase"><strong>Destino: </strong>{trip.destination}</p>
            <p className="text-sm uppercase"><strong>Carga: </strong>{trip.cargo}</p>
            <p className="text-sm uppercase"><strong>KM percorrido: </strong>{kmTraveled}</p>
        </div>
    )
}