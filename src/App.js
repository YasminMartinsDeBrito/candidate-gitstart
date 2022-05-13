import React, { useState, useEffect } from 'react';
import ListUsers from './components/listUsers';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUserIds = async () => {
    return ["john.smith", "sara.lee", "jack.ma"];
  };

  const checkStatus = async (userId) => {
    return Math.random() > 0.8
      ? { status: "offline", id: userId }
      : { status: "online", id: userId };
  };

  const sendEmail = async (userId) => {
    // return if it was sucessfull or not
    return Math.random() > 0.1 ? true : false;
  };


  /*
    Question 1: 
    Find all online users and send them emails. Render the users for which the emails were successfully sent

    Step 1: Load users
    Step 2: Check users online
    Step 3: Send email for whom are online
    Step 4: Render those which the email was successfully sent
  
  */

    useEffect(() => {
      const getUserAndSendEmail = async () => {
        const users = await fetchUserIds();
        const userOnline = await Promise.all(users.map(user => {
          return checkStatus(user)
        }))

        const userEmailSend = []

        await Promise.all(userOnline.map(async user => {
          if(user.status === "online"){
            const isEmailSucessfullySent = await sendEmail(user.id);
            if( isEmailSucessfullySent){
              userEmailSend.push(user.id)
            }
          }
        }))
        setUsers(userEmailSend)
      }
      getUserAndSendEmail()
    }, [])

  return (
    <div className="App">
      <div className="App-header">
        <div>
              <ul>
                <h2>Usuario online</h2>
                {users.map((user) => (
                    <li key={user}>
                      {user}
                    </li>
                  ))}
              </ul>
        </div>
      </div>
    </div>
  );
}

export default App;