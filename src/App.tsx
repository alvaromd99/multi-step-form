import './App.css'
import MainContent from './components/main/MainContent'
import SideBar from './components/side/SideBar'
import { InfoProvider } from './context/InfoProvider'
import { RenderProvider } from './context/RenderProvider'

function App() {
	return (
		<div className='App'>
			<RenderProvider>
				<InfoProvider>
					<div className='main'>
						<SideBar />
						<MainContent />
					</div>
				</InfoProvider>
			</RenderProvider>
		</div>
	)
}

export default App
