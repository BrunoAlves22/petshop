import DogHero from "../../../public/hero-dog.webp";
import CatHero from "../../../public/cat-hero.png";
import Image from "next/image";
import { IconBrandWhatsapp } from "@tabler/icons-react";

export function Hero() {
  return (
    <section className="bg-[#E84C3D] text-white relative overflow-hidden">
      <Image
        src={DogHero}
        alt="Cachorro feliz"
        fill
        sizes="100vw"
        className="object-cover md:object-contain opacity-60 lg:hidden"
        quality={100}
        priority
      />

      <div className="absolute inset-0 bg-black/15 lg:hidden"></div>

      <div className="container mx-auto px-4 pt-16 pb-16 md:pb-0 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4" data-aos="fade-right">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl leading-10">
              Seu pet merece o melhor atendimento e cuidado que só a Petshop
              pode oferecer.
            </h1>

            <p className="lg:text-lg">
              Agende uma consulta e garanta o bem-estar do seu melhor amigo.
            </p>

            <a
              href="#"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 duration-300 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
            >
              <IconBrandWhatsapp size={24} />
              Contato via WhatsApp
            </a>

            <div className="mt-8">
              <p className="text-sm mb-4">
                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b>{" "}
                de desconto na primeira consulta
              </p>

              <div className="flex mt-4">
                <div className="w-32 h-fit hidden lg:block">
                  <Image
                    src={CatHero}
                    alt="Gato feliz"
                    className="object-fill"
                    quality={100}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block h-full relative" data-aos="fade-up">
            <Image
              src={DogHero}
              alt="Cachorro feliz"
              fill
              sizes="(max-width: 768px) 0vw, 50vw"
              className="object-contain"
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
}
