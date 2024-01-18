import './App.css'
import Spinner from './components/Spinner';

function App() {

  const names = ["Name 1", "Name 2", "Name 3", "Name 4", "Name 5"];

  return (
    <>
      <h1 className="text-3xl font-bold mt-8 mb-4">Name Spinner</h1>
      <Spinner names={names} />
    </>
  )
}

export default App
