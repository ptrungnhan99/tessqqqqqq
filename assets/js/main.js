$(document).ready(function () {
    $(
        ".section-product .product-item .product-tabs .tab-item:first-child"
    ).addClass("active");
    $(
        ".section-product .product-item .product-tab-content .tab-content"
    ).hide();
    $(
        ".section-product .product-item .product-tab-content .tab-content:first-child"
    ).show();
    $(".section-product .product-item .product-tabs .tab-item").click(
        function () {
            // Find the product item that the clicked tab belongs to
            var productItem = $(this).closest(".product-item");

            // Remove "active" class from all tab items within the same product item
            productItem.find(".tab-item").removeClass("active");

            // Add "active" class to the clicked tab
            $(this).addClass("active");

            // Find the index of the clicked tab
            var index = $(this).index();

            // Hide all tab content within the same product item
            productItem.find(".tab-content").hide();

            // Show the tab content that corresponds to the clicked tab
            productItem.find(".tab-content").eq(index).show();
        }
    );
    // Function to check if an element is in the viewport
    // function isElementInViewport(el) {
    //     var rect = el[0].getBoundingClientRect();
    //     return (
    //         rect.top >= 0 &&
    //         rect.left >= 0 &&
    //         rect.bottom <= $(window).height() &&
    //         rect.right <= $(window).width()
    //     );
    // }
    // var producTwo = $("#product2");
    // //console.log(producTwo);
    // $(window).on("scroll", function () {
    //     if (isElementInViewport(producTwo)) {
    //         console.log("Element is in the viewport.");
    //     } else {
    //         console.log("Element is not in the viewport.");
    //     }
    // });
    function isElementInViewport(element) {
        var elementTop = element.offset().top;
        var elementBottom = elementTop + element.height();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    }
    $(window).scroll(function () {
        $(".product-item").each(function () {
            if (isElementInViewport($(this))) {
                var color = $(this).attr("data-color");
                $("#section-product").css({ "background-color": color });
                console.log("Inview");
                //console.log(index);
                // You can add your code to do something with the in-viewport product items here.
            }
        });
    });
});
