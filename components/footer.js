import { Container } from "@nextui-org/react";
import Image from "next/image";
//import Peasy_Logo_footer from './'

const Footer = props => {
  return (
    <footer>
      <Container align="center" lg>
        <Image src="/images/Peasy_Logo_footer.svg" width={100} height={50}/>
      </Container>

      <style jsx>{`
        footer{
          background: #2d4c3a;
          color: #fff;
        }
      `}</style>
    </footer>
  )
}

export default Footer;