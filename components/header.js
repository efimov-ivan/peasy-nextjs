import { Container } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import Link from "next/link";

const Header = props => {
  return (
    <header>
      <Container sm display="flex" justify="space-between">
        <Image src='./images/Peasy_Logo.svg' width={150} height={50} className="logo"/>
        <ul className="nav">
          <li><Link href={'/why-us'}>Why Us</Link></li>
          <li><Link href={'/process'}>Process</Link></li>
          <li><Link href={'/resources'}>Resources</Link></li>
          <li><Link href={'/pricing'}>Pricing</Link></li>
          <li><Link href={'/'}>Start Here</Link></li>
        </ul>
      </Container>

      <style jsx global>{`
        header{
          padding: 15px 0;
          position: sticky;
          top: 0;
          background: hsla(0,0%,100%,0.8);
          backdrop-filter: saturate(180%) blur(10px);
          z-index: 10;
        }
        header .logo{
          margin: 0;
        }
        header .nav{
          display: flex;
          margin: 0;
          align-items: center;
        }
        header .nav li{
          margin: 0 20px;
        }
        header .nav li a{
          color: var(--nextui-colors-primaryDark);
          font-weight: 500;
        }
      `}</style>

    </header>
  )
}

export default Header;