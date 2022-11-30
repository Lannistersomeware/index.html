$(document).ready(function(){
   $('body').addClass('loaded')
});
$(document).ready(function(){
   var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')
});

$(document).ready(function(){
   var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
   var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
 return new bootstrap.Tooltip(tooltipTriggerEl)
});
chengeLang();
});


function setLang(lang){
   window.localStorage.setItem('lang',lang);
   window.location.reload();
}

function getLang(){
   if (window.localStorage.getItem("lang")) {
   return window.localStorage.getItem("lang");
   }
  else { 
   setlang('vi-VN');
 }
}

function chengeLang(){
   var lang = getLang();
$(".multilang").each((i, obj) => {
   $("#"+obj.id).html(labels[obj.id][lang]).attr("title", labels[obj.id][lang]);
});
}
 
function showCourseList()
{ var lang=getLang(); 
 $.each(courseList,function(i, obj) {
 btn="<td><div class='d-grid gap-2'><button class='btn btn-success btn-lg' onclick='regCourse(\""+i+"\")'><i class='far fa-check-square'></i></button></div></td>"; 
$("#course_list").append("<tr><td>"+obj.code+"</td><td>"+obj.name[lang]+"</td></td><td class='text-end'>"+(new
Date(obj.startDate)).toLocaleDateString(lang)+"</td><td class='text-end'>"+(new Date(obj.endDate)).toLocaleDateString(lang)+"</td><td class='text-end'>"+(new Intl.NumberFormat(lang, { style: 'decimal'}).format(obj.fee[lang]))+"</td>"+btn+"</tr>");
 });
//TRẦN NHỰT MINH
}

$(document).ready(function(){
  $('body').addClass('loaded');
  showCourseList();
 
  
})
