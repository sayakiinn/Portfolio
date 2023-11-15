$(document).ready(function () {
    // Remove Preloader
    $("#preloader").fadeOut("slow");

    // Set Animasi
    init_animate();

    // Navigation Active
    $("a.nav-link").on("click",function(){
        // Menghilangkan class active pada setiap element a.nav-link
        $("a.nav-link").removeClass(" active");
        // Menambahkan class kedalam element a.nav-link yang saat ini di klik
        $(this).addClass(" active");
    });

});


// Trigger Element with class animate__animated
function init_animate() {
    $(".animate__animated").each(function () {
        $(this).on('inview', function (event, isInView) {
            // Mengambil nilai dari attribute data-animate
            var animate_class = $(this).attr("data-animate");

            // Mendeteksi element ketika tampil
            if (isInView) {
                // Jika tampil / visible
                $(this).addClass(animate_class);
            } else {
                // Jika tidak tampil / not visible
                $(this).removeClass(animate_class);
            }
        });
    });
}