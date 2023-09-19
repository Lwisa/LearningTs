
import Greet from './components/Greet'
import './App.css'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'
import Header from './components/Header'
import Oscar from './components/Oscar'
import Button from './components/Button'
import Input from './components/Input'
import Container from './components/Container'

function App() {
   const personName={
    first: 'Bat',
    last: 'Man'
   }

   const nameList=[
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Harley',
      last: 'Quin'
    }
   ]

  return (
    <>
     
        <Greet name= 'Mrs Jeong' messageCount={10} isLoggedin={false}/>

        <Person name={personName}/>

        <PersonList names = {nameList}/>

        <Status status='error'/>

        <Header> Placeholder </Header>

        <Oscar>  
          <Header>Oscar goes to Keanu Reaves</Header>
        </Oscar>

        <br/>
        <Input value='' handleChange={(event) =>console.log(event)}/>
        <br/>
        <Button handleClick={(event, id)=> {
          console.log('button is clickable guys! Relax!', event, id)
        }}/>
        <br/>
        <br/>

        <Container styles={{border: '1px solid tomato', padding:'1rem'}}/>
        
    </>
  )
}

export default App
