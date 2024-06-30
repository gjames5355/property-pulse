import '@/assets/styles/globals.css'

export const metadata = {
  title: 'PropertyPulse | Find The Perfect Rental Property',
  description:
    'Find the perfect rental property with PropertyPulse. Search for rental properties in your area and get in touch with the property owner directly.',
  keywords:
    'rental property, rental properties, rental homes, rental houses, rental apartments, rental condos, rental townhomes, rental duplexes, rental triplexes, rental fourplexes, rental multi-family homes, rental single-family homes, rental studios, rental lofts, rental penthouses, rental villas, rental cabins, rental cottages, rental bungalows, rental mobile homes, rental tiny homes, rental houseboats, rental yurts, rental tipis, rental treehouses, rental igloos, rental'
}

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div>{children}</div>
      </body>
    </html>
  )
}
export default MainLayout
