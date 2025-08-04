import React from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import { openingHours, socials } from '../../Constants'
import { useGSAP } from '@gsap/react'

function Contact() {
  useGSAP(()=>{
    const titleSplit = SplitText.create('#contact h2', {type:'words'});

    const timeline = gsap.timeline({
      scrollTrigger:{
        trigger:'#contact',
        start : 'top center',
      }
    })

    timeline
      .from(titleSplit.words,{
        opacity:0 ,yPercent:100 ,stagger:0.02
      })
      .from('#contact h3 ,#contact p' ,{
        opacity:0,yPercent:100,stagger:0.02
      })
      .to('#f-right-leaf',{
        y:'-50',duration:1 ,ease:'power1.inOut'
      })
      .to('#f-left-leaf',{
        y:'-50',duration:1 ,ease:'power1.inOut'
      })
  })
  return (
    <footer id='contact'>
      <img src='/images/footer-right-leaf.png' alt='leaf-right' id='f-right-leaf'/>
      <img src='/images/footer-left-leaf.png' alt='leaf-left' id='f-left-leaf'/>
    
    <div className='content'>
      <h2>Where to Find Us</h2>
    

    <div>
      <h3>VISIT OUR STORE</h3>
      <p>Vill:Devli kalan,Maroth,Nawa,Nagour</p>
    </div>

    <div>
      <h3>CONTACT US</h3>
      <p>+91 8302811486</p>
      <a href='#'>p.tetarwal808@gmail.com</a>
    </div>

    <div>
      <h3>Open Every Day</h3>
      {openingHours.map((time)=>(
        <p>{time.day} : {time.time}</p>
      ))}
    </div>

    <div>
      <h3>Socials</h3>
      <div className='flex-center gap-5'>
        {socials.map((social)=>(
          <a key={social.name}
          href={social.url}>
            <img src={social.icon}/>
          </a>
        ))}
      </div>
    </div>

    </div>
    </footer>
  )
}

export default Contact