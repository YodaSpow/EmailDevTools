$(window).on("load", function() {
  var wrapperClass = "body > table";
  $(wrapperClass).addClass("content");
  // Pseudo tooltip for images ALT: DIV only appears based on these conditions
  $("img[alt*='£'], [alt*='&'], [alt*='#'], [alt*='alt']").wrap( "<div class='fauxImg'></div>" );
  
  // Whitelisted domains URLs for the checks: 
  var currysD = "a[href*='www.currys.co.uk']",
      idD     = "a[href*='idmobile.co.uk']",
      pcwbD   = "a[href*='pcworldbusiness.co.uk']",
      tkhD    = "a[href*='teamknowhow.com']",
      ttD     = "a[href*='techtalk.currys.co.uk']",
      domainURL = currysD + "," + idD + "," + pcwbD + "," + tkhD + "," + ttD,
      linkCheck = "link";
  
  $(domainURL).addClass("linkCheck");
  $( ".linkCheck" ).not(domainURL).removeClass("linkCheck");
  $( ".linkCheck" ).not("a[href*='?']").addClass("missingQuery");
  $( ".linkCheck" ).not("a[href*='https']").addClass("notSecure");

  // Firefox fix
  $(document).ready(function() {         
    $(".iT, .fT, .spT").removeAttr("href");
  });  
    
  // All images
  $(document).ready(function() {
    var flag = 0;
    var tog = ".iT";
    $(tog).click(function() {
      if (flag == 0) {
        $("img").each(function() {
          var $this = $(this);
          $this.attr("src", $this.attr("src").replace(/http/g, "-http"));
        });
        $(tog).addClass("redB");
        $("td").addClass("bgImage");
        $(wrapperClass).addClass("altText");
        flag = 1;
      } else if (flag == 1) {
        $("img").each(function() {
          var $this = $(this);
          $this.attr("src", $this.attr("src").replace(/-http/g, "http"));
        });
        $(tog).removeClass("redB");
        $("td").removeClass("bgImage");
        $(wrapperClass).removeClass("altText");
        flag = 0;
      }
    });
  });
  // Fonts
  $(document).ready(function() {
    var flag = 0;
    var tog = ".fT";
    $(tog).click(function() {
      if (flag == 0) {
        $(tog).addClass("redB");
        $(tog).text("Fonts");
        $("*").addClass("fonts");
        flag = 1;
      } else if (flag == 1) {
        $(tog).removeClass("redB");
        $(tog).text("Fonts");
        $("*").removeClass("fonts");
        flag = 0;
      }
    });
  });
  // Links
  $(document).ready(function() {
    var flag = 0;
    var tog = ".lTlinks";
    $(tog).click(function() {
      if (flag == 0) {
        $(tog).addClass("redB");
        $(wrapperClass).addClass("yes");
        flag = 1;
      } else if (flag == 1) {
        $(tog).removeClass("redB");
        $(wrapperClass).removeClass("yes");
        flag = 0;
      }
    });
  });
  // category
  $(document).ready(function() {
    var flag = 0;
    var tog = ".lTCategory";
    $(tog).click(function() {
      if (flag == 0) {
        $(tog).addClass("redB");
        $(wrapperClass).addClass("category");
        flag = 1;
      } else if (flag == 1) {
        $(tog).removeClass("redB");
        $(wrapperClass).removeClass("category");
        flag = 0;
      }
    });
  });  
  // pageType
  $(document).ready(function() {
    var flag = 0;
    var tog = ".lTPageType";
    $(tog).click(function() {
      if (flag == 0) {
        $(tog).addClass("redB");
        $(wrapperClass).addClass("pageType");
        flag = 1;
      } else if (flag == 1) {
        $(tog).removeClass("redB");
        $(wrapperClass).removeClass("pageType");
        flag = 0;
      }
    });
  });  
  // _label="2NOM2_Category"
  $(document).ready(function() {
    var flag = 0;
    var tog = ".lTlabel";
    $(tog).click(function() {
      if (flag == 0) {
        $(tog).addClass("redB");
        $(wrapperClass).addClass("label");
        flag = 1;
      } else if (flag == 1) {
        $(tog).removeClass("redB");
        $(wrapperClass).removeClass("label");
        flag = 0;
      }
    });
  });    
  // spam
  $(document).ready(function() {
    var flag = 0;
    var tog = ".spT";
    $(tog).click(function() {
      if (flag == 0) {
        $(tog).addClass("redB");
        $(tog).text("Spam");
        $(wrapperClass).addClass("spam");
        flag = 1;
      } else if (flag == 1) {
        $(tog).removeClass("redB");
        $(tog).text("Spam");
        $(wrapperClass).removeClass("spam");
        flag = 0;
      }
    });
  });
  // table
  $(document).ready(function() {
    var flag = 0;
    var tog = ".sTtable";
    $(tog).click(function() {
      if (flag == 0) {
        $(tog).addClass("redB");
        $(wrapperClass).addClass("sTable");
        flag = 1;
      } else if (flag == 1) {
        $(tog).removeClass("redB");
        $(wrapperClass).removeClass("sTable");
        flag = 0;
      }
    });
  });
  // td
  $(document).ready(function() {
    var flag = 0;
    var tog = ".sTtd";
    $(tog).click(function() {
      if (flag == 0) {
        $(tog).addClass("redB");
        $(wrapperClass).addClass("sTD");
        flag = 1;
      } else if (flag == 1) {
        $(tog).removeClass("redB");
        $(wrapperClass).removeClass("sTD");
        flag = 0;
      }
    });
  });
  // th
  $(document).ready(function() {
    var flag = 0;
    var tog = ".sTth";
    $(tog).click(function() {
      if (flag == 0) {
        $(tog).addClass("redB");
        $(wrapperClass).addClass("sTH");
        flag = 1;
      } else if (flag == 1) {
        $(tog).removeClass("redB");
        $(wrapperClass).removeClass("sTH");
        flag = 0;
      }
    });
  });
  // img
    $(document).ready(function() {
    var flag = 0;
    var tog = ".sTimg";
    $(tog).click(function() {
      if (flag == 0) {
        $(tog).addClass("redB");
        $(wrapperClass).addClass("sImg");
        flag = 1;
      } else if (flag == 1) {
        $(tog).removeClass("redB");
        $(wrapperClass).removeClass("sImg");
        flag = 0;
      }
    });
  });
  // span
  $(document).ready(function() {
    var flag = 0;
    var tog = ".sTspan";
    $(tog).click(function() {
      if (flag == 0) {
        $(tog).addClass("redB");
        $(wrapperClass).addClass("sSpan");
        flag = 1;
      } else if (flag == 1) {
        $(tog).removeClass("redB");
        $(wrapperClass).removeClass("sSpan");
        flag = 0;
      }
    });
  });
  // a href
  $(document).ready(function() {
    var flag = 0;
    var tog = ".sTa";
    $(tog).click(function() {
      if (flag == 0) {
        $(tog).addClass("redB");
        $(wrapperClass).addClass("sA");
        flag = 1;
      } else if (flag == 1) {
        $(tog).removeClass("redB");
        $(wrapperClass).removeClass("sA");
        flag = 0;
      }
    });
  });
  
  /* Active DropDowns  - Doesn't work if more than 1 is selected.*/
  // https://www.w3schools.com/jquery/html_toggleclass.asp

  $(document).ready(function() {
    $(".dlinks button").click(function() {
      $(".dropLt").toggleClass("redB"); // active
    });
  });
  $(document).ready(function() {
    $(".dstructure button").click(function() {
      $(".dropSt").toggleClass("redB"); // active
    });
  });  


// https://www.tutorialrepublic.com/faq/hide-dropdown-menu-on-click-outside-of-the-element-in-jquery.php  
$(document).ready(function(){
    // Show hide popover
    $(".dN").click(function(){
        $(this).find(".dropdown-content").slideToggle("fast"); 
    });
});
$(document).on("click", function(event){
    var $trigger = $(".dN");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $(".dropdown-content").slideUp("fast");
    }            
});
  
  console.log("window loaded");
});






