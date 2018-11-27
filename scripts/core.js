$(window).on("load", function() {
  var wrapperClass = "body > table";
  $(wrapperClass).addClass("content");
  
  // All images
  $(document).ready(function() {
    var flag = 0;
    var tog = ".iT";
    $(tog).click(function() {
      if (flag == 0) {
        $("img").each(function() {
          var $this = $(this);
          //$this.attr("src", $this.attr("src").replace(/\/css\//g, "/cssN/"));
          $this.attr("src", $this.attr("src").replace(/http/g, "-http"));
        });
        //$(tog).text("IMG");
        $(tog).addClass("redB");
        $("td").addClass("bgImage");
        flag = 1;
      } else if (flag == 1) {
        $("img").each(function() {
          var $this = $(this);
          //$this.attr("src", $this.attr("src").replace(/\/cssN\//g, "/css/"));
          $this.attr("src", $this.attr("src").replace(/-http/g, "http"));
        });
        //$(tog).text("IMG");
        $(tog).removeClass("redB");
        $("td").removeClass("bgImage");
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
    var tog = ".lT";
    $(tog).click(function() {
      if (flag == 0) {
        $(tog).addClass("redB");
        $(tog).text("Links");
        $(document.body).addClass("yes");
        flag = 1;
      } else if (flag == 1) {
        $(tog).removeClass("redB");
        $(tog).text("Links");
        $(document.body).removeClass("yes");
        flag = 0;
      }
    });
  });
  // spamToggle
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
  // Structures  
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
  
  /* Active DropDowns */
  // https://www.w3schools.com/jquery/html_toggleclass.asp
  $(document).ready(function() {
    $(".dropdown-content button").click(function() {
      $(".dropbtn").toggleClass("redB"); // active
    });
  });
  
  console.log("window loaded");
});

// Hook point for Toggle nav
$("body>table").before("<div id='navBar'></div>");

// Raw Javascript
(function() {
  // All toggles we'd like to add
  var navItems = [
    { href: "#", text: "Images", class: "iT" },
    { href: "#", text: "Fonts", class: "fT" },
    { href: "#", text: "Links", class: "lT" },
    { href: "#", text: "Spam", class: "spT" },
    { href: "#", text: "Structure", class: "sT" }
  ];

  // A few variables for use later
  // http://jsfiddle.net/sDbff/3/
  var navElem = document.createElement("nav"),
    navList = document.createElement("ul"),
    navItem,
    navLink,
    dropDiv,
    dropButton,
    structureDrop;

  navElem.appendChild(navList);

  // Cycle over each nav item
  for (var i = 0; i < navItems.length; i++) {
    // Create a fresh list item, and anchor
    navItem = document.createElement("li");
    navLink = document.createElement("button");

    // Set properties on anchor
    //navLink.href = navItems[i].href;
    navLink.classList = navItems[i].class;
    navLink.innerHTML = navItems[i].text;

    // Add anchor to list item, and list item to list
    navItem.appendChild(navLink);
    navList.appendChild(navItem);
  }

  // Set toggle classes
  navElem.className = "task_flyout fixed"; // nav
  navList.children[0].className = "imgToggle"; // li button
  navList.children[1].className = "fontToggle";
  navList.children[2].className = "linksToggle";
  navList.children[3].className = "spamToggle";
  navList.children[4].className = "structureToggle dN"; // dN hides navItems CSS

  // Drop-Down:
  // Structure: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_dropdown_navbar
  //dropDiv = document.createElement("div");
  //dropDiv.appendChild(dropButton);
  //dropButton = document.createElement("button");
  //dropButton.className = "dropbtn";
  structureDrop = document.createElement("div");
  structureDrop.innerHTML =
    '<button class="dropbtn">Structure <i class="fa fa-caret-down"></i> </button> <div class="dropdown-content"> <button class="sTtable">&lt;table&gt;</button> <button class="sTtd">&lt;td&gt;</button> <button class="sTth">&lt;th&gt;</button> <button class="sTspan">&lt;span&gt;</button> <button class="sTa">&lt;a&gt;</button> </div>';
  structureDrop.className = "dropdown";
  navList.children[4].appendChild(structureDrop);

  // Add list to div before HTML email.
  window.onload = function() {
    document.getElementById("navBar").appendChild(navElem);
  };
})();


$(window).scroll(function() {
  if ($(this).scrollTop() > 80) {
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
  .highlight(" Knowhow ", "orange");
// .highlight(" & ", "spamBG") // doesnt work reads rendered HTML not unescaped UTF8 entities.

// Spam Word:
// https://www.campaignmonitor.com/blog/email-marketing/2017/12/whats-considered-email-spam-avoid/
//https://www.simplycast.com/blog/100-top-email-spam-trigger-words-and-phrases-to-avoid/#post
