<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){

$('.dw3 td:first-of-type').each(function() {
    if(
    $(this).text().match('PreHeader')
    ) {
        $(this).addClass('preHDR'); 
    }      
});
  
});
</script>
