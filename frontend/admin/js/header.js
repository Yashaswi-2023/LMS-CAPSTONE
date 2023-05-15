document.getElementById("header").innerHTML = `            <div class="mdk-header__content">

<!-- Navbar -->
<nav id="default-navbar" class="navbar navbar-expand navbar-dark bg-primary m-0">
    <div class="container-fluid">
        <!-- Toggle sidebar -->
        <button class="navbar-toggler d-block" data-toggle="sidebar" type="button">
            <span class="material-icons">menu</span>
        </button>

        <!-- Brand -->
        <a href="admin-dashboard.html" class="navbar-brand">
            <img src="../images/logo/white.svg" class="mr-2" alt="LearnPlus" />
            <span class="d-none d-xs-md-block">LearnPlus</span>
        </a>



        <div class="flex"></div>

        <!-- Menu -->


        <!-- Menu -->
        <ul class="nav navbar-nav flex-nowrap">
            <!-- User dropdown -->
            <li class="nav-item dropdown ml-1 ml-md-3">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"><img
                        src="../../images/Avatar.jpg" alt="Avatar" class="rounded-circle"
                        width="40" id="avatar_main"></a>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="admin-account-edit.html">
                        <i class="material-icons">edit</i> Edit Account
                    </a>
                    <a class="dropdown-item" href="admin-profile.html">
                        <i class="material-icons">person</i> Public Profile
                    </a>
                    <a class="dropdown-item" href="login.html" onclick="logout()">
                        <i class="material-icons">lock</i> Logout
                    </a>
                </div>
            </li>
            <!-- // END User dropdown -->
        </ul>
    </div>
</nav>
<!-- // END Navbar -->

</div>`

function logout() {
    console.log("yashaswi");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("token");
}