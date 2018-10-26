<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
// Would like to select this without relying on HTML structure
$(document).ready(function(){
 	$('.dw3 td:contains("PreHeader")').addClass('preHeader');
});

// Images OFF: Exposed the Alt-text styling without changing the HTML img scr paths.
$( document ).ready(function() {
  $('img').attr({
    'src' : '-',
  }); 
});
</script>
