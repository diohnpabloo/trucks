import { BrowserRouter } from "react-router"
import { AppRoutes } from "./trucksRoutes"

export function Routes() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    )
}
