import './App.css'
//import { BasicTypes } from './typescript/BasicTypes'
//import BasicFunctions from './typescript/BasicFunctions'
//import { ObjectLiterals } from './typescript/ObjectLiterals'
// import { Counter } from './components/Counter'
import reactLogo from './assets/react.svg'
import { Counter } from './components/Counter'
import { Login } from './components/Login'
import { AuthProvider } from './Context/AuthContext'
function App() {

  return (
    //aqui se envuelve todo con el authprovider que fue lo que creamos
    <AuthProvider>
      <div className='flex flex-col justify-center items-center h-svh'>
        <a href='https://es.react.dev' target='blank'></a>
        <img src={reactLogo} className='w-32 h-32' alt='React Logo' />
        <h1 className='text-4xl mb-5'>
          React +
          TypeScript Reforzamiento

        </h1>
        <Counter />
        <Login />
      </div>
    </AuthProvider>
  )
}

export default App