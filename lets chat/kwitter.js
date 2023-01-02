function adduser(){
  user_name = document.getElementById("user_input");
  localStorage.setItem("user name", user_name);
  window.location = "kwitter_room.html";
}