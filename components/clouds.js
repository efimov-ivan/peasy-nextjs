
import { TextureLoader } from "three";
import CloudsMap from '../assets/8k_earth_clouds.jpg'
import { Cloud, Sky, Html } from "@react-three/drei";
import { useLoader } from "@react-three/fiber"


export default function Clouds(){
    return(
        <>
            <Cloud position={[-4, -2, -25]} speed={0} opacity={1} color="#fff"/>
        </>
    )
}