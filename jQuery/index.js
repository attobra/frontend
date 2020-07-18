//
// $("h1").text("Bye");
// $("a").attr("href", "http://www.yahoo.com");

// $("h1").click(function(){
//   $("h1").css("color", "purple");
// });

                       //event listener click
// $("button").click(function(){
//   $("h1").css("color", "purple");
// });

                // logs the key for each input i type from keyboard

// $("input").keydown(function(event){
//   console.log(event.key);
// });

$("body").keydown(function(event){
  $("h1").text(event.key);
});

$("h1").on("mouseover", function(){
  $("h1").css("color", "purple");
});

              //to add another element before and after another html
// $("h1").before("<button>New</button");
// $("h1").prepend("<button>New</button");
// $("h1").after("<button>New</button");
// $("h1").prepend("<button>New</button");
// $("h1").remove();

            // animation --- property with numeric value like margin, opacity
// $("h1").animate({opacity: 0.5});
