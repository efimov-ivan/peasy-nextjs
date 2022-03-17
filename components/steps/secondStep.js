import { useState } from "react";
import { Container, Text, Grid, Spacer, Checkbox, Button } from "@nextui-org/react";
import Modals from "../Modals";
import { FromLeftFadeIn, MultiPagesFormAnimation, TitleAnimation, ContentAnimation } from "../layouts/content-animation";
import PageTitle from '../title'


export default function SecondStep({nextStepAction, prevStepAction, step, prevStep}){

  const [visible, toggleModal] = useState(false);
  console.log(step, prevStep);

  return(
    <>
      <PageTitle cardText="Read our terms and agree">Agree to the Terms of Service</PageTitle>
      
      <ContentAnimation>
        <section className="blue-section">
          <Container xs>
            <div align="center">
              <Text color="$titleGreen" size={24}>Please read and knowledge the scope of work below by checking the boxes next to each statement.</Text>
              <Spacer y={0.5}/>
              <Text 
                color="$primary"
                size={24}
                css={{cursor: 'pointer', textDecoration: 'underline'}}
                onClick={() => toggleModal(true)}
                >
                Read our full terms of service
              </Text>
            </div>
          </Container>
        </section>
      
        <section>
          <Container sm>

            <Grid.Container>
              <Grid lg={5.5} className="heading-included">
                Text
              </Grid>
              <Grid lg={5.5} className="heading-notincluded">
                Not Included
              </Grid>
              <Grid lg={1}></Grid>
            </Grid.Container>

            <Grid.Container>
              <Grid lg={5.5} direction="column">
                <Text size={22} color="primary" align="center" weight="bold" margin="25px 0 10px">Content Phase</Text>
                <ul>
                  <li>30-minute consultation with a staff content writer to help you get started with organizing your content</li>
                  <li>1 round of proofreading for basic spelling and grammar with a staff content writer</li>
                  <li>Website content template .docx to help you get started</li>
                </ul>
              </Grid>
              <Grid lg={5.5} direction="column">
                <Text size={22} color="$limeGreen" align="center" weight="bold" margin="25px 0 10px">Content Phase</Text>
                <ul>
                  <li>Content writing assistance or copywriting</li>
                  <li>Rewriting or copyediting</li>
                  <li>Brand messaging or tagline development</li>
                  <li>Writing for keywords</li>
                </ul>
              </Grid>
              <Grid lg={1} justify="center">
                <Checkbox color="success" checked={true}></Checkbox>
              </Grid>
            </Grid.Container>

            <Grid.Container>
              <Grid lg={5.5} direction="column">
                <Text size={22} color="primary" align="center" weight="bold" margin="25px 0 10px">Design Phase</Text>
                <ul>
                  <li>Kick-off meeting with a design team member and your Client Success Manager</li>
                  <li>Design consultation at kick-off about how to update the template to match your company's style and personality</li>
                  <li>Custom colors</li>
                  <li>Fonts from our extensive font library</li>
                </ul>
              </Grid>
              <Grid lg={5.5} direction="column">
                <Text size={22} color="$limeGreen" align="center" weight="bold" margin="25px 0 10px">Design Phase</Text>
                <ul>
                  <li>Logo design, logo redesign or modifications</li>
                  <li>Visual brand strategy</li>
                  <li>Custom icons</li>
                  <li>Photoshopping images</li>
                  <li>Custom website wireframes</li>
                </ul>
              </Grid>
              <Grid lg={1} justify="center">
                <Checkbox color="success" checked={true}></Checkbox>
              </Grid>
            </Grid.Container>

            <Spacer y={2}/>
            <Grid css={{display: 'flex'}} justify="center">
              <Button 
                rounded
                bordered
                color="gradient" 
                onClick={prevStepAction}
                css={{color: "$primary"}}
                size="sm"
              >
                Back
              </Button>
              <Button 
                rounded
                color="gradient" 
                onClick={() => nextStepAction()}
                size="sm"
              >
                Next
              </Button>
            </Grid>

          </Container>
        </section>
      </ContentAnimation>

      <Modals title="Peasy Terms of Service" visible={visible} closeModal={() => toggleModal(false)}>
        <ol>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum expedita, magni totam maiores quisquam esse?</li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum expedita,</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere perferendis cupiditate consectetur illo odit dolore excepturi possimus doloremque alias dolores praesentium ad mollitia earum, at quos, numquam rerum qui enim?</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nisi veritatis enim fugit consequuntur sunt repudiandae? Doloremque velit quae sapiente nihil. Veniam, animi quo corrupti optio in molestias, consequuntur corporis recusandae tempora sint iste voluptatem porro perferendis? Nulla, perferendis iusto.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eveniet dolorum unde dignissimos amet tenetur illo odit sit, quibusdam repudiandae quae deleniti aliquam aperiam pariatur, architecto numquam vero officiis fuga ullam quod? Amet corrupti, obcaecati eum saepe aliquam magni quos hic excepturi voluptatibus sed exercitationem odit molestiae, molestias debitis enim.</li>
          <li>Laborum expedita, magni totam maiores quisquam esse?</li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum expedita, magni totam maiores quisquam esse?</li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
        </ol>
      </Modals>
  
      <style jsx global>{`
        .heading-included{
          color: #fff;
          background: var(--nextui-colors-primary);
          font-weight: bold;
          justify-content: center;
          padding: 13px 0;
          font-size: 24px;
        }
        .heading-notincluded{
          color: #fff;
          background: var(--nextui-colors-limeGreen);
          text-align: center;
          font-weight: bold;
          justify-content: center;
          padding: 13px 0;
          font-size: 24px;
        }
      `}</style>
    </>
  )
}