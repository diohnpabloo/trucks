import { Routes, Route } from "react-router"
import { Trucks } from "../pages/Trucks"

export function TrucksRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Trucks />} />
        </Routes>
    )
}