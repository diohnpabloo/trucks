import { BrowserRouter } from "react-router"
import { TrucksRoutes } from "./trucks-routes"

export function Routes() {
    return (
        <BrowserRouter>
            <TrucksRoutes />
        </BrowserRouter>
    )
}
