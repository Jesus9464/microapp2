import { useCallback, useState } from "react";
import { pokeApi } from "../service";
import { ResponseApi } from "../types/indext";

export const useFetchPokemon = () => {
  const [pokemon, setPokemon] = useState<ResponseApi | null>(null);

  const fetchPokemon = useCallback(async (id: number) => {
    const response = await pokeApi.get(`/${id}`);
    const data = await response.data;
    setPokemon(data);
  }, []);

  return { pokemon, fetchPokemon };
};
