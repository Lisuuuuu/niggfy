'use client';

import { createContext, useState } from "react"; //rakt

export type PlayerInfo= {
    playing: boolean;
    shuffle: boolean;
    repeat: 'whole' | 'one' | 'none';
    song?: TSong;
}

export type TSong = {
    id: string;
    title: string;
    artist: string;
    album?: string;
    duration: number;
    cover?: string; 
}

const defaultPlayerInfo : PlayerInfo = {
    playing: false,
    shuffle: false,
    repeat: 'none',
}

export type PlaybackStateContextType = [
    PlayerInfo,
    React.Dispatch<React.SetStateAction<PlayerInfo>>,
];

export const PlayerContext = createContext<PlaybackStateContextType>([defaultPlayerInfo, () => {}]);

export default function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [player, setPlayer] = useState<PlayerInfo>(defaultPlayerInfo);

  return <PlayerContext.Provider value={[player, setPlayer]}>
    {children}
    </PlayerContext.Provider>;
}