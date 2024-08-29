import { Envelope, LinkedinLogo } from '@phosphor-icons/react/dist/ssr'

import { currentYear } from '@/lib/utils'

export const Footer = () => {
  return (
    <footer className='bottom-0 w-full bg-stone-950 px-8 py-8 text-white md:px-16 md:py-16'>
      <div className='flex flex-col items-center justify-between gap-y-2 text-center md:flex-row md:items-start md:text-left'>
        <div className='flex flex-col gap-y-2'>
          <p>{`© Juan B. Serrano García ${currentYear}`}</p>
          <div className='flex items-baseline justify-center gap-x-1 md:justify-start'>
            <p>{`Site by `}</p>
            <a
              href='www.laam.dev'
              rel='noopener noreferrer'
              target='_blank'
              className='hover:text-white/90'
            >{` laam.dev`}</a>
          </div>
        </div>
        <div className='flex items-center gap-x-4'>
          <a
            href='mailto:juanserranofinanzas@gmail.com'
            rel='noopener noreferrer'
            target='_blank'
          >
            <Envelope weight='fill' className='size-8 hover:text-white/90' />
          </a>
          <a
            href='https://www.linkedin.com/in/juan-bautista-serrano-garcia-989b11167/?challengeSource=AgHW41wW7NjkNwAAAZB-TGTf6Idv8jam5W4OSrC0h7a1OwsADhLdSnLbnk_vtmw&submissionId=5b01b1a0-280b-df17-362a-6cd44af87c2f&recognizeDevice=AgEQTij5XW_2bQAAAZB-TGTqrxbYjeEYqVyaf63uwkuGGwIMVb0W&challengeId=AQFW3_N9nRP84QAAAZB-TF1QOPG3VrzMNNiweTCUBq5OQ4BRXqR9FOZTwfSj7qSAmFp9rfvXDRDRSuYfXILIF3kBFGh77PTV7w&challegeType=AgHSVRGJ7_wTfgAAAZB-TGTjT_hbI2GOvzPJkzzEmenkc2a-jerqJ9c&memberId=AgEmfkL5z_3tRAAAAZB-TGTmVv9075jP0B65-d7jES_8UIQ&originalSubdomain=es'
            rel='noopener noreferrer'
            target='_blank'
          >
            <LinkedinLogo
              weight='fill'
              className='size-8 hover:text-white/90'
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
