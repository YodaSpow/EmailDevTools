// Adobe Campaign EJS Commenting out and Populating

/* SCRAPPED
var pricePromise = /&lt;%@\sinclude\sview='dixCoreFooterCurrysPricePromise'\s%&gt;/g;
var GDPR = /&lt;%@\sinclude\sview='dixCoreFooterCurrys'\s%&gt;/g;
var commentEJS = /^(?:(?!dixDIXtrackingCPCW1|dixDIXtrackingCPCW2)+((&lt;|<)%.*%(&gt;|>)))+$/gm;

var ppStr = '<div title="EmailTools: Inject PricePromise"><!-- $&-->If you find a major UK retailer has the same product at a cheaper price, we\'ll match it &#45; even up to 7 days after the purchase. Does not apply to ink products or third party sellers. Visit our price promise page at <a href="https://www.currys.co.uk/gbuk/price-promise-1023-theme.html?<%@ include view=\'dixDIXtrackingCPCW1\' %>~SER~OTH~t&c~<%@ include view=\'dixDIXtrackingCPCW2\' %>" _label="t&c_HOM" style="font-family: Arial, Helvetica, sans-serif; font-size:11px; line-height: 13px; color:#333332; text-decoration:underline; -webkit-text-size-adjust: 90%;">currys.co.uk</a> for details, conditions and the full list of major retailers (source: Retail Week Top 50 retailers by sales).<br /><br /></div>';
var coreStr = '<div title="EmailTools: Inject GDPR"><!-- $&-->To find out more, please see our <a href="https://www.currys.co.uk/gbuk/privacy-on-currys-321-commercial.html?<%@ include view=\'dixDIXtrackingCPCW1\' %>~COM~OTH~TsCs~<%@ include view=\'dixDIXtrackingCPCW2\' %>" _label="TsCs" style="text-decoration:underline; color:#333333;">Privacy&nbsp;Policy</a>.<br /><br /> DSG Retail Limited reserves the right to end this offer without prior notice. All offers and products subject to availability.<br /><br /> Offer correct at time of publication, &lt;%= formatDate(new Date(), "%2D/%2M/%4Y") %&gt;.<br /><br /> Please do not reply to this email. If you need to contact us you can do so at: <a class="ios" style="text-decoration:underline; color:#333333; font-size:11px;" href="mailto:customer.services@currys.co.uk">customer.services@currys.co.uk</a><br /><br /></div>'
document.body.innerHTML = document.body.innerHTML.replace(pricePromise, ppStr);
document.body.innerHTML = document.body.innerHTML.replace(GDPR, coreStr);
document.body.innerHTML = document.body.innerHTML.replace(commentEJS, "<!-- $&-->");

*/
