document.getElementById(
  "headerleft"
).innerHTML = `                    <div class="mdk-drawer__content ">
<div class="sidebar sidebar-left sidebar-dark bg-dark o-hidden" data-perfect-scrollbar>
    <div class="sidebar-p-y">
        <ul class="sidebar-menu sm-active-button-bg">
            <li class="sidebar-menu-item active">
                <a class="sidebar-menu-button" href="instructor-dashboard.html">
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
                <a class="sidebar-menu-button" href="instructor-profile.html">
                    <span class="sidebar-menu-text">Profile</span>
                </a>
            </li>                   
                    <li class="sidebar-menu-item">
                        <a class="sidebar-menu-button" href="instructor-account-edit.html">
                            <span class="sidebar-menu-text">Edit Account123</span>
                        </a>
                    </li>
                    <li class="sidebar-menu-item">
            <a class="sidebar-menu-button" href="instructor-change-password.html">
                <span class="sidebar-menu-text">Change Password</span>
            </a>
        </li>
 
                </ul>
            </li>
            <li class="sidebar-menu-item">
                <a class="sidebar-menu-button" href="instructor-messages.html">
                    <i
                        class="sidebar-menu-icon sidebar-menu-icon--left material-icons">comment</i>
                    Messages
                    <span class="ml-auto sidebar-menu-toggle-icon"></span>
                </a>
            </li>
        </ul>
        <div class="sidebar-heading">Courses</div>
        <ul class="sidebar-menu sm-active-button-bg">
        <li class="sidebar-menu-item">
                <a class="sidebar-menu-button sidebar-js-collapse" data-toggle="collapse"
                    href="#course_menu">
                    <i
                        class="sidebar-menu-icon sidebar-menu-icon--left material-icons">import_contacts</i>
                    Course Manager
                    <span class="ml-auto sidebar-menu-toggle-icon"></span>
                </a>
                <ul class="sidebar-submenu sm-indent collapse" id="course_menu">
                <li class="sidebar-menu-item">
                <a class="sidebar-menu-button" href="instructor-courses.html">
                    <span class="sidebar-menu-text">Courses</span>
                </a>
            </li>
                    <li class="sidebar-menu-item">
                        <a class="sidebar-menu-button" href="instructor-add-course.html">
                            <span class="sidebar-menu-text">Add Course</span>
                        </a>
                    </li>
                    <li class="sidebar-menu-item">
                        <a class="sidebar-menu-button" href="instructor-course-edit.html">
                            <span class="sidebar-menu-text">Edit Course</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="sidebar-menu-item">
                <a class="sidebar-menu-button" href="instructor-quizzes.html">
                    <i class="sidebar-menu-icon sidebar-menu-icon--left material-icons">assessment</i>
                    Course Assesments
                </a>
            </li>
            <li class="sidebar-menu-item">
                <a class="sidebar-menu-button" href="instructor-live-classes.html">
                    <i
                        class="sidebar-menu-icon sidebar-menu-icon--left material-icons">live_tv</i>
                    Live Classes
                </a>
            </li>
            <li class="sidebar-menu-item">
                <a class="sidebar-menu-button" href="instructor-statement.html">
                    <i
                        class="sidebar-menu-icon sidebar-menu-icon--left material-icons">receipt</i>
                    Statement
                </a>
            <li class="sidebar-menu-item">
                <a class="sidebar-menu-button" href="login.html" onclick="logout()">
                    <i
                        class="sidebar-menu-icon sidebar-menu-icon--left material-icons">lock_open</i>
                    Logout
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
