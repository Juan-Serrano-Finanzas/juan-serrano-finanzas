import { MaxWidthWrapper } from '@/components/global/max-width-wrapper'
import { PageHeading } from '@/components/global/page-heading'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Ponte en contacto con Juan Serrano, experto en economía y finanzas. Consulta sobre análisis económicos, estrategias de inversión y asesoramiento financiero personalizado. ¡Estamos aquí para ayudarte!.'
}

export default async function ContactRoute() {
  return (
    <MaxWidthWrapper>
      <PageHeading>{`Contacto`}</PageHeading>

      <section className='mt-16'>
        <p>{`Puedes contactar conmigo a través de mi correo electrónico:`}</p>
        <a href='mailto:juanserranofinanzas@gmail.com'>{`juanserranofinanzas@gmail.com`}</a>
      </section>
    </MaxWidthWrapper>
  )
}
