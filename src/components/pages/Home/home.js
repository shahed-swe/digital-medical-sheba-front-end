import React, {useState} from 'react';
import {Notifications} from 'react-push-notification';
import addNotification from 'react-push-notification';
import NavigationBar from '../../assets/navbar/navbar'

const Home = (props) => {
    const [userName, setUserName] = useState("Shahed")

    return(
        <div>
            <NavigationBar/>
            <Notifications/>
            <h2>Welcome Home</h2>
            <label>
                Enter Your name
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
            </label>
        <span>Your Entered: {userName}</span>
        <Page/>
        </div>
    )
}

const Page = () => {
    const buttonClick = () => {
        addNotification({
            title: 'Warning',
            subtitle:'This is a subtitle',
            message:'This is a very long message',
            theme:'darkblue',
            native: true
        });
    }

    return (
        <div className="page">
            <button onClick={buttonClick} className="button">
                Hello world
            </button>
        </div>
    )
}

export default Home;