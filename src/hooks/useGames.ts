import {useState, useEffect} from "react";
import apiClients from '../services/api-clients';
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenre";
import { GameQuery } from "../App";

export interface platform{
    id : number;
    name : string;
    slug : string;
}
export interface Game{
    id : number;
    name : string;
    image_background:string;
    parent_platform: {platform:platform}[];
    metacritic:number;
}


const useGames = (gameQuery:GameQuery)=> useData<Game>('/games',{params:{genres:gameQuery.genre?.id, platforms: gameQuery.platform?.id,ordering:gameQuery.sortOrder,search:gameQuery.searchText}},[gameQuery]);

export default useGames;