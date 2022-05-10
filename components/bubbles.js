import { OrbitControls, CameraShake } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useState, useRef } from "react";

export default function Bubbles(){

    const [mousePosition, setMousePosition] = useState(1)
    const bubblesColors = ['#7bdcb5', '#00d084', '#BDD81E', '#3BB29B'];
    const bubblesRef = useRef([]);

    useFrame((state) => {
        for (let i = 0; i < bubblesRef.current.length; i++) {
            let mesh = bubblesRef.current[i];
            mesh.position.y += (i*0.00001);
            if(mesh.position.y > 3){
                mesh.position.y = -3;
            } 
        }
    })
    
    return (
      <>
        <ambientLight intensity={0.8} />

        {[...Array(250)].map((x, i) => (
          <mesh
            key={i}
            scale={getRandom(0.01, 0.05)}
            position={[getRandom(-6, 8) * mousePosition, getRandom(-3, 3), 0]}
            ref={(el) => (bubblesRef.current[i] = el)}
          >
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color={getRandomFromArray(bubblesColors)} />
          </mesh>
        ))}

        <CameraShake
          maxYaw={0.05} // Max amount camera can yaw in either direction
          maxPitch={0.05} // Max amount camera can pitch in either direction
          maxRoll={0.05} // Max amount camera can roll in either direction
          yawFrequency={0.05} // Frequency of the the yaw rotation
          pitchFrequency={0.05} // Frequency of the pitch rotation
          rollFrequency={0.05} // Frequency of the roll rotation
          intensity={1} // initial intensity of the shake
          decayRate={0.65} // if decay = true this is the rate at which intensity will reduce at />
        />
        {/* <OrbitControls/> */}
        {/* <gridHelper /> */}
      </>
    );
}

function increaseScale(mesh){
    const {x,y,z} = mesh.scale;
    mesh.scale.set(x*3, y*3, z*3);
}

function decreaseScale(mesh){
    const {x,y,z} = mesh.scale;
    mesh.scale.set(x/3, y/3, z/3);
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomFromArray(arr = []){
    return arr[Math.floor(Math.random() * arr.length)];
}