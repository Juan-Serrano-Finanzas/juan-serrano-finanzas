import { MaxWidthWrapper } from '@/components/global/max-width-wrapper'
import { PageHeading } from '@/components/global/page-heading'

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
