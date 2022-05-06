
import { TitleAnimation } from "./layouts/content-animation";
import { Container } from "@nextui-org/react";
import { Card, Text, Avatar } from "@nextui-org/react";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import Bubbles from './bubbles'
import { Cloud, Sparkles, Sphere, OrbitControls } from "@react-three/drei";

const PageTitle = ({children, cardText = 'I will help you improve your business'}) => {

  return(<>
    <section className="title" align="center">

      <div style={{position: 'relative', zIndex: 10}}>
        <TitleAnimation>
          <Container md>
            <h1>{children}</h1>
          </Container>
        </TitleAnimation>
        <span className="small-circle"></span>
        <span className="big-circle"></span>
    
        <Card className="custom-card">
          <div className="card-header">
            <Avatar size="lg" src="/images/avatar-4.png" color="primary" bordered />
            <div className="card-header_name">
              <Text size={15} b>Zoey Lang</Text>
              <Text size={14} css={{opacity: 0.6}}>@zoeylang</Text>
            </div>
          </div>
          <div className="typing-text">{cardText}</div>
          <Text size={14}><Link href={'/'} size={14}>Let’s Get Started</Link></Text>
        </Card>
      </div>

      <Canvas 
        style={{width: '100%', height: '100%', position: 'absolute', top: '0px', left: '0px'}} 
        camera={{position:[-5,2,10], fov:10}}
      >
        <Bubbles />
      </Canvas>


    </section>
  </>)
};

export default PageTitle;