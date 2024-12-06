import { SomePets, WeDeliver } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <>
       <div className="relative flex flex-col items-center justify-center  p-2 md:p-6 h-[calc(100vh-115px)] ">
          <div className="absolute top-1/2 lg:top-1/4 transform -translate-y-1/2 text-center z-10">
            <h1 className="text-orange-500 text-3xl lg:text-4xl font-extrabold drop-shadow-xl">
              Aqui encontraras <br/>
              <span className="text-blue-500 font-extrabold">El proximo integrante</span>
            </h1>
            <p className="text-white text-lg md:text-3xl lg:text-3xl font-bold bg-cyan-400 rounded-lg p-1">
              De tu hogar.
            </p>
          </div>

          <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center">
            {/* Imagen izquierda */}
            <div className="absolute -top-[1%] sm:top-0 left-[10%] sm:left-[15%] md:left-[15%] w-44 h-44 sm:w-48 sm:h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="https://images.pexels.com/photos/2409503/pexels-photo-2409503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Yorkshire Terrier"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>

            {/* Imagen derecha */}
            <div className="absolute top-[0] sm:top-0 right-[10%] sm:right-[15%] md:right-[15%] w-44 h-44 sm:w-48 sm:h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="https://images.pexels.com/photos/29443619/pexels-photo-29443619/free-photo-of-retrato-de-un-perro-pastor-aleman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="San Bernardo"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>

            {/* Imagen inferior */}
            <div className="absolute bottom-0 left-1/2  top-[60%] md:top-[40%] transform -translate-x-1/2 w-48 h-48 sm:w-44 sm:h-44 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Bulldog Inglés"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

        {/* TODO: te entregamos */}
        <WeDeliver/>

        {/* TODO: algunos de los cachorros */}
        <SomePets/>
        
        {/* TODO: testimonios o reseñas */}


    </>
  );
}
