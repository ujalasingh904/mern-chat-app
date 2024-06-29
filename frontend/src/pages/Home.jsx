import MessageContainer from "../components/messages/MessageContainer.jsx";
import Sidebar from "../components/sidebar/Sidebar.jsx";


const Home = () => {
  return (
    <div className='block sm:flex h-full  sm:h-[500px] md:h-[600px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0'>
      <Sidebar />
      <MessageContainer />
      
    </div>
  );
};
export default Home;