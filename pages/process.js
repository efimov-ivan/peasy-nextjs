import Head from "next/head"
import { Container } from "@nextui-org/react"
import {ContentAnimation, TitleAnimation} from "../components/layouts/content-animation"
import PageTitle from "../components/title"

export default function Process(){
  return(
    <>
      <Head>
        <title>Peasy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <PageTitle cardText="Process is very sipmle!!!">Process</PageTitle>

        <ContentAnimation>
          <Container sm>
            <section>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente velit modi officia laudantium, optio in excepturi? Ea ipsam ullam pariatur odio molestias dignissimos, exercitationem repudiandae reiciendis corrupti voluptate ipsa, dolores minima rerum provident, inventore maiores dicta praesentium voluptates iste cupiditate sint est blanditiis! Quam libero odio facilis qui? Quae vitae autem dolores. Veniam qui amet adipisci molestiae quia sint aspernatur quis dolor quod beatae quasi nemo corporis earum impedit, quos, excepturi harum? In labore, laudantium consequuntur cupiditate sed quos dolorem explicabo dolor delectus sunt tempore, maiores ratione facere eum doloremque quod? Delectus ea ad ab harum cum in consectetur consequatur!
            </section>
          </Container>

          <section className="blue-section" delay={0.2}>
            <Container sm>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illo maxime laudantium veniam, nemo dolores sunt, atque totam consectetur a est fugit molestiae ut, rem enim! Facilis natus veniam nobis officiis, iusto distinctio dicta vel quod velit praesentium voluptate dignissimos ipsa debitis corporis consequatur, dolorum culpa sit minima magnam ipsam quibusdam voluptatem reiciendis? Similique, quibusdam illum expedita quis enim, numquam, sit unde voluptas aperiam vel natus nemo soluta tempore dolores nihil autem! Aspernatur accusantium mollitia possimus fuga eum, adipisci a cupiditate consectetur nesciunt iste qui? Tempore dolorem repudiandae in, tenetur consequuntur reprehenderit illo explicabo rerum praesentium adipisci, minus ad consectetur.
            </Container>
          </section>

          <Container sm delay={0.4}>
            <section>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente velit modi officia laudantium, optio in excepturi? Ea ipsam ullam pariatur odio molestias dignissimos, exercitationem repudiandae reiciendis corrupti voluptate ipsa, dolores minima rerum provident, inventore maiores dicta praesentium voluptates iste cupiditate sint est blanditiis! Quam libero odio facilis qui? Quae vitae autem dolores. Veniam qui amet adipisci molestiae quia sint aspernatur quis dolor quod beatae quasi nemo corporis earum impedit, quos, excepturi harum? In labore, laudantium consequuntur cupiditate sed quos dolorem explicabo dolor delectus sunt tempore, maiores ratione facere eum doloremque quod? Delectus ea ad ab harum cum in consectetur consequatur!
            </section>
          </Container>
        </ContentAnimation>
      </main>
    </>
  )
}