// Removes all inline styles, place at end of body tag
$('*').each(function()
{
$(this).removeAttr('style');
});  
