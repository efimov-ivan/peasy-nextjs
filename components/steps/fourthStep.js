import { useState } from "react";
import { Container, Text, Grid, Spacer, Checkbox, Button, Tooltip, Radio, Modal, Loading } from "@nextui-org/react";
import { FromLeftFadeIn, MultiPagesFormAnimation, TitleAnimation, ContentAnimation } from "../layouts/content-animation";
import PageTitle from '../title'

export default function FourthStep({nextStepAction, prevStepAction, step, prevStep}){

  return(
    <>
      <PageTitle cardText="We'll do our best for you!">Thank You!!!</PageTitle>
      
      <ContentAnimation>
        <section className="blue-section">
          <Container sm align="center">
            <Text 
              size={28}
              align="center"
              color="primary"
            >
              Thank you for your purchase!
            </Text>
            <Text 
              size={28}
              align="center"
              color="primary"
            >
              We’re excited to get started.
            </Text>
            <p>You will receive a welcome email from our team within one business day inviting you to a complimentary website content consultation with a member of our expert team. We will also be working to set up your client portal so you can begin to send us the information we need to complete the project.</p>
          </Container>
        </section>
      
        <section>
          <Container sm align="center">
            <p>Please note our office hours are Monday – Friday, 9 AM – 5 PM CST.</p>
            <p>If you have any questions or concerns, email us at <a href="mailto:info@hotdogpr.com">info@hotdogpr.com</a> and we will return your message within one business day.</p>
          </Container>
        </section>
      </ContentAnimation>
    </>
  )
}