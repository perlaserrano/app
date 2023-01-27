import logo from './logo.svg';
import './App.css';
import { useRef , useState, useEffect} from 'react';
import {MyComponent, MyComponent2} from './components/mycomponents';
import images from './assets/images';
import React from 'react';
import {Component, Cuadrado, Rectangulo,Input, RedTex, BlueTex, GlobalStyle} from './cuadrado'
import Routes from './aplication/routes'



const App = _ => <Routes/>

// styled-component
// function App()  {

//   return(
//    <div>
//     <GlobalStyle/>

//     <div>
//     <Cuadrado/>
//     <Rectangulo/>
//     <Component isRigth={true}>dfadfaf</Component>
//     <Input myMaxLength={100}/>
//     <RedTex> Hello</RedTex>
//     <BlueTex>Bye</BlueTex>
   


//     </div>
    
//    </div>

  
//   )

//   // Cargar imagenes 
//   // return(
//   //   <div>
//   //     <h1>{images[0].title}</h1>
//   //     <img src={ images[0].img}/>
//   //   </div>
//   // )


//   // Renderizado condicional consiste en renderizar la aplicacion si se cumple cierta condicion

// // const condicion = true

// // return(
// // <div>
// //   {condicion ? <p>Hola</p> : <p>Adios</p>}

// // </div>

// // )



// // componentes
//   // return(
//   //   <div>
//   //     <p>Cositas</p>
//   //     <MyComponent param='Love' param2='Hate'>Otras Cosas importantes</MyComponent>
//   //    {/* < MyComponent2/> */}
//   //   </div>
//   // )
// //   //Hooks 
// // // useState se utiliza para cambiar el estado y para recoger valores del usuario
// // const [a, setA] = useState(8) 
// // const [txt,setTxt] = useState('')
// // // useEffect se ejecuta cada vez que el estado cambie 
// // useEffect(() => {
// //  alert('hola')
// // }, [a])

// // const hacerCosas = () =>{
// //   setA(4)
// // }

// // const textChange = (e) =>{
// //   setTxt(e.target.value)

// // }

// //  return(
// //   <div>
// //     {a}
// //     <button onClick={()=> hacerCosas()}>Pulsar</button>
// //     <input type={'text'} onChange={e => textChange(e)}/>
// //     {/* para renderizar en pantalla utilizamos llaves JSX */}
// //     {txt}
// //   </div>
// //  )





//  /**Mostrar elementos en el Dom usando useRef * */ 
// // const inputRef = useRef(null)
// // const resultRef = useRef(null)

// // const makeThings = () =>{

// //   resultRef.current.innerHtml = inputRef.current.value
// // }

// // return(
// //   <div>

// //     <input type={"text"} ref={inputRef}/>
// //     <button onClick={makeThings}>Hacer cosas</button>

// //     <div ref={resultRef}>

// //     </div>
// //   </div>
// // )
  




//   /* * iteracion de Arrays, evento onClick, usando JSX* */
// //   const values = ['aaaaaaaaaaaa','bbbbbbbbb','cccccccc']

// //   const myConst = <div className='name'>
// //     <h1>Love</h1>
// //   </div> 

// //   const multiplicate = (a , b ) => a + b
   
// //   const btnPulsator = () => alert ('button pulsator')


// //   return (
// //     <div className="App">
// //      <h1>
// //       {2 + 2 }
// //      </h1>

// //      <h2>{multiplicate(3,5) }</h2>

// //      {myConst}

// //      <button onClick={btnPulsator}>pulsator</button>
// // {

// // values.map(element =><p>{element}</p>)
// // }

// //     </div>
// //   );
// }

export default App;
