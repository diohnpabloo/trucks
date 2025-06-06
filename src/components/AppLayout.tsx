import { Outlet } from "react-router"
import { Header } from "./Header"

export function AppLayout() {
    return (
        <div className="w-screen h-screen bg-gray-400 flex flex-col text-gray-100">
            <Header />
            <main className="flex-1 flex items-center justify-center flex-col gap-2">
                <div className="bg-gray-500 p-8 rounded-md flex flex-col gap-4">
                    <Outlet />
                </div>

            </main>


        </div>
    )
}