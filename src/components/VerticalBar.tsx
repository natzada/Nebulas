import { FaHome } from "react-icons/fa";
import { IoIosChatbubbles, IoIosSettings  } from "react-icons/io";


function VerticalBar() {
  return (
    <div className='verticalBar'>
        <FaHome />
        <nav className="vertical-navigation">
            <ul>
                <li><IoIosChatbubbles /></li>
                <li><IoIosSettings /></li>
            </ul>
        </nav>
    </div>
  )
}

export default VerticalBar