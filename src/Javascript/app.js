// create jquery workspace 
$(document).ready(function () {

    // ! Events

    $(".p").click(function () {
        $(this).hide()
    })

    $("h3").mouseenter(function () {
        alert("this is JQuery")
    })


    $(".input").mousedown(function () {
        alert("Hello input")
    })


    // ? Css
    $("h2").on({
        mouseenter: function () {
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function () {
            $(this).css("background-color", "lightblue");
        },
        click: function () {
            $(this).css("background-color", "yellow");
        }
    });

    // ? hide & show
    $(".hide").click(function () {
        $(".myWord").hide(500)
    })
    $(".show").click(function () {
        $(".myWord").show(1000)
    })


    // ! Toggle

    $(".toggle").click(function () {
        $(".myWord1").toggle("slow")
    })


    // ? Fade
    $("#fadeBtn").click(function () {
        $("#box1").fadeToggle()
        $("#box2").fadeToggle()
        $("#box3").fadeToggle()
    })



    // ! Animate

    $("#animateBtn").click(function () {
        $("#redBox").animate({
            opacity: 'toggle',
            height: 'toggle',
            width: 'toggle'
        })
    })


    $("#ultraAnimate").click(function () {
        let box = $("#greenBox");
        box.animate({ height: '300px', opacity: '0.4' }, "slow");
        box.animate({ width: '300px', opacity: '0.8', backgroundColor: "black" }, "slow");
        box.animate({ height: '100px', opacity: '0.4', backgroundColor: "yellow" }, "slow");
        box.animate({ width: '100px', opacity: '0.8', backgroundColor: "green" }, "slow");
    })





    //  art arda method kullanımı & jquery method chaining
    $("#clickMe").click(function () {
        $("#p1").css("color", "red").slideUp(1000).slideDown(1000);
    });



    // ? Slides
    $("#flip").click(function () {
        $("#panel").slideToggle("slow");
    });

    $("#flip2").click(function () {
        $("#panel2").slideToggle("slow");
    });



    // ! get


    // ? val()
    $("#showValue").click(function () {
        alert(`Value : ${$("#test").val()}`)
    })



    // ? attr()
    $("#getAttribute").click(function () {
        alert($("#w3s").attr("href"))
    })



    // ! set


    $("#button1").click(function () {
        $("#test11").text("Hello world!");
    });
    $("#button2").click(function () {
        $("#test22").html("<b>Hello world!</b>");
    });
    $("#button3").click(function () {
        $("#test33").val("Kerem Kenan Eren");
    });


    // ? attr() - set
    $(".buttonSet").click(function () {
        $("#w3sJ").attr({
            "href": "https://www.w3schools.com/jquery/",
            "title": "W3Schools jQuery Tutorial"
        });
    });


});