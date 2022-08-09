
var firebaseConfig = {
      apiKey: "AIzaSyDvsb6yNdvsLVF5CZFIhAbRE268AvH_XsA",
      authDomain: "aquila-kwitter.firebaseapp.com",
      databaseURL: "https://aquila-kwitter-default-rtdb.firebaseio.com",
      projectId: "aquila-kwitter",
      storageBucket: "aquila-kwitter.appspot.com",
      messagingSenderId: "669085389266",
      appId: "1:669085389266:web:aba3044e59ec322199780b"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    function addRoom() { room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" });
     localStorage.setItem("room_name", room_name); window.location = "kwitter_page.html"; }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name -"+ Room_names);
row = "<div class='Room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>");
document.getElementById("output").innerHTML += row;
      //End code
      });});}


      getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name;)
      window.location = "kwitter_page.html";
}