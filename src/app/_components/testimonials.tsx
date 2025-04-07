"use client";

import useEmblaCarousel from "embla-carousel-react";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";
import Tutor1 from "../../../public/tutor1.png";
import Image from "next/image";

const testimonials = [
  {
    name: "Ana S.",
    message:
      "Serviço incrível! Meu cachorro nunca esteve tão feliz depois de um banho. A equipe é super cuidadosa e atenciosa!",
    image: Tutor1,
  },
  {
    name: "Carlos M.",
    message:
      "O melhor petshop que já fui! Atendimento de primeira e produtos de alta qualidade para o meu gatinho.",
    image: Tutor1,
  },
  {
    name: "Mariana L.",
    message:
      "Minha cadela sempre teve medo de petshops, mas aqui ela se sentiu em casa. Muito carinho e profissionalismo!",
    image: Tutor1,
  },
  {
    name: "Rafael D.",
    message:
      "Além do banho e tosa impecáveis, os funcionários realmente se importam com os animais. Recomendo demais!",
    image: Tutor1,
  },
  {
    name: "Juliana T.",
    message:
      "Ótimo atendimento, ambiente limpo e cheiroso. Meu pet adorou e eu também!",
    image: Tutor1,
  },
  {
    name: "Fernando R.",
    message:
      "Já experimentei vários petshops, mas esse ganhou meu coração. Cuidaram do meu cachorro como se fosse deles!",
    image: Tutor1,
  },
  {
    name: "Laura P.",
    message:
      "Profissionais extremamente qualificados e atenciosos. Meu gato voltou lindo e cheirosinho!",
    image: Tutor1,
  },
  {
    name: "Roberto C.",
    message:
      "Levo meu cachorro aqui há anos e nunca tive do que reclamar. Sempre impecáveis!",
    image: Tutor1,
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  function scrollToPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollToNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-[#FDF6EC] py-16">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Depoimentos</h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((item, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                    <article className="bg-[#1E293B] text-white rounded-3xl p-6 space-y-4 h-full flex flex-col">
                      <div className="flex flex-col items-center gap-4 text-center">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden">
                          <Image
                            src={item.image}
                            alt="Tutor"
                            fill
                            sizes="96px"
                            quality={100}
                            priority
                            className="object-cover rounded-full"
                          />
                        </div>

                        <p className="text-lg">{item.message}</p>

                        <p className="font-bold">{item.name}</p>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="absolute top-1/2 -translate-y-1/2 -left-3 bg-white rounded-full p-2 shadow-md"
              onClick={scrollToPrev}
            >
              <IconArrowLeft className="w-6 h-6" />
            </button>

            <button
              className="absolute top-1/2 -translate-y-1/2 -right-3 bg-white rounded-full p-2 shadow-md"
              onClick={scrollToNext}
            >
              <IconArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
