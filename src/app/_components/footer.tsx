import primier from "../../../public/primier.png";
import royal from "../../../public/royal.png";
import whiskas from "../../../public/whiskas.png";
import golden from "../../../public/golden.png";
import natural from "../../../public/natural.png";
import Image from "next/image";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandX,
} from "@tabler/icons-react";

const products = [
  { name: "Primier", image: primier },
  { name: "Royal", image: royal },
  { name: "Whiskas", image: whiskas },
  { name: "Golden", image: golden },
  { name: "Natural", image: natural },
  { name: "Natural", image: natural },
];

export function Footer() {
  return (
    <section className="bg-[#e84c3d] py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="border-b border-white/20 pb-8">
          <h4 className="text-3xl font-semibold mb-8 text-center">
            Marcas com as quais trabalhamos
          </h4>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg flex items-center justify-center"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={50}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div className="space-y-4">
            <h4 className="text-xl font-semibold mb-4">Sobre nós</h4>
            <p>
              A Petshop é uma clínica veterinária que preza pelo bem-estar dos
              animais e pela satisfação dos donos.
            </p>

            <a
              href="#"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 duration-300 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
            >
              <IconBrandWhatsapp className="w-6 h-6" />
              Contato via WhatsApp
            </a>
          </div>

          <div className="my-4 md:my-0">
            <h4 className="text-xl font-semibold mb-4">Redes Sociais</h4>
            <ul className="flex flex-row gap-4 items-center cursor-pointer">
              <li>
                <IconBrandFacebook className="w-6 h-6 hover:scale-110 duration-300" />
              </li>
              <li>
                <IconBrandInstagram className="w-6 h-6 hover:scale-110 duration-300" />
              </li>
              <li>
                <IconBrandX className="w-6 h-6 hover:scale-110 duration-300" />
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li>
                <a href="#">(11) 99999-9999</a>
              </li>
              <li>
                <a href="#">Rua dos Bobos, 0 - São Paulo/SP</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
}