$(window).scroll(function() {
  if ($(this).scrollTop() > 70) {
    $(".task_flyout").addClass("sticky");
  } else {
    $(".task_flyout").removeClass("sticky");
  }
});

// Spam Finder
// https://codepen.io/spowart/pen/WYpNrx?editors=1010
jQuery.fn.highlight = function(str, className) {
  var regex = new RegExp(str, "gi");
  //var regex = new RegExp(str+'([e\']?s|[^aiou ]s)|'+str, "gi");
  return this.each(function() {
    $(this)
      .contents()
      .filter(function() {
        return this.nodeType == 3 && regex.test(this.nodeValue);
      })
      .replaceWith(function() {
        return (this.nodeValue || "").replace(regex, function(match) {
          return '<span class="' + className + '">' + match + "</span>";
        });
      });
  });
};

// better? https://markjs.io
// Hexes don't work here it reads rendered HTML character to find like spam words.
// Use spaces to target spam word either side
// 2 classes are set for depending on where the natural space is.
$("*")
  .highlight(" free ", "red") // works: No joiner on either side
  // .highlight(" free", "spamBG2") // works: joiner maybe on Right
  // .highlight("free ", "spamBG3") // works: joiner maybe on Left
  .highlight(" Knowhow", "orange")
  .highlight(" Knowhow ", "orange")
  .highlight("'", "red")
  //.highlight("£", "red"); doesnt work
// .highlight(" & ", "spamBG") // doesnt work reads rendered HTML not unescaped UTF8 entities.

// Spam Word:
// https://www.campaignmonitor.com/blog/email-marketing/2017/12/whats-considered-email-spam-avoid/
//https://www.simplycast.com/blog/100-top-email-spam-trigger-words-and-phrases-to-avoid/#post
