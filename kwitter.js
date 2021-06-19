function add_user(){
    
get_item=document.getElementById("username").value;

if(get_item!=''){
    localStorage.setItem("username",get_item);
    window.location="kwitter_room.html";
}
else{
document.getElementById("username").placeholder="Please type a username.";
}
}