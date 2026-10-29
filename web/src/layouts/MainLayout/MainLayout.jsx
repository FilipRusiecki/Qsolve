import Footer from 'src/components/Footer/Footer'
import Navigation from 'src/components/Navigation/Navigation'

const MainLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-qs-paper text-qs-ink">
      <Navigation />
      <main className="w-full flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
