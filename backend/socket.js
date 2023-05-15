var io = require("socket.io")(8901, {
  cors: {
    origin: "http://localhost:5500",
  },
});

var user = [];

function removeuser(socketid) {
  for (var i = 0; i < user.length; i++) {
    if (user[i].socketid == socketid) {
      user.splice(i, 1);

      break;
    }
  }
}

function adduser(userid, socketid) {
  obj = {
    socketid: socketid,

    userid: userid,
  };

  for (var i = 0; i < user.length; i++) {
    if (user[i].userid == userid) {
      user[i] = obj;

      break;
    }
  }

  if (user.length == i) user.push(obj);

  console.log(user);
}

function findsid(userid) {
  for (var i = 0; i < user.length; i++) {
    if (user[i].userid == userid) {
      return user[i].socketid;
    }
  }
}

function finduid(socketid) {
  for (var i = 0; i < user.length; i++) {
    if (user[i].socketid == socketid) {
      return user[i].userid;
    }
  }
}

//Whenever someone connects this gets executed

io.on("connection", function (socket) {
  console.log("A user connected", socket.id);

  //Whenever someone disconnects this piece of code executed

  socket.on("disconnect", async function () {
    await removeuser(socket.id);

    console.log("A user disconnected");

    io.emit("users", user);
  });

  socket.on("adduser", async (userid) => {
    console.log(socket.id);

    await adduser(userid, socket.id);

    io.emit("users", user);
  });

  socket.on("sendmessage", (user) => {
    console.log(user);

    userid = user[0];

    message = user[1];

    console.log(message);

    console.log(userid);

    toaddr = findsid(userid);

    console.log(toaddr);

    io.to(toaddr).emit("getmessage", [message, finduid(socket.id)]);
  });
});

// module.exports = io;
