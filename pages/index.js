import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import FirstStep from '../components/steps/firstStep';
import SecondStep from '../components/steps/secondStep';
import ThirdStep from '../components/steps/thirdStep';
import FourthStep from '../components/steps/fourthStep';
import { Progress, Container, Pagination } from '@nextui-org/react';

export default function Home(props) {

  const [step, setStep] = useState(1);
  const stepsMap = {
    1: FirstStep,
    2: SecondStep,
    3: ThirdStep,
    4: FourthStep
  }
  const StepComponent = stepsMap[step];

  const goToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
    });
  };

  const nextStep = () => {
    goToTop();
    setStep(++step);
  };

  const prevStep = () => {
    goToTop();
    setStep(--step);
  };

  const prevStepRef = useRef();
  useEffect(() => {
    prevStepRef.current = step;
  }, [step]);
  console.log(stepsMap.length);
  return (
    <>
      <Head>
        <title>Peasy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <StepComponent nextStepAction={nextStep} prevStepAction={prevStep} step={step} prevStep={prevStepRef.current} />
        {/* <Container xs align="center"> */}
          {/* <Pagination 
            onlyDots 
            rounded
            size="sm" 
            controls={false} 
            total={Object.keys(stepsMap).length}
            initialPage={step}
            onChange={page => setStep(page)}
            className="form-pager"
          /> */}
        {/* </Container> */}
      </main>
    </>
  )
}
