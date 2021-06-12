
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyC3IEYFQahfQXbwzx-CMjBWTHCpu7uix_Y",
      authDomain: "kwitter-20c6e.firebaseapp.com",
      databaseURL: "https://kwitter-20c6e-default-rtdb.firebaseio.com",
      projectId: "kwitter-20c6e",
      storageBucket: "kwitter-20c6e.appspot.com",
      messagingSenderId: "953794630334",
      appId: "1:953794630334:web:cfae28fe04df153b9444ef",
      measurementId: "G-J6B5PHQRS7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   // firebase.analytics();

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
row="<div class='room_name' id="+Room_names+ " onclick='redirect_to_room(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function add_room(){

      room_name=document.getElementById("addroom").value;
      firebase.database().ref("/").child(room_name).update({

            purpose: 'adding room name'
      });

      localStorage.setItem("roomname", room_name);
     window.location="kwitter_page.html";
}

function redirect_to_room(name){

      localStorage.setItem("roomname",name);
      window.location="kwitter_page.html";
}