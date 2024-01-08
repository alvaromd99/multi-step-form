import './App.css'
import MainContent from './components/main/MainContent'
import SideBar from './components/side/SideBar'
import { InfoProvider } from './context/InfoProvider'
import { PlansProvider } from './context/PlansProvider'
import { RenderProvider } from './context/RenderProvider'

function App() {
	return (
		<div className='App'>
			<RenderProvider>
				<InfoProvider>
					<PlansProvider>
						<div className='main'>
							<SideBar />
							<MainContent />
						</div>
					</PlansProvider>
				</InfoProvider>
			</RenderProvider>
		</div>
	)
}

export default App
