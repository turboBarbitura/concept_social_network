import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from "./components/Dialogs/Dialogs";
import {Routes, Route, BrowserRouter} from "react-router-dom";


function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>

                        <Route path="/dialogs/*" element={<Dialogs
                            state = {props.state.dialogsPage} />}/>

                        <Route path="/profile" element={<Profile
                            updateNewPostText = {props.updateNewPostText}
                            profilePage = {props.state.profilePage}
                            addPost = {props.addPost} />}/>

                    </Routes>


                </div>

            </div>
        </BrowserRouter>
    )


}

export default App
