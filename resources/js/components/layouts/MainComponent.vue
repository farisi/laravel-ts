<template>
<div id="wrapper" class="d-flex">
    <div id="#sidebar-wrapper" class="border-end bg-white">
        <div  class="sidebar-heading border-bottom bg-light">
            <div class="list-group list-group-flush">
                <a href="" class="list-group-item list-group-item-action list-group-item-light p-3">Home</a>
                <a href="" class="list-group-item list-group-item-action list-group-item-light p-3">Kategori</a>
                <a href="" class="list-group-item list-group-item-action list-group-item-light p-3">Keahian</a>
                <a href="" class="list-group-item list-group-item-action list-group-item-light p-3">Tukang</a>
            </div>
        </div>
    </div>  
    <div id="#page-content-wrapper">
        <div class="nav navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <div class="container-fluid">
                <button id="sidebarToggle" btn btn-primary>Toggle Menu</button>
                <button  class="navbar-toggle" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded='false' aria-label='Toggle navigation'>
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="navbarSupportedContent" class="collapse navbar-collapse">
                    <ul class='navbar-nav ms-auto mt-2 mt-lg-0'>
                        <li class="nav-item active"><a href="">Home</a></li>
                        <li class="nav-item active"><a href="">Link</a></li>
                        <li class="nav-item dropdown">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> | Dropdown
                                <div class="dropdown-menu dropdown-menu-end">
                                    <a class="dropdown-item" href="">Aksi</a>
                                    <a class="dropdown-item" href="">Aksi Lain</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="">Aksi Lain Lagi</a>
                                </div>
                             </a>
                        </li>
                    </ul>
                </div>
                <div class="container-fluid">
                    <h4 class="mt-4">Simple Sidebar</h4>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default ({
    name:'MainComponent',
    setup() {
        
    },
})
</script>
