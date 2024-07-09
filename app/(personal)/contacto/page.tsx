import { MaxWidthWrapper } from '@/components/global/max-width-wrapper'
import { PageHeading } from '@/components/global/page-heading'
import PageTagline from '@/components/global/page-tagline'
import { Badge } from '@/components/ui/badge'
import { Metadata } from 'next'
import { LinkedinLogo, Envelope } from '@phosphor-icons/react/dist/ssr'

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Ponte en contacto con Juan Serrano, experto en economía y finanzas. Consulta sobre análisis económicos, estrategias de inversión y asesoramiento financiero personalizado. ¡Estamos aquí para ayudarte!.'
}

export default async function ContactRoute() {
  return (
    <MaxWidthWrapper className='flex flex-col gap-y-4 md:gap-x-8'>
      <div>
        <PageHeading>{`Contacto`}</PageHeading>
        <PageTagline>{`Si necesitas más información o deseas programar una consulta, no dudes en ponerte en contacto conmigo a través de los siguientes medios.`}</PageTagline>
      </div>
      <div className='mt-8 flex gap-x-4 md:gap-x-8'>
        <a
          href='mailto:juanserranofinanzas@gmail.com'
          rel='noopener noreferrer'
          target='_blank'
          className='cursor-pointer'
        >
          <Envelope className='size-7 rounded-md border p-1 transition duration-300 ease-linear hover:bg-stone-100 md:size-10' />
        </a>
        <a
          href='https://www.linkedin.com/in/juan-bautista-serrano-garcia-989b11167/?challengeSource=AgHW41wW7NjkNwAAAZB-TGTf6Idv8jam5W4OSrC0h7a1OwsADhLdSnLbnk_vtmw&submissionId=5b01b1a0-280b-df17-362a-6cd44af87c2f&recognizeDevice=AgEQTij5XW_2bQAAAZB-TGTqrxbYjeEYqVyaf63uwkuGGwIMVb0W&challengeId=AQFW3_N9nRP84QAAAZB-TF1QOPG3VrzMNNiweTCUBq5OQ4BRXqR9FOZTwfSj7qSAmFp9rfvXDRDRSuYfXILIF3kBFGh77PTV7w&challegeType=AgHSVRGJ7_wTfgAAAZB-TGTjT_hbI2GOvzPJkzzEmenkc2a-jerqJ9c&memberId=AgEmfkL5z_3tRAAAAZB-TGTmVv9075jP0B65-d7jES_8UIQ&originalSubdomain=es'
          rel='noopener noreferrer'
          target='_blank'
          className='cursor-pointer'
        >
          <LinkedinLogo className='size-10 rounded-md border p-1 transition duration-300 ease-linear hover:bg-stone-100' />
        </a>
      </div>
    </MaxWidthWrapper>
  )
}
