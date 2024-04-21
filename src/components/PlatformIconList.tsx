import React from 'react';
import {FaWindows,FaPlaystation,FaXbox,FaApple,FaLinux,FaAndroid} from 'react-icons/fa';
import {platform} from '../hooks/useGames';
import { HStack, Icon } from '@chakra-ui/react';
import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendo} from 'react-icons/si';
import {BsGlobe} from 'react-icons/bs';
import { IconType } from 'react-icons';

interface Props{
    platforms : platform[];
}
const PlatformIconList = ({platforms}:Props) => {
    // Index Signature
    const iconMap:{[key:string]:IconType} = {
        pc: FaWindows,
        playStation:FaPlaystation,
        xbox : FaXbox,
        nintendo: SiNintendo,
        linux: FaLinux,
        android:FaAndroid,
        ios : MdPhoneIphone,
        web: BsGlobe
    }
  return (
    <>
    <HStack marginY={1}>
    {platforms.map((platform)=><Icon key={platform.id} as={iconMap[platform.slug]}color='gray.500'/>)}
    </HStack>
    </>
  )
}

export default PlatformIconList;