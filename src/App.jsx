import Sidebar from "./components/Sidebar/Sidebar"
import Main from "./components/Main/Main"

function App() {

  return (
    <>
      <div className="flex bg-black text-white w-full h-screen relative">
      <Sidebar />
      <Main />
      </div>
    </>
  )
}

export default App
