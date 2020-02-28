import React from 'react'
import TarjetaFruta from './componentes/TarjetaFruta'
const App = () => (
    <div>
        <TarjetaFruta name='Sandia' price={5.00} />
        <TarjetaFruta name='Naranja' price={2.00} />
        <TarjetaFruta name='Kiwi' price={9.00} />
    </div>
)

export default App