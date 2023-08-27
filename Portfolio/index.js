// preloader script
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
})

// Update copyright year with current year
document.getElementById("currentYear").textContent = new Date().getFullYear();


// Project section secript
// Loop through each video thumbnail and set up the click event
document.querySelectorAll('.video-container .video video').forEach(vid => {
vid.onclick = () => {
    document.querySelector('.popup-video').style.display = 'block';
    document.querySelector('.popup-video video').src = vid.getAttribute('src');
}
});

// Add click event to the close button in the pop-up video
document.querySelector('.popup-video span').onclick = () => {
document.querySelector('.popup-video').style.display = 'none';
};

// Contact form script
function validateEmail562960000000296005()
{
  var form = document.forms['WebToLeads562960000000296005'];
  var emailFld = form.querySelectorAll('[ftype=email]');
  var i;
  for (i = 0; i < emailFld.length; i++)
  {
      var emailVal = emailFld[i].value;
      if((emailVal.replace(/^\s+|\s+$/g, '')).length!=0 )
      {
          var atpos=emailVal.indexOf('@');
          var dotpos=emailVal.lastIndexOf('.');
          if (atpos<1 || dotpos<atpos+2 || dotpos+2>=emailVal.length)
          {
              alert('Please enter a valid email address. ');
              emailFld[i].focus();
              return false;
          }
      }
  }
  return true;
}

 function checkMandatory562960000000296005() {
  var mndFileds = new Array('Last Name');
  var fldLangVal = new Array('Name');
  for(i=0;i<mndFileds.length;i++) {
    var fieldObj=document.forms['WebToLeads562960000000296005'][mndFileds[i]];
    if(fieldObj) {
      if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length==0) {
       if(fieldObj.type =='file')
          { 
           alert('Please select a file to upload.'); 
           fieldObj.focus(); 
           return false;
          } 
      alert(fldLangVal[i] +' cannot be empty.'); 
                fieldObj.focus();
                return false;
      }  else if(fieldObj.nodeName=='SELECT') {
               if(fieldObj.options[fieldObj.selectedIndex].value=='-None-') {
          alert(fldLangVal[i] +' cannot be none.'); 
          fieldObj.focus();
          return false;
         }
      } else if(fieldObj.type =='checkbox'){
          if(fieldObj.checked == false){
          alert('Please accept  '+fldLangVal[i]);
          fieldObj.focus();
          return false;
         } 
       } 
       try {
           if(fieldObj.name == 'Last Name') {
          name = fieldObj.value;
             }
      } catch (e) {}
      }
  }
  if(!validateEmail562960000000296005()){return false;}
  document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
}

function tooltipShow562960000000296005(el){
var tooltip = el.nextElementSibling;
var tooltipDisplay = tooltip.style.display;
if(tooltipDisplay == 'none'){
  var allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
  for(i=0; i<allTooltip.length; i++){
      allTooltip[i].style.display='none';
  }
  tooltip.style.display = 'block';
}else{
  tooltip.style.display='none';
}
}