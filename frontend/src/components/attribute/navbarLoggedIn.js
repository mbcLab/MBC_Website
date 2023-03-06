import React from "react";


function NavbarLoggedIn() {
        return(
            <nav class="w3-bar w3-black">
            <img src="/download.png" class="w3-bar-item" style={{maxHeight:'45px'}}></img>
            <a href="/UserList" class="w3-bar-item w3-button"><i class="fa fa-home"></i> User</a>
            <a href="/ProjectList" class="w3-bar-item w3-button"><i class="fa fa-calendar"></i> Project</a>
            <a href="/BlogList" class="w3-bar-item w3-button"><i class="fa fa-paperclip"></i> Blog</a>
            <a href="/logout" class="w3-bar-item w3-button w3-right"><i class="fa fa-sign-out"></i></a>

            </nav>
        );
            
    }
export default NavbarLoggedIn;