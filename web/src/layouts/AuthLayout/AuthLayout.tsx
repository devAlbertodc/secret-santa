import Footer from 'src/components/Footer/Footer'

type AuthLayoutProps = {
  children?: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  //The background needs a height and width, because by default is 0, so it would be blank.
  //The background will be of 1440 but if it is wider, then will be 100% of the screen
  return (
    <>
      <main
        className="min-w-screen min-h-screen bg-silverTree bg-auth bg-[length:1440px_auto] bg-[center_top]
              bg-no-repeat dark:bg-nileBlue min-[1440px]:bg-[length:100%_auto]"
      >
        <img
          src="/images/logo__secret-santa.svg"
          alt="Secret Santa"
          className="mx-auto mb-10 w-[460px] pt-24"
        />
        {children}
      </main>
      <Footer />
    </>
  )
}

export default AuthLayout
