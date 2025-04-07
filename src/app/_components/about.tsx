import Image from "next/image";
import About1 from "../../../public/about-1.png";
import About2 from "../../../public/about-2.png";
import { IconBrandWhatsapp, IconCheck, IconMapPin } from "@tabler/icons-react";

export function About() {
  return (
    <section className="bg-[#FDF6EC] py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative" data-aos="fade-up-right">
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
            <Image
              src={About1}
              alt="Petshop"
              fill
              quality={100}
              priority
              className="object-cover hover:scale-110 duration-300"
            />
          </div>

          <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 border-white overflow-hidden">
            <Image src={About2} alt="Petshop" fill quality={100} priority />
          </div>
        </div>

        <div className="space-y-6" data-aos="fade-up-left">
          <h2 className="text-3xl font-bold ">Sobre a Petshop</h2>

          <p className="text-lg">
            A Petshop é uma clínica veterinária que oferece atendimento
            especializado para o seu pet. Nossa equipe é formada por
            profissionais qualificados e apaixonados por animais.
          </p>

          <p className="text-lg">
            Aqui, seu pet é tratado com todo o carinho e respeito que merece.
            Agende uma consulta e garanta o bem-estar do seu melhor amigo.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li className="flex flex-row items-center gap-2">
              <IconCheck size={18} className="text-red-500" />
              <p className="text-base">
                <b>Atendimento especializado</b> para cães e gatos
              </p>
            </li>

            <li className="flex flex-row items-center gap-2">
              <IconCheck size={18} className="text-red-500" />
              <p className="text-base">
                <b>Profissionais qualificados</b> e apaixonados por animais
              </p>
            </li>

            <li className="flex flex-row items-center gap-2">
              <IconCheck size={18} className="text-red-500" />
              <p className="text-base">
                <b>Consulta agendada</b> para garantir o bem-estar do seu pet
              </p>
            </li>
          </ul>

          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="#"
              className="bg-green-500 hover:bg-green-600 w-[70%] duration-300 text-white px-5 py-2 rounded-md font-semibold flex items-center justify-start gap-2"
            >
              <IconBrandWhatsapp className="w-6 h-6 md:w-5 md:h-5" />
              Contato via WhatsApp
            </a>

            <a
              href="#"
              className="text-black hover:bg-[#f5deb3] duration-300 px-5 py-2 rounded-md font-semibold flex items-center justify-start w-[70%] gap-2"
            >
              <IconMapPin className="w-6 h-6 md:w-5 md:h-5" />
              Endereço do local
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
