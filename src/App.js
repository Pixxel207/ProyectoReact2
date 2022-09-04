import './App.css';
import ContactoForms from './components/contact/contacto';
// import TaskListComponent from './components/container/task_list';


function App() {
  return (
    <div className="App">
    {/* Componente propio greeting.jsx */}
     {/* <Greeting name="Ivan">  </Greeting> */}
     {/* Componente de ejemplo funcional */}
     {/* <GreetingF name="Ivan"></GreetingF> */}
    {/* Componente de listado de Tareas */}
      {/* <TaskListComponent></TaskListComponent> */}
      <ContactoForms></ContactoForms>
    </div>
  );
}

export default App;
