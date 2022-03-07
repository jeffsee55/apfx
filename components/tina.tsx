import Tina from 'tinacms'

const TinaLoader = ({ pageProps, children }) => {
  return (
    <Tina
      branch="main"
      clientId="d94095b9-fb25-40a6-a3ea-277ad5653cb0"
      // isLocalClient={!!process.env.NEXT_PUBLIC_TINA_LOCAL || false}
      isLocalClient={true}
      cmsCallback={(cms) => {
        cms.flags.set('use-unstable-formify', true)
        return cms
      }}
      formifyCallback={(args) => {
        if (
          [
            'content/navigation/main.md',
            'content/localeInfo/main.md',
            'content/footer/main.md',
            'content/theme/main.json',
          ].includes(args.formConfig.id)
        ) {
          return args.createGlobalForm(args.formConfig)
        }
        return args.createForm(args.formConfig)
      }}
      {...pageProps}
    >
      {children}
    </Tina>
  )
}

export default TinaLoader
