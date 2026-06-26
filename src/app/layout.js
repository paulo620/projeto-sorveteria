import "./globals.css";
import Topo from "@/componentes/Topo";
import Rodape from "@/componentes/Rodape";


export const metadata = {
  title: "Sorveteria Delícia Gelada",
  description: "A melhor sorveteria da cidade, oferecendo uma variedade de sabores deliciosos e atendimento de qualidade.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body>
        <Topo />
        {children}
        <Rodape />
      </body>
    </html>
  );
}
