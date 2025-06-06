export type TruckProps = {
    id: string
    plate: string
    model: string
    year_manufacture: number
    load_capacity: string
}

type TruckCardProps = {
    truck: TruckProps
    onViewTrips?: (truckId: string) => void
}


export function TruckCard({ truck, onViewTrips }: TruckCardProps) {
    return (
        <div className="border rounded-xl p-4 shadow-md  bg-green-200 mb-2">
                <p className="uppercase"><strong>Placa: </strong>{truck.plate}</p>
                <p className="text-sm uppercase"><strong>Modelo: </strong>{truck.model}</p>
                <p className="text-sm uppercase"><strong>Modelo: </strong>{truck.year_manufacture}</p>
                <p className="text-sm uppercase"><strong>Capacidade: </strong>{truck.load_capacity}</p>
                <button
                    className="bg-blue-500 text-gray-100 px-4 py-2 rounded mt-2 cursor-pointer hover:bg-blue-600 transition ease-linear"
                    onClick={() => onViewTrips && onViewTrips(truck.id)}
                >
                    Ver viagens
                </button>
        </div>
    )
}