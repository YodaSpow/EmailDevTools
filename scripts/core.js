$(document).ready(function(){

	// Images that do no support clear-cache
	var kickdyn = "img[src*='img.kickdyn.com']", 
	placeholdit = "img[src*='imgplaceholder.com']",	
	cache	= kickdyn + "," + placeholdit;
  $('img').not(cache).each(function(){
    /* Remove AC bespoke IMG variable: ?&lt;%= cC %&gt; */
    this.src = this.src.replace(/(\?&lt;%= cC %&gt;|\?%3C%=%20cC%20%%3E)/g, ""); 
    var versionUpdate = (new Date()).getTime();
    this.src = this.src + '?' + versionUpdate;
  });
});

$(window).on("load", function() {
  // var wrapperClass = "body > table";
  var wrapperClass = "body";
  $(wrapperClass).addClass("content");
  
  // Pseudo tooltip for images ALT: DIV only appears based on these conditions
  $("img[alt*='£'], [alt*='&'], [alt*='#']").wrap( "<div class='fauxImg'></div>" );
  
  // Whitelisted domains URLs for the checks: 
  var currysD = "a[href*='www.currys.co.uk']",
      idD     = "a[href*='idmobile.co.uk']",
      pcwbD   = "a[href*='pcworldbusiness.co.uk']",
      tkhD    = "a[href*='teamknowhow.com']",
      ttD     = "a[href*='techtalk.currys.co.uk']",
      domainURL = currysD + "," + idD + "," + pcwbD + "," + tkhD + "," + ttD,
      linkCheck = "link";
  
  $(domainURL).addClass("linkCheck");
  // $( ".linkCheck" ).not(domainURL).removeClass("linkCheck");
  $( ".linkCheck" ).not("a[href*='?']").addClass("missingQuery");
  $( ".linkCheck" ).not("a[href*='https']").addClass("notSecure");

  $(document).ready(function() {  
  // Firefox fix  
  $(".logo, .iT, .fT, .spT, .speT, .foldT").removeAttr("href");
  // 1st load, turn off EmailTools Nav
  $( "nav li" ).not(".tool").addClass("hideNav");
  $( ".logo" ).addClass("redB");
  $( ".fixed" ).addClass("beforeNav");  
  });  
  
  // Default load of EmailTools
  $(document).ready(function() {
    var flag = 0;
    var tog = ".tool .logo";
    $(tog).click(function() {
      if (flag == 0) {
        $("nav li").removeClass("hideNav");
        $(".logo").removeClass("redB");
        $( ".fixed" ).removeClass("beforeNav");
        // Mobile Nav push class for MQ
        $("body").addClass("mobNav");
        flag = 1;
      } else if (flag == 1) {
        window.location.reload(true);
        flag = 0;
      }
    });
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
          
          // Firefox babysit
          setTimeout(function(){
            var imgPath = $this.attr("src");   
            $this.attr("src", "");
            $this.attr("src", imgPath);   
          }, 0);
          
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
        $("body").addClass("fonts");
        flag = 1;
      } else if (flag == 1) {
        $(tog).removeClass("redB");
        $(tog).text("Fonts");
        $("body").removeClass("fonts");
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
  // Spelling
  $(document).ready(function() {
    var flag = 0;
    var tog = ".speT";
    $(tog).click(function() {
      if (flag == 0) {
        $(tog).addClass("redB");
        $(tog).text("Spelling");
        $( "table" ).attr({ contenteditable: "true" });
        flag = 1;
      } else if (flag == 1) {
        $(tog).removeClass("redB");
        $(tog).text("Spelling");
        // Need to fix: $(".logo, .iT, .fT, .spT, .speT, .foldT").removeAttr("href");
        $( "table" ).removeAttr("contenteditable");
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
  // Fold
  $(document).ready(function() {
    var flag = 0;
    var tog = ".foldT";
    $(tog).click(function() {
      if (flag == 0) {
        $(tog).addClass("redB");
        $("body").addClass("fold");
        flag = 1;
      } else if (flag == 1) {
        $(tog).removeClass("redB");
        $("body").removeClass("fold");
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

// Hook point for Toggle nav
//$("body>table").before("<div id='navBar'></div>");

$("body").prepend("<div id='navBar'></div>");

// Insert overlay
$("body").prepend("<div id='overlay'><div class='oTop'></div><div class='oMid'></div><div class='oBot'></div><div class='oTxt hideNav'>Industry standard does not represent Currys list, Analytics done by #emailweekly: <i>www.emaildesignreview.com</i></div></div>");

// Raw Javascript
(function() {
  // All toggles we'd like to add
  var navItems = [
    { href: "https://github.com/YodaSpow/EmailDevTools", text: "EmailTools", class: "logo" },
    { href: "#", text: "Images", class: "iT" },
    { href: "#", text: "Fonts", class: "fT" },
    { href: "#", text: "Links", class: "lT" },
    { href: "#", text: "Spelling", class: "speT" },    
    { href: "#", text: "Spam", class: "spT" },
    { href: "#", text: "Structure", class: "sT"},
    { href: "#", text: "Fold", class: "foldT"}
  ];
  
  // A few variables for use later
  // http://jsfiddle.net/sDbff/3/
  var navElem = document.createElement("nav"),
    navList = document.createElement("ul"),
    navItem,
    navLink,
    dropDiv,
    dropButton,
    linkDrop,
    structureDrop;

  navElem.appendChild(navList);

  // Cycle over each nav item
  for (var i = 0; i < navItems.length; i++) {
    // Create a fresh list item, and anchor
    navItem = document.createElement("li");
    navLink = document.createElement("a");

    // Set properties on anchor
    navLink.href = navItems[i].href;
    navLink.classList = navItems[i].class;
    navLink.innerHTML = navItems[i].text;

    // Add anchor to list item, and list item to list
    navItem.appendChild(navLink);
    navList.appendChild(navItem);
  }

  // Set toggle classes
  navElem.className = "task_flyout fixed"; // nav
  navList.children[0].className = "tool"; // li button
  navList.children[1].className = "imgToggle"; // li button
  navList.children[2].className = "fontToggle";
  navList.children[3].className = "linksToggle dN";
  navList.children[4].className = "SpellToggle dN";  // speT
  navList.children[5].className = "spamToggle";
  navList.children[6].className = "structureToggle dN"; // dN hides navItems CSS
  navList.children[7].className = "foldToggle"; // dN hides navItems CSS 
  
  linkDrop = document.createElement("div");
   linkDrop.innerHTML =
    '<button class="dropbtn dropLt">Links <i class="fa"></i> </button> <div class="dropdown-content dlinks"> <button class="lTlinks">Links</button> <button class="lTPageType">PageType</button> <button class="lTCategory">Category</button> <button class="lTlabel">Label</button></div>';
  linkDrop.className = "dropdown";
  navList.children[3].appendChild(linkDrop); 
  
  structureDrop = document.createElement("div");
  structureDrop.innerHTML =
    '<button class="dropbtn dropSt">Structure <i class="fa"></i> </button> <div class="dropdown-content dstructure"> <button class="sTtable">&lt;table&gt;</button> <button class="sTtd">&lt;td&gt;</button> <button class="sTth">&lt;th&gt;</button> <button class="sTimg">&lt;img&gt;</button> <button class="sTspan">&lt;span&gt;</button> <button class="sTa">&lt;a&gt;</button> </div>';
  structureDrop.className = "dropdown";
  navList.children[6].appendChild(structureDrop);

  // Add list to div before HTML email.
  window.onload = function() {
    document.getElementById("navBar").appendChild(navElem);    
  };
})();



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
  //.highlight("£", "red"); doesnt work
// .highlight(" & ", "spamBG") // doesnt work reads rendered HTML not unescaped UTF8 entities.

// Spam Word:
// https://www.campaignmonitor.com/blog/email-marketing/2017/12/whats-considered-email-spam-avoid/
//https://www.simplycast.com/blog/100-top-email-spam-trigger-words-and-phrases-to-avoid/#post
