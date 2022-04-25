// import React, { useEffect, useState } from "react";

// const Home = () => {
//   let [state, setState] = useState([])
//     useEffect(() => {
//         window.fetch("https://api.github.com/users", {
//             method: "GET",
//             header: {
//                 "content-type": "application/json",
//             },
//         }).then(data => data.json())
//             .then(value => setState(value))
//             .catch(err => console.log(err))
//     }, []);
//     console.log(state);
//   return <div>Home</div>;
// };

// export default Home;


// ! fetching using ajax

// import React, { useEffect, useState, Fragment } from "react";

// const Home = () => {

//     let [state, setState] = useState([]);

//     useEffect(() => {

//         let xhr = new XMLHttpRequest();
//         // ?assign api end point
//         xhr.open("GET", "https://api.github.com/users");
//         xhr.onload = () => {
//             let users = JSON.parse(xhr.response)
//             setState(users)
//         };
//         xhr.send()
//     },[])

//   return (
//       <div style={{"display":"flex", "flexWrap":"wrap"}}>
//           {
//               state.length === 0 ? "loading" : state.map(userData => {
//                   return (
//                     <Fragment key={userData.id}>
//                       <li>
//                         <img src={userData.avatar_url} alt="" style={{"width": "200px"}} />
//                           </li>
//                           <li>
//                               {userData.login}
//                           </li>
//                     </Fragment>
//                   );
//               })
//           }
//     </div>
//   )
// }

// export default Home

// // ! using axios

// import React, { useEffect, useState, Fragment } from "react";
// import axios from "axios"
// const Home = () => {
//   let [state, setState] = useState([]);

//   useEffect(() => {
//       axios.get("https://api.github.com/users").then(fetchedData => {
//         setState(fetchedData.data)
//     }).catch(err=>console.log(err))
//   }, []);

//   return (
//     <div style={{ display: "flex", flexWrap: "wrap" }}>
//       {state.length === 0
//         ? "loading"
//         : state.map(userData => {
//             return (
//               <Fragment key={userData.id}>
//                 <li>
//                   <img
//                     src={userData.avatar_url}
//                     alt=""
//                     style={{ width: "200px" }}
//                   />
//                 </li>
//                 <li>{userData.login}</li>
//               </Fragment>
//             );
//           })}
//     </div>
//   );
// };

// export default Home;



// ! async and await(try and catch) using axios

import React, { useEffect, useState, Fragment } from "react";
import axios from "axios"
const Home = () => {
  let [state, setState] = useState([]);

  useEffect(() => {
      let fetchData = async() => {
          try {
              let users = await axios.get("https://api.github.com/users");
              setState(users.data)
          } catch (error) {
            console.log(error);
          }
      }
      fetchData();
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {state.length === 0
        ? "loading"
        : state.map(userData => {
            return (
              <Fragment key={userData.id}>
                <li>
                  <img 
                    src={userData.avatar_url}
                    alt=""
                    style={{ width: "200px" }}
                  />
                </li>
                <li>{userData.login}</li>
              </Fragment>
            );
          })}
    </div>
  );
};

export default Home;