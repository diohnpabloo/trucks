import { Routes, Route } from "react-router"

import { TrucksRegister } from "../pages/TrucksRegister"
import { TrucksList } from "../pages/TrucksList"
import { TripRegister } from "../pages/TripRegister"
import { TripList } from "../pages/TripLIst"


import { AppLayout } from "../components/AppLayout"

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route path="/" element={<TrucksRegister />} />
                <Route path="/trucks" element={<TrucksList />} />
                <Route path="/trips" element={<TripRegister />} />
                <Route path="/trips/:truckId" element={<TripList />} />
            </Route>
        </Routes>
    )
}