import React, { useState } from 'react';
import { Container, Grid, Input, Spacer, Radio, Text, Textarea, Button } from '@nextui-org/react';
import {MultiPagesFormAnimation, TitleAnimation, ContentAnimation} from '../layouts/content-animation';
import PageTitle from '../title'

const FirstStep = ({nextStepAction, step, prevStep}) => {

  const initialValues = {
    fname: '',
    lname: '',
    email: '',
    phone: '',
    siteExisting: true,
    siteUrl: '',
    facebook: '',
    twitter: '',
    aboutBusiness: ''
  }

  const [isEmpty, setIsEmpty] = useState({fname: false, lname: false, email: false, phone: false});
  const [formData, setFormData] = useState(initialValues);
  const {fname, lname, email, phone, siteExisting, siteUrl, facebook, twitter, aboutBusiness} = formData;

  // const handleSubmit = () => {
  //   let hasErros = false;
  //   let fieldErrors = {}

  //   for(const item in isEmpty){
  //     if(formData[item]){
  //       fieldErrors[item] = false;
  //     } else {
  //       fieldErrors[item] = true;
  //       hasErros = true;
  //     }
  //   }

  //   hasErros ? setIsEmpty({...isEmpty, ...fieldErrors}) : nextStep();
  // }

  return(
    <div>
      <PageTitle cardText="Just fill the form and save">Tell Us About You and Your Business</PageTitle>

      <ContentAnimation>
        <section className="blue-section">
          <Container sm>
            <Grid.Container gap={2} className="form">

              <Grid lg={6}>
                <Input 
                  fullWidth
                  bordered 
                  rounded
                  placeholder="First Name" 
                  aria-label="First Name"
                  color={isEmpty.fname ? 'error' : ''}
                  helperText="Required"
                  helperColor={isEmpty.fname ? 'error' : ''}
                  css={{background: '#fff'}}
                  value={fname}
                  name="fname"
                  onChange={(e) => {setFormData({...formData, fname: e.target.value})}}
                  />              
              </Grid>

              <Grid lg={6}>
                <Input 
                  fullWidth
                  bordered 
                  rounded
                  placeholder="Last Name" 
                  aria-label="Last Name"
                  color="default"
                  helperText="Required"
                  css={{background: '#fff'}}
                  helperColor={isEmpty.lname ? 'error' : ''}
                  value={lname}
                  name="lname"
                  onChange={(e) => {setFormData({...formData, lname: e.target.value})}}
                />              
              </Grid>

              <Spacer y={1}/>

              <Grid lg={12}>
                <Input 
                    fullWidth
                    bordered 
                    rounded
                    placeholder="Email"
                    aria-label="Email"
                    color="default"
                    helperText="Required"
                    css={{background: '#fff'}}
                    type="email"
                    helperColor={isEmpty.email ? 'error' : ''}
                    value={email}
                    name="email"
                    onChange={(e) => {setFormData({...formData, email: e.target.value})}}
                  />      
              </Grid>

              <Spacer y={1}/>

              <Grid lg={12}>
                <Input 
                    fullWidth
                    bordered 
                    rounded
                    placeholder="Phone"
                    aria-label="Phone"
                    color="default"
                    helperText="Required"
                    css={{background: '#fff'}}
                    helperColor={isEmpty.phone ? 'error' : ''}
                    value={phone}
                    name="phone"
                    onChange={(e) => {setFormData({...formData, phone: e.target.value})}}
                  />      
              </Grid>

              <Spacer y={1}/>

              <Grid lg={12} css={{alignItems: 'center'}} >
                <Text css={{margin: '0 20px 0 0'}}>Do you have an existing website?</Text>
                <Radio.Group 
                    row 
                    value={siteExisting ? true : false}
                    name="siteExisting"
                    onChange={(e) =>  setFormData({...formData, siteExisting: e})}
                  >
                  <Radio value={true} size="xs">Yes</Radio>
                  <Radio value={false} size="xs">No</Radio>
                </Radio.Group>
              </Grid>

              <Spacer y={0.3}/>

              {siteExisting
                ? <>
                  <Grid lg={12}>
                    <Input 
                        fullWidth
                        bordered 
                        rounded
                        placeholder="What is your Domain address"
                        aria-label="What is your Domain address"
                        labelLeft="https://"
                        color="default"
                        css={{background: '#fff'}}
                        value={siteUrl}
                        name="siteUrl"
                        onChange={(e) => {setFormData({...formData, siteUrl: e.target.value})}}
                      />      
                  </Grid>
                  <Spacer y={1}/> 
                </>
                : <></>
              }

              <Grid lg={12}>
                <Input 
                    fullWidth
                    bordered 
                    rounded
                    placeholder="Facebook Page"
                    aria-label="Facebook Page"
                    color="default"
                    css={{background: '#fff'}}
                    value={facebook}
                    name="facebook"
                    onChange={(e) => {setFormData({...formData, facebook: e.target.value})}}
                  />      
              </Grid>

              <Spacer y={1}/>

              <Grid lg={12}>
                <Textarea 
                    fullWidth
                    bordered 
                    rounded
                    placeholder="Tell us about your business"
                    aria-label="Tell us about your business"
                    color="default"
                    css={{background: '#fff'}}
                    rows={5}
                    value={aboutBusiness}
                    name="aboutBusiness"
                    onChange={(e) => {setFormData({...formData, aboutBusiness: e.target.value})}}
                  />      
              </Grid>

              <Spacer y={1}/>
              
              <Grid lg={12} justify="center">
                <Button rounded
                  color="gradient" 
                  onClick={() => nextStepAction()}
                  size="sm"
                >
                  Submit
                </Button>
              </Grid>

            </Grid.Container>
          </Container>
        </section>
      </ContentAnimation>

    </div>
  )
}

export default FirstStep;