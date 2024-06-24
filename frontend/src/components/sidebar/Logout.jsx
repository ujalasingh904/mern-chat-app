import { BiLogOut } from "react-icons/bi";
import userLogout from "../../Hooks/userLogout";

const Logout = () => {
  const { loading, logout } = userLogout();

  const handleLogout = async (e) => {
    e.preventDefault();
    await logout()

  }

  return (
    <div className='mt-auto'>
      {
        loading ? (
          <span className="loading loading-spinner"></span>
        ) : (<BiLogOut className="w-6 h-6 cursor-pointer text-white" onClick={handleLogout} />)
      }
    </div>
  )
}

export default Logout