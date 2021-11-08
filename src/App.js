import Channelbar from './components/ChannelBar';
import ContentContainer from './components/ContentContainer/index'
import SideBar from './components/SideBar/index';

function App() {
  return (
    <div className="flex">
     
  <SideBar />
  <Channelbar />
  <ContentContainer />
    </div>
  );
}
export default App;

