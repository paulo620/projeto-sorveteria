import Image from "next/image";
import estilos from './Rodape.module.css';

export default function Rodape() {
    return (
        <footer className={estilos.rodape}>
            <div className={estilos.container_rodape}>
                <div>
                    <Image src="/logo.png" alt="Logo da Sorveteria" width={200} height={200} />
                </div>
                <div className={estilos.container_texto}>
                    <h3>ENDEREÇO</h3>
                    <p>Av. Bernardino de Campos, </p>  
                    <p>98 São Paulo, SP 12355-678.</p>
                </div>
                <div className={estilos.container_texto}>
                    <h3>CONTATO</h3>
                    <p>info@sorveteria.com</p>
                    <p>(11) 1234-5678</p>
                </div>
                <div className={estilos.container_texto}>
                    <h3>HORÁRIO</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
                <div>
                </div>
            </div>
            <p className={estilos.container_texto_rodape}>© 2024 Sorveteria Artesanal. Todos os direitos reservados.</p>
        </footer>
    );
}