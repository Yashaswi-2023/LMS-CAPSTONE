document.getElementById("default-drawer").innerHTML = `
<div class="mdk-drawer__content ">
                        <div class="sidebar sidebar-left sidebar-dark bg-dark o-hidden" data-perfect-scrollbar>
                            <div class="sidebar-p-y">
                                <ul class="sidebar-menu">
                                    <li class="sidebar-menu-item active">
                                        <a class="sidebar-menu-button" href="student-dashboard.html">
                                            <i
                                                class="sidebar-menu-icon sidebar-menu-icon--left material-icons">account_box</i>
                                            Dashboard
                                        </a>
                                    </li>

                                </ul>
                                <!-- Account menu -->
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
                                                <a class="sidebar-menu-button" href="student-account-edit.html">
                                                    <span class="sidebar-menu-text">Edit Account</span>
                                                </a>
                                            </li>
                                            <li class="sidebar-menu-item">
                                                <a class="sidebar-menu-button" href="student-account-change-password.html">
                                                    <span class="sidebar-menu-text">Change Password</span>
                                                </a>
                                            </li>
                                            <li class="sidebar-menu-item">
                                                <a class="sidebar-menu-button" href="student-account-edit-basic.html">
                                                    <span class="sidebar-menu-text">Basic Information</span>
                                                </a>
                                            </li>
                                            <li class="sidebar-menu-item">
                                                <a class="sidebar-menu-button" href="student-profile.html">
                                                    <span class="sidebar-menu-text">Student Profile</span>
                                                </a>
                                            </li>
                                            
                                        </ul>
                                    </li>
                                </ul>
                                <!-- Account menu -->
                                <ul class="sidebar-menu">
                                    <li class="sidebar-menu-item">
                                        <a class="sidebar-menu-button" href="student-messages.html">
                                            <i
                                                class="sidebar-menu-icon sidebar-menu-icon--left material-icons fa fa-comments"></i>
                                            Messages <span
                                                class="sidebar-menu-badge badge badge-primary badge-notifications ml-auto">0</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul class="sidebar-menu">
                                    <li class="sidebar-menu-item">
                                        <a class="sidebar-menu-button" href="student-notes.html">
                                            <i
                                                class="sidebar-menu-icon sidebar-menu-icon--left material-icons">comment</i>
                                            Notes </a>
                                    </li>
                                </ul>

                                <ul class="sidebar-menu">
                                <li>
                                            <a class="sidebar-menu-button" href="student-admin-assessment.html">
                                            <i
                                                class="sidebar-menu-icon sidebar-menu-icon--left material-icons">poll</i>
                                           Admin assessments
                                        </a>
                                            </li>
                                            </ul>

                                <!-- Account menu -->
                                <ul class="sidebar-menu">
                                    <li class="sidebar-menu-item">
                                        <a class="sidebar-menu-button sidebar-js-collapse" data-toggle="collapse"
                                            href="#subscription_menu">
                                            <i
                                                class="sidebar-menu-icon sidebar-menu-icon--left material-icons fas fa-bell"></i>
                                            Subscription Details
                                            <span class="ml-auto sidebar-menu-toggle-icon"></span>
                                        </a>
                                        <ul class="sidebar-submenu sm-indent collapse" id="subscription_menu">
                                            <li class="sidebar-menu-item">
                                                <a class="sidebar-menu-button"
                                                    href="student-account-billing-subscription.html">
                                                    <span class="sidebar-menu-text">Subscription</span>
                                                </a>
                                            </li>
                                            <li class="sidebar-menu-item">
                                                <a class="sidebar-menu-button"
                                                    href="student-account-billing-upgrade.html">
                                                    <span class="sidebar-menu-text">Upgrade Account</span>
                                                </a>
                                            </li>
                                            <li class="sidebar-menu-item">
                                                <a class="sidebar-menu-button"
                                                    href="student-account-billing-payment-information.html">
                                                    <span class="sidebar-menu-text">Payment Information</span>
                                                </a>
                                            </li>
                                            <li class="sidebar-menu-item">
                                                <a class="sidebar-menu-button" href="student-billing.html">
                                                    <span class="sidebar-menu-text">Payment History</span>
                                                </a>
                                            </li>
                                            <li class="sidebar-menu-item">
                                                <a class="sidebar-menu-button" href="student-invoice.html">
                                                    <span class="sidebar-menu-text">Student Invoice</span>
                                                </a>
                                            </li>


                                        </ul>
                                    </li>


                                </ul>

                                <ul class="sidebar-menu sm-active-button-bg">
                                    <li class="sidebar-menu-item">
                                        <a class="sidebar-menu-button sidebar-js-collapse" data-toggle="collapse"
                                            href="#course_menu">
                                            <i
                                                class="sidebar-menu-icon sidebar-menu-icon--left material-icons fas fa-book-reader"></i>
                                            Courses
                                            <span class="ml-auto sidebar-menu-toggle-icon"></span>
                                        </a>
                                        <ul class="sidebar-submenu sm-indent collapse" id="course_menu">
                                            <li class="sidebar-menu-item">
                                                <a class="sidebar-menu-button" href="student-browse-courses.html">
                                                    <i
                                                        class="sidebar-menu-icon sidebar-menu-icon--left material-icons">search</i>
                                                    Browse Courses
                                                </a>
                                            </li>
                                            <li class="sidebar-menu-item">
                                                <a class="sidebar-menu-button" href="student-quiz-results.html">
                                                    <i
                                                        class="sidebar-menu-icon sidebar-menu-icon--left material-icons">poll</i>
                                                    Quiz Results
                                                </a>
                                            </li>
                                            
                                            <li class="sidebar-menu-item">
                                                <a class="sidebar-menu-button" href="student-my-courses.html">
                                                    <i
                                                        class="sidebar-menu-icon sidebar-menu-icon--left material-icons">school</i>
                                                    My Courses
                                                </a>
                                            </li>

                                        </ul>
                                    </li>
                                </ul>
                                <!-- Account menu -->
                                <ul class="sidebar-menu">

                                    <li class="sidebar-menu-item">
                                        <a class="sidebar-menu-button" href="student-web-compiler.html">
                                            <i
                                                class="sidebar-menu-icon sidebar-menu-icon--left material-icons ">notes</i>
                                            Web Compiler
                                        </a>
                                    </li>
                                </ul>
                                <ul class="sidebar-menu">

                                    <li class="sidebar-menu-item">
                                        <a class="sidebar-menu-button" id="logout2">
                                            <i
                                                class="sidebar-menu-icon sidebar-menu-icon--left material-icons">lock_open</i>
                                            Logout
                                        </a>
                                    </li>
                                </ul>


                            </div>
                        </div>
                    </div>
`;

document.getElementById("logout2").addEventListener("click", () => {
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("token");
  window.location.href = "student-login.html";
});
