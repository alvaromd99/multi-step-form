import './App.css'
import MainContent from './components/main/MainContent'
import SideBar from './components/side/SideBar'
import { RenderProvider } from './context/RenderProvider'

function App() {
	return (
		<div className='App'>
			<RenderProvider>
				<div className='main'>
					<SideBar />
					<MainContent />
				</div>
			</RenderProvider>
		</div>
	)
}

export default App
