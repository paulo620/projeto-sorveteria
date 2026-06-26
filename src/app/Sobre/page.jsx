import Image from "next/image";
import estilos from "./sobre.module.css";

export default function Sobre() {
    return (
        <main className={estilos.main}>
            <section className={estilos.container_sobre}>
                <div className={estilos.texto_sobre}>
                    <h1>SOBRE NÓS</h1>
                    <h2>Nós simplimente amamos sorvete</h2>
                    <p>
                        Nós simplesmente amamos sorvete!
                        Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.
                    </p>
                    <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>
                </div>
            </section>
                <div className={estilos.container_imagens}>
                    <div className={estilos.imagem}>
                        <Image src="/sorveteria.jpg" alt="Sorvete" width={700} height={700} />
                    </div>
                    <div className={estilos.imagem}>
                        <Image src="/sobre-image.jpg" alt="Sorvete" width={700} height={700} />
                    </div>
                </div>
        </main>
    );
}
