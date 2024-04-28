function myFunction () {
    
    document.getElementById ("dropfeat").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.featpress')) {
        var dropdowns = document.getElementsByClassName ('dropdown');
        var i;
        for (i=0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }

        }
    }
}