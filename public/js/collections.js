$(document).ready(function () {

    /* activate the carousel */
    $("#modal-carousel").carousel({
        interval: false
    });

    /* change modal title when slide changes */
    $("#modal-carousel").on("slid.bs.carousel",
        function () {
            $(".modal-title")
                .html($(this)
                    .find(".active img")
                    .attr("title"));
        });
    
    $("a").click(function (event) {
        event.preventDefault();
        $("<div>")
            .append("default " + event.type + " prevented")
            .appendTo("#log");
    });

    /* when clicking a thumbnail */
    $(".thumbnail").click(function () {
        var content = $(".carousel-inner");
        var title = $(".modal-title");

        content.empty();
        title.empty();

        active.addClass("active");
        title.html(active.find("img").attr("title"));
        content.append(repoCopy);

        // show the modal
        $("#modal-gallery").modal("show");
    });

});
