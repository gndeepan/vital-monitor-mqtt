// import React from 'react'

// import { useMqttState, useSubscription } from 'mqtt-react-hooks'

// const Status = () => {
//     const {connectionStatus} = useMqttState();
//     const {client} = useMqttState();
//     const { message} = useSubscription([
//         'room/esp32/testing',
//         'room/esp32/light'
//     ]);


//     function handleClick(message) {
//         return client.publish('esp32/let' , message)
//     }

//   return (
//     <div>
//     <h1>{`Status: ${connectionStatus}`}</h1>
//     <button type='button' onClick={() => handleClick('false')}>
//         click
//     </button>
//     <div>
//         <span></span>
//     </div>
//     </div>
//   )
// }

// export default Status