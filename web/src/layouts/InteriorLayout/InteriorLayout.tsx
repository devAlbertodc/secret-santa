import Footer from "src/components/Footer/Footer"
import MyAccount from "src/components/MyAccount/MyAccount"
import Nav from "src/components/Nav/Nav"

type InteriorLayoutProps = {
  children?: React.ReactNode
}

const InteriorLayout = ({ children }: InteriorLayoutProps) => {
  return <>
    <main className="grid grid-cols-12 gap-x-5 min-h-screen bg-silverTree dark:bg-nileBlue">
      <aside className="col-span-4 pb-10">
        <div className="fixed z-50"><Nav /></div>
        <img src="/images/bg__interior.svg" alt="Holiday illustration" />
        <a href="#">
          <img src="/images/logo__secret-santa.svg" alt="Secret santa" className="absolute top-[7vw] w-[25vw] z-30"/>
        </a>
      </aside>
      
      <div className="col-span-8 pr-12 pt-7">
        <div className="flex justify-end">
          <MyAccount/>
        </div>
        {children}
      </div>
    </main>
    <Footer/>
  </>
}

export default InteriorLayout
