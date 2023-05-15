document.getElementById(
  "default-drawer"
).innerHTML = `                    <div class="mdk-drawer__content ">
<div class="sidebar sidebar-left sidebar-dark bg-dark o-hidden" data-perfect-scrollbar>
    <div class="sidebar-p-y">
        <ul class="sidebar-menu sm-active-button-bg">
            <li class="sidebar-menu-item active">
                <a class="sidebar-menu-button" href="admin-dashboard.html">
                    <i
                        class="sidebar-menu-icon sidebar-menu-icon--left material-icons">school</i>
                    Dashboard
                </a>
            </li>
        </ul>
        <!-- Account menu -->
        <div class="sidebar-heading">Account</div>
        <ul class="sidebar-menu">

            <li class="sidebar-menu-item">
                <a class="sidebar-menu-button sidebar-js-collapse" data-toggle="collapse"
                    href="#account_menu">
                    <i
                        class="sidebar-menu-icon sidebar-menu-icon--left material-icons">person_outline</i>
                    Account
                    <span class="ml-auto sidebar-menu-toggle-icon"></span>
                </a>
                <ul class="sidebar-submenu sm-indent collapse" id="account_menu">
                <li class="sidebar-menu-item">
                <a class="sidebar-menu-button" href="admin-profile.html">
                    <span class="sidebar-menu-text">Profile</span>
                </a>
            </li>
                  
    <li class="sidebar-menu-item">
                        <a class="sidebar-menu-button" href="admin-account-edit.html">
                            <span class="sidebar-menu-text">Edit Account</span>
                        </a>
                    </li>
                    <li class="sidebar-menu-item">
                        <a class="sidebar-menu-button" href="admin-account-edit-basic.html">
                            <span class="sidebar-menu-text"></span>
                        </a>
                    </li>
                    <li class="sidebar-menu-item">
                        <a class="sidebar-menu-button" href="admin-change-password.html">
                            <span class="sidebar-menu-text">Change Password</span>
                        </a>
                    </li>
                    
                </ul>
            </li>
            <li class="sidebar-menu-item">
            <a class="sidebar-menu-button" href="admin-add-assessment.html">
                <i
                    class='fas fa-chalkboard'>&nbsp;&nbsp;&nbsp;</i>Add Assessment
            </a>
        </li>
        <li class="sidebar-menu-item">
        <a class="sidebar-menu-button" href="admin-add-teacher.html">
            <i
                class='fas fa-chalkboard-teacher'>&nbsp;&nbsp;&nbsp;</i>Add Teacher
        </a>
    </li>
        <li class="sidebar-menu-item">
            <a class="sidebar-menu-button" href="login.html">
                <i
                    class="sidebar-menu-icon sidebar-menu-icon--left material-icons">lock_open</i>
                Logout
            </a>
        </li>
    </ul>
    <ul class="sidebar-menu sm-active-button-bg">
        <li class="sidebar-menu-item">
            <a class="sidebar-menu-button" href="admin-verify-test.html">
                <i
                    class="sidebar-menu-icon sidebar-menu-icon--left material-icons">school</i>
                Verify Tests
            </a>
        </li>
    </ul>
        <!-- Components menu -->
    </div>
</div>
</div>`;
function logout() {
  console.log("yashaswi");
  sessionStorage.removeItem("email");
  sessionStorage.removeItem("token");
}
