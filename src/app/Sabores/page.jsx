import estilos from "./sabores.module.css";
import Image from "next/image";

export default function Sabores() {
    return (
        <main className={estilos.main}>
            <section className={estilos.container_sabores}>
                <h1>NOSSOS SABORES</h1>
            </section>
            <section className={estilos.container_sabores_sorvete}>
                <h2>SABORES DE SORVETE</h2>
                    <div className={estilos.cards_sabores}>
                        <div className={estilos.sabores_sorvete}>
                            <Image src="/sabor-oreo.png" alt="Sorvete 1" width={300} height={300} />
                            <span>Sorvete de Oreo</span>
                            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                        </div>
                        <div className={estilos.sabores_sorvete}>
                            <Image src="/sabor-pistache.png" alt="Sorvete 2" width={300} height={300} />
                            <span>Sorvete de Pistache</span>
                            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                        </div>
                        <div className={estilos.sabores_sorvete}>
                            <Image src="/sabor-cookies-avela.png" alt="Sorvete 3" width={300} height={300} />
                            <span>Sorvete Cookies & Avelã</span>
                            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                        </div>
                    </div>
                    <div className={estilos.cards_sabores}>
                        <div className={estilos.sabores_sorvete}>
                            <Image src="/sorbet-kiwi.png" alt="Sorvete 4" width={300} height={300} />
                            <span>Sorvete de Kiwi</span>
                            <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                        </div>
                        <div className={estilos.sabores_sorvete}>
                            <Image src="/sorbet-morango.png" alt="Sorvete 1" width={300} height={300} />
                            <span>Sorvete de Morango</span>
                            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                        </div>
                        <div className={estilos.sabores_sorvete}>
                            <Image src="/sorbet-limao.png" alt="Sorvete 5" width={300} height={300} />
                            <span>Sorvete de Limão</span>
                            <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                        </div>
                    </div>
            </section>
        </main>
    );
}
