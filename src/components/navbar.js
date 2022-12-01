import React from "react"
import "./navbar.css"
function Nav() {
    const [show,setShow] = React.useState(false)
    React.useEffect(()=> {
        window.addEventListener("scroll" , () => {
           if(window.scrollY > 100){
            setShow(true);
           }else setShow(false);
        });
        return () => {
            window.removeEventListener("scroll",null);
        }
    },[]);
    return (
        <div className={`nav ${show && "nav-black"}`} >
           <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="netflix-logo" className="nav-logo"/>
           <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" className="nav-avatar"/>
        </div>
    )
}
export default Nav;