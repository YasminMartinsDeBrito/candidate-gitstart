import { useEffect } from "react";

const ListUsers = ({ fetchUserIds,user, setUser}) => {

  useEffect(() => {
    (async () => {
      const blu = await  fetchUserIds();
     setUser(blu)
    })();

  },[])
  
  return(
    <>
    <ul>
      {user.map((item, index) => (<li key={index}>
        { item }
      </li>))}
    </ul>
    </>
  )
};

export default ListUsers;
