import Image from "next/image";
import Link from "next/link";
import logoAx from "@/assets/logo.png";
import logoUniao from "@/assets/parceria-logo-uniao.png";

export default function Footer() {
  return (
    <footer className="bg-[#161616] text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-8">
          <Image src={logoAx} alt="Logo AX" width={250} height={50} />
          <Image src={logoUniao} alt="Logo União" width={250} height={50} />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex flex-wrap gap-4">
            <Link
              target="_blank"
              href="https://www.axnegocioseinvestimentos.com.br/pol%C3%ADtica-de-privacidade"
              className="hover:text-yellow-400 transition duration-300"
            >
              Política de Privacidade
            </Link>
            <Link
              target="_blank"
              href="https://www.axnegocioseinvestimentos.com.br/pol%C3%ADtica-de-cookies"
              className="hover:text-yellow-400 transition duration-300"
            >
              Política de Cookies
            </Link>
          </div>
          <p>
            &copy; 2025 AX Negócios, Créditos e Investimentos. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
