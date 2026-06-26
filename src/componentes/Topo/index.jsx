import Image from "next/image";
import Link from "next/link";
import estilos from "./Topo.module.css";

export default function Topo() {
    return (
        <header className={estilos.header}>
            <div className={estilos.container}>
                <div className={estilos.logo}>
                    <Image src="/logo.png" alt="Logo da Sorveteria" width={100} height={100} />
                </div>
                <nav className={estilos.nav}>
                    <Link href="/">Home</Link>
                    <Link href="/Sabores">Sabores</Link>
                    <Link href="/Sobre">Sobre</Link>
                </nav>
            </div>
        </header>
    );
}
