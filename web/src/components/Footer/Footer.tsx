const Footer = () => {
  return (
    <footer className="fixed bottom-0 z-0 w-full bg-acadia dark:bg-blackPearl py-[72px] text-center">
      <img src="/images/logo__secret-santa--small.svg" alt="Secret Santa" className="relative mx-auto mb-16"/>
      <p className="font-sans font-medium text-scotchMist">
        Copyright &copy;2024. 
        <a target="_target" rel="noreferrer" href="https://aldacala.wordpress.com/all-my-posts/"
          className="underline hover:no-underline">
          Alberto's blogs, article and more! 
        </a> 
         . All rights reserved
        <br />
        Terms &amp; conditions . Privacy Policy . Disclaimers
      </p>
    </footer>
  )
}

export default Footer
