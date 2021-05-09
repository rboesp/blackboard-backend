const fs = require("fs")

module.exports = function (io) {
    //SOCKET LISTENERS
    io.on("connection", (socket) => {
        console.log(socket.id)

        /*
            a client is actively drawing 
        */
        socket.on("userDrawing", (move) => {
            console.log("drawing")
            const id = socket.id
            io.emit("draw", { ...move, id })
        })
        socket.on("stopDraw", () => {
            io.emit("stopDraw", socket.id)
        })
        /*
            a client who is drawing hit the clear button
            so clear every nodes board
        */
        socket.on("clear", (arg) => {
            io.emit("clearBoard", "")
        })
        socket.on("disconnect", () => {
            console.log(socket.id + "left")
        })
    })
}
