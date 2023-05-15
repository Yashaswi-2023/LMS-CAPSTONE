document.getElementById("headertop").innerHTML = `
<nav id="default-navbar"
class="navbar navbar-expand navbar-dark bg-primary m-0">
<div class="container-fluid">
   <!-- Toggle sidebar -->
   <button class="navbar-toggler d-block"
           data-toggle="sidebar"
           type="button">
       <span class="material-icons">menu</span>
   </button>
    
   <!-- Brand -->
   <a href="student-dashboard.html"
      class="navbar-brand">
       <img src="../images/logo/white.svg"
            class="mr-2"
            alt="LearnPlus" />
       <span class="d-none d-xs-md-block">LearnPlus</span>
   </a>

   <div class="flex" style="display : flex; justify-content : center">
   <a href="#" class="btn btn-secondary ml-3" data-toggle="modal" data-target="#exampleModal"  class="add-mega-menu">Take Notes</a>
   <a href="#" class="btn btn-secondary ml-3" data-toggle="modal" data-target="#exampleModal1"  class="add-mega-menu">ToDo List</a>

   </div>


   <!-- Menu -->
   <ul class="nav navbar-nav flex-nowrap">

       <!-- Notifications dropdown -->
       <li class="nav-item dropdown dropdown-notifications dropdown-menu-sm-full">
           <button class="nav-link btn-flush dropdown-toggle"
                   type="button"
                   data-toggle="dropdown"
                   data-dropdown-disable-document-scroll
                   data-caret="false">
               <i class="material-icons">notifications</i>
               <span class="badge badge-notifications badge-danger">2</span>
           </button>
           <div class="dropdown-menu dropdown-menu-right">
               <div data-perfect-scrollbar
                    class="position-relative">
                   <div class="dropdown-header"><strong>Messages</strong></div>
                   <div class="list-group list-group-flush mb-0">

                       <a href="student-messages.html"
                          class="list-group-item list-group-item-action unread">
                           <span class="d-flex align-items-center mb-1">
                               <small class="text-muted">5 minutes ago</small>

                               <span class="ml-auto unread-indicator bg-primary"></span>

                           </span>
                           <span class="d-flex">
                               <span class="avatar avatar-xs mr-2">
                                   <img src="../images/people/110/woman-5.jpg"
                                        alt="people"
                                        class="avatar-img rounded-circle">
                               </span>
                               <span class="flex d-flex flex-column">
                                   <strong>Michelle</strong>
                                   <span class="text-black-70">Clients loved the new design.</span>
                               </span>
                           </span>
                       </a>

                       <a href="student-messages.html"
                          class="list-group-item list-group-item-action unread">
                           <span class="d-flex align-items-center mb-1">
                               <small class="text-muted">5 minutes ago</small>

                               <span class="ml-auto unread-indicator bg-primary"></span>

                           </span>
                           <span class="d-flex">
                               <span class="avatar avatar-xs mr-2">
                                   <img src="../images/people/110/woman-5.jpg"
                                        alt="people"
                                        class="avatar-img rounded-circle">
                               </span>
                               <span class="flex d-flex flex-column">
                                   <strong>Michelle</strong>
                                   <span class="text-black-70">🔥 Superb job..</span>
                               </span>
                           </span>
                       </a>

                   </div>

                   <div class="dropdown-header"><strong>System notifications</strong></div>
                   <div class="list-group list-group-flush mb-0">

                       <a href="student-messages.html"
                          class="list-group-item list-group-item-action border-left-3 border-left-danger">
                           <span class="d-flex align-items-center mb-1">
                               <small class="text-muted">3 minutes ago</small>

                           </span>
                           <span class="d-flex">
                               <span class="avatar avatar-xs mr-2">
                                   <span class="avatar-title rounded-circle bg-light">
                                       <i class="material-icons font-size-16pt text-danger">account_circle</i>
                                   </span>
                               </span>
                               <span class="flex d-flex flex-column">

                                   <span class="text-black-70">Your profile information has not been synced correctly.</span>
                               </span>
                           </span>
                       </a>

                       <a href="student-messages.html"
                          class="list-group-item list-group-item-action">
                           <span class="d-flex align-items-center mb-1">
                               <small class="text-muted">5 hours ago</small>

                           </span>
                           <span class="d-flex">
                               <span class="avatar avatar-xs mr-2">
                                   <span class="avatar-title rounded-circle bg-light">
                                       <i class="material-icons font-size-16pt text-success">group_add</i>
                                   </span>
                               </span>
                               <span class="flex d-flex flex-column">
                                   <strong>Adrian. D</strong>
                                   <span class="text-black-70">Wants to join your private group.</span>
                               </span>
                           </span>
                       </a>

                       <a href="student-messages.html"
                          class="list-group-item list-group-item-action">
                           <span class="d-flex align-items-center mb-1">
                               <small class="text-muted">1 day ago</small>

                           </span>
                           <span class="d-flex">
                               <span class="avatar avatar-xs mr-2">
                                   <span class="avatar-title rounded-circle bg-light">
                                       <i class="material-icons font-size-16pt text-warning">storage</i>
                                   </span>
                               </span>
                               <span class="flex d-flex flex-column">

                                   <span class="text-black-70">Your deploy was successful.</span>
                               </span>
                           </span>
                       </a>

                   </div>
               </div>
           </div>
       </li>
       <!-- // END Notifications dropdown -->
       <!-- User dropdown -->
       <li class="nav-item dropdown ml-1 ml-md-3">
           <a class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"><img src="${JSON.parse(sessionStorage.getItem("user")).profilePicture}"
                    alt="Avatar"
                    class="rounded-circle"
                    width="40"></a>
           <div class="dropdown-menu dropdown-menu-right">
               <a class="dropdown-item"
                  href="student-account-edit.html">
                   <i class="material-icons">edit</i> Edit Account
               </a>
               <a class="dropdown-item"
                  href="student-profile.html">
                   <i class="material-icons">person</i> ${JSON.parse(sessionStorage.getItem("user")).name}
               </a>
               <button class="dropdown-item"
                  id="logout1">
                   <i class="material-icons">lock</i> Logout
               </button>
           </div>
       </li>
       <!-- // END User dropdown -->

   </ul>
   <!-- // END Menu -->
</div>
</nav>`

document.getElementById("logout1").addEventListener("click",()=>{
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
    window.location.href="student-login.html"
})