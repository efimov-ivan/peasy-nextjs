import { useState } from "react";
import { Container, Text, Grid, Spacer, Checkbox, Button, Tooltip, Radio, Modal, Loading } from "@nextui-org/react";
import { FromLeftFadeIn, MultiPagesFormAnimation, TitleAnimation, ContentAnimation } from "../layouts/content-animation";
import PageTitle from '../title'

const HostingAndMaintenance = () => {
  return(<div className="tooltip-content">
    <h6>Hosting and Maintenance</h6>
    <p>Your monthly fee covers hosting for your website and ongoing maintenance. With this program you get up to one-hour of small website changes per month requested via our ticketing system. After your site launches, you can request changes to your content or send over new content to be added. Your plan does not cover more complex changes to the website. A quote for extra work may be provided if your request is outside of the scope of your maintenance plan.</p>
  </div>)
}

const ContentWriting = () => {
  return(<div className="tooltip-content">
    <h6>Content Writing</h6>
    <p>The base project fee covers design, development and launch of your new Peasy Site. It does not cover writing content for the pages of the site. If you do not want to write your own content or feel short on time and energy, a professional writer on our team can do it for you. We will only ask that you review and approve the content we create.</p>
  </div>)
}

export default function ThirdStep({nextStepAction, prevStepAction, step, prevStep}){

  return(
    <>
      <PageTitle cardText="We almost done, choose service ">Pick Your Project</PageTitle>
      
      <ContentAnimation>
        <section className="blue-section">
          <Container sm>
            <div align="center">
              <Text color="$titleGreen" size={18}>Peasy Sites come in two sizes: 5-page or 10-page. Please make sure to choose a site that is large enough to fit your needs. If you need 7 pages, please choose the 10-page option, for example. The homepage and a contact page should be included in your page count.</Text>
              <Spacer y={0.5}/>
              <Text color="$titleGreen" size={18}>
                <b>Remember:</b> It is also easy to add new pages to your site after it launches with your Hosting and Maintenance prograp.
                <Tooltip trigger="click" content={<HostingAndMaintenance/>} className="custom-tooltip">i</Tooltip>
              </Text>
            </div>

            <Spacer y={1}/>

            <Radio.Group  
                value={5}
                name="project-pages"
                className="price-radios-center"
                // onChange={(e) =>  setFormData({...formData, siteExisting: e})}
              >
              <Radio value={5} size="xs">5 Pages for a project fee of $1,950.00</Radio>
              <Radio value={10} size="xs">10 Pages for a project fee of $2,950.00</Radio>
            </Radio.Group>

          </Container>
        </section>
      
        <section>
          <Container sm>

            <Text 
              size={28}
              align="center"
              color="primary"
            >
              Would You Like to Add Anything?
            </Text>
            <Text size={22} align="center" color="$seafoamGreen">Below is what we currently offer for Peasy Site Add-Ons.</Text>
              
            <Spacer y={1}/>
             
            <Radio.Group  
              value={5}
              name="content-writing"
              className="price-radios"
              // onChange={(e) =>  setFormData({...formData, siteExisting: e})}
            >
              <Radio value={5} size="xs">
                Content Writing for a 5-Page Website: Adds <span className="price">$950.00</span> to your project fee. 
                {/* <Tooltip trigger="click" content={<ContentWriting/>} className="custom-tooltip">i</Tooltip> */}
              </Radio>
              <Radio value={10} size="xs">
                Content Writing for a 10-Page Website: Adds <span className="price">$1,750.00</span> to your project fee.
                {/* <Tooltip trigger="click" content={<ContentWriting/>} className="custom-tooltip">i</Tooltip> */}
              </Radio>
            </Radio.Group>

            <Spacer y={3}/>

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
  
      {/* <Modal
        preventClose
        open={true}
        className="loading-modal"
      >
        <Loading type="default" size="xl" className="loading-modal_circle"/>
      </Modal> */}

      <style jsx global>{`
      `}</style>
    </>
  )
}