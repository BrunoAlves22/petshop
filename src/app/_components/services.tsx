"use client";

import useEmblaCarousel from "embla-carousel-react";
import {
  IconArrowRight,
  IconArrowLeft,
  IconScissors,
  IconMedicineSyrup,
  IconCar,
  IconHotelService,
  IconClock,
} from "@tabler/icons-react";

const services = [
  {
    title: "Banho e tosa",
    description:
      "Oferecemos serviços de banho e tosa para cães e gatos. Nossa equipe é especializada e utiliza produtos de qualidade.",
    icon: <IconScissors />,
    duration: "1h",
    price: "R$ 50,00",
  },
  {
    title: "Clínica veterinária",
    description:
      "Atendimento especializado para cães e gatos. Nossa equipe é formada por profissionais qualificados e apaixonados por animais.",
    icon: <IconMedicineSyrup />,
    duration: "1h",
    price: "R$ 100,00",
  },
  {
    title: "Hotel para pets",
    description:
      "Oferecemos serviço de hotel para pets. Aqui, seu pet é tratado com todo o carinho e respeito que merece.",
    icon: <IconHotelService />,
    duration: "1 dia",
    price: "R$ 150,00",
  },
  {
    title: "Transporte",
    description:
      "Oferecemos serviço de transporte para o seu pet. Garanta o bem-estar do seu melhor amigo.",
    icon: <IconCar />,
    duration: "1h",
    price: "R$ 30,00",
  },
];

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: { "(min-width: 768px)": { slidesToScroll: 3 } },
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
        <div className="space-y-8" data-aos="zoom-in">
          <h2 className="text-3xl font-bold">Nossos serviços</h2>

          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
                  >
                    <article className="bg-[#1E293B] text-white rounded-3xl p-6 space-y-4 h-full flex flex-col">
                      <div className="flex-1 flex items-start justify-between">
                        <div className="flex flex-col items-start gap-2">
                          <span className="text-3xl">{service.icon}</span>
                          <div className="space-y-1">
                            <h3 className="text-lg font-bold">
                              {service.title}
                            </h3>
                            <p className="text-sm md:text-base font-light text-zinc-400 select-none">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="border border-zinc-100/20 rounded-3xl"></div>

                      <div className="flex items-center gap-2">
                        <IconClock className="w-6 h-6" />
                        <span className="text-sm">{service.duration}</span>
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
