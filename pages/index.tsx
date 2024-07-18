import { useEffect } from "react";

import { Inter } from "next/font/google";
import { useFetchPokemon } from "@/common/hooks/useFetchPokemon";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { fetchPokemon, pokemon } = useFetchPokemon();

  useEffect(() => {
    if (!pokemon) fetchPokemon(1);
  }, [fetchPokemon, pokemon]);

  useEffect(() => {
    const handleEvent = async (event: { detail: { id: number } }) => {
      const { id } = event.detail;
      fetchPokemon(id);
    };

    //@ts-ignore
    window.addEventListener("changePokemon2", handleEvent);

    return () => {
      //@ts-ignore
      window.removeEventListener("changePokemon2", handleEvent);
    };
  }, []);

  if (!pokemon)
    return (
      <div className="flex items-center justify-center min-h-screen p-5 bg-gray-100 min-w-screen">
        <div className="flex space-x-2 animate-pulse">
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        </div>
      </div>
    );

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
    >
      <div className="bg-[#F67055] font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs card-container">
        <img
          className="mb-3 w-32 h-32  mx-auto"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        <h1 className="text-lg text-gray-700">{pokemon.name}</h1>
      </div>
    </main>
  );
}
