import { motion } from "framer-motion"

export function TitleAnimation({children}){

  const variants = {
    hidden: { opacity: 0},
    enter: { opacity: 1},
    exit: { opacity: 0}
  }

  return(<>
    <motion.div
      initial="hidden"
      animate="enter"
      //exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      {children}
    </motion.div>
  </>)
}

export function ContentAnimation({children, delay = 0}){

  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 20 }
  }

  return(<>
    <motion.div
    initial="hidden"
    animate="enter"
    //exit="exit"
    variants={variants}
    transition={{ duration: 0.4, type: 'easeInOut', delay }}
    >
      {children}
    </motion.div>
  </>)
}

export function FromLeftFadeIn({children}){
  
  const variants = {
    hidden: { opacity: 0, x: 20},
    enter: { opacity: 1, x: 0},
    exit: { opacity: 0, x: 20}
  }

  return(<>
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}      
    >
      {children}
    </motion.div>
  </>)
}

export function MultiPagesFormAnimation({children, step, prevStep, delay = 0}){
  
  // Show as simple page
  var variants = {
    hidden: { opacity: 0},
    enter: { opacity: 1},
    exit: { opacity: 0}
  }

  // Title animation
  if(delay){
    variants.hidden.y = 20;
    variants.enter.y = 0;
    variants.exit.y = 20;
  }

  if(prevStep && step > prevStep){
    // Form action go next
    variants = {
      hidden: { opacity: 0, x: 20, y: 0},
      enter: { opacity: 1, x: 0, y: 0},
      exit: { opacity: 0, x: 20, y: 0}
    }
  } else if(prevStep && step < prevStep) {
    // Form action go back
    variants = {
      hidden: { opacity: 0, x: -20, y: 0},
      enter: { opacity: 1, x: 0, y: 0},
      exit: { opacity: 0, x: -20}, y: 0
    }
  }
  console.log(variants);
  return(<>
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut', delay }}      
    >
      {children}
    </motion.div>
  </>)
}