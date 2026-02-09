import { TrafficLight } from './components/TrafficLight';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-8">
          TrafficLight Component
        </h1>
        
        <TrafficLight />
      </div>
    </div>
  )
}

export default App
