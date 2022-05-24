var db = firebase.database()
console.log(db)

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

console.log(generateString(5));

function myFunction() {
    var name = document.getElementById("name").value;
    

    var comment = document.getElementById("comment").value;
  
// creat random id
  random = generateString(5)
  // var t = {timestamp: firebase.database.ServerValue.TIMESTAMP}
// console.log(t)
  db.ref("/comments/"+ random +"/").update({ timestamp:firebase.database.ServerValue.TIMESTAMP,name: name, comment: comment })
  // teams.sort(function(team1, team2){
  //   return team1.timestamp - team2.timestamp;
  // })

  }

  function showComments(){
    db.ref("/comments/").on("value",(data)=>{
      var response = data.val()
      
      for (x in response){
        console.log(response[x])
        var name = response[x].name
        var comment = response[x].comment

        var nameTag = document.createElement("p");
        var text = document.createTextNode("Name: "+name);
        nameTag.appendChild(text);

        var cTag = document.createElement("p");
        var ctext = document.createTextNode("Comment: "+ comment);
        cTag.appendChild(ctext);
        
        
        nameTag.setAttribute("id","username")
        cTag.setAttribute("id","data")
        
        
        var element = document.getElementById("new");
        element.appendChild(nameTag);
        element.appendChild(cTag);

      
      }
      
    })
  }