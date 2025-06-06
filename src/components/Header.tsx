import { Link } from "react-router"

export function Header() {
    return (
        <header className="bg-green-100 p-8 flex items-center justify-center">
            <nav>
                <ul className="flex gap-8">
                    <li><Link to="/" className="hover:text-green-200 transition ease-linear">Cadastrar caminhão</Link></li>
                    <li><Link to="/trucks" className="hover:text-green-200 transition ease-linear">Lista de caminhões</Link></li>
                    <li><Link to="/trips" className="hover:text-green-200 transition ease-linear">Cadastrar viagem</Link></li>
                </ul>
            </nav>
        </header>
    )
}