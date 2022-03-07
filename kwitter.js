function addUser() {
    user_name = document.getElementsByTagName("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "Kwitter_room.html";
}