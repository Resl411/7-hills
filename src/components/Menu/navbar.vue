<template>
    <div class="pos-f-t">
        <nav id="navcolor" class="navbar fixed-bottom navbar-dark bg-dark">
            <div class="row justify-content-left" id="nav-row">
                <div class="col-xs-3" style="text-align: left; padding-left: 10px;">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="col-xs-6" style="text-align: right; padding-left: 10px;">
                    <form class="form-inline">
                        <input class="form-control mr-sm-2"  style="width: 60vw" type="search" placeholder="Where do you want to go?" aria-label="Search">                        
                    </form>
                </div> 
                <div class="col-xs-3" style="padding-left: 10px;">
                        <button id="start" class="btn btn-outline-light" aria-pressed="false" type="submit"><i class="fas fa-angle-right"></i> Go!</button>
                </div>    
            </div>
        </nav>
        <div class="collapse fixed-bottom" id="navbarToggleExternalContent" style="bottom: 50px">
            <div class="bg-dark p-4">                
                <ul class="nav justify-content-center nav-fill" id="nav-menu">
                    <span class="nav-item" style="margin: 10px;">
                        <router-link to="/home" class="text-white">
                            <button class="btn btn-outline-light" type="submit" style="width: 90px;">
                            <i class="fas fa-globe"></i> Home</button>
                        </router-link>
                    </span>
                    <span class="nav-item" style="margin: 10px;">
                        <router-link to="/tours" class="text-white">
                            <button class="btn btn-outline-light" type="submit" style="width: 90px;">
                                <i class="fas fa-camera-retro"></i> Tours</button>
                        </router-link>
                    </span>
                    <span class="nav-item" style="margin: 10px;">
                        <router-link to="/aboutus" class="text-white">
                            <button class="btn btn-outline-light" style="width: 90px;" type="submit">
                                <i class="fas fa-info"></i> About</button>
                        </router-link>
                    </span>                    
                </ul>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'navbar'
    
}
</script>

<style scoped>

.col-xs-3 {
    padding-right: 20 px;
}

</style>