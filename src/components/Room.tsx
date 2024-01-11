import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Socket, io } from "socket.io-client";

export const Room = () => {

    const [params , setParams] = useSearchParams();
    const name = params.get('name');
    const [ socket, setSocket ] = useState<null | Socket>(null);
    const [ lobby , setLobby ] = useState(true);
    const URL = "http://localhost:3000";

    useEffect(() => {

        const socket = io(URL);

        socket.on('send-offer' , ({ roomId }) => {
            alert("send offer please");

            setLobby(false);

            socket.emit("offer", {
                sdp : "",
                roomId
            })
        })

        socket.on("offer", ({ roomId , offer }) => {

            setLobby(false);
            alert("send asnwer please");

            socket.emit("answer", {
                roomId,
                sdp : ""
            })
        })

        socket.on("answer", ({ roomId , asnwer }) => {
            setLobby(false);
            alert("connection done");
            console.log(roomId,asnwer)
        })

        socket.on("lobby" ,() => {
            setLobby(true);
        })

        setSocket(socket)

    }, [name]);

    if(lobby)
    {
        return <div>
            Waiting for another connection.
        </div>
    }

    return <div>
        hi {name}
        <video width={400} height={400}></video>
        <video width={400} height={400} ></video>
    </div>
}