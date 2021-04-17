const sql = require("./db.js");


const Room = function(room) {
    this.room_id =  room.room_id;
    this.room_name = room.room_name;
};

Room.create = (newRoom, result) =>{
    sql.query("INSERT INTO room SET ?", newRoom, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
}

console.log("something");
  });
};

Customer.findById = (room_id, result) => {
    sql.query(`SELECT * FROM room WHERE id = ${room_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found room: ", res[0]);
        result(null, res[0]);
        return;
      }
  
     
      result({ kind: "not_found" }, null);
    });
  };

  Customer.getAll = result => {
    sql.query("SELECT * FROM room", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("room: ", res);
      result(null, res);
    });
  };

  Customer.remove = (room_id, result) => {
    sql.query("DELETE FROM room WHERE id = ?", room_id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted room with id: ", room_id);
      result(null, res);
    });
  };
  