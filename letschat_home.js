var firebaseConfig = {
    apiKey: "AIzaSyDb8c3ningyrmN_FBdLyL_4ZnBWyRVZFWU",
    authDomain: "kwitter-259a8.firebaseapp.com",
    databaseURL: "https://kwitter-259a8-default-rtdb.firebaseio.com",
    projectId: "kwitter-259a8",
    storageBucket: "kwitter-259a8.appspot.com",
    messagingSenderId: "1042206142959",
    appId: "1:1042206142959:web:5c44f3e02bcd2e596e061a",
    measurementId: "G-NRFEKE40FY"
  };
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!! :)";

    function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "letschat_home.html";
    }
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
        console.log("Room name - "+room_name);
        row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML +=row;
       });
 });
 }
 getData();
 
 function redirectToRoomName(name){
 console.log(name);
 localStorage.setItem("room_name", name);
 window.location="letschat_page.html";
 }
 function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="kwitter_index.html";
}