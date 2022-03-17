
import { TitleAnimation } from "./layouts/content-animation";
import { Container } from "@nextui-org/react";
import { Card, Text, Avatar } from "@nextui-org/react";
import Link from "next/link";

const PageTitle = ({children, cardText = 'I will help you improve your business'}) => {
  return(<>
    <section className="title" align="center">
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

    </section>
  </>)
};

export default PageTitle;