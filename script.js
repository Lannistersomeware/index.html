var sliderRed = document.getElementById("sliderRed");
var sliderBlue = document.getElementById("sliderBlue");
// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyASGxlv0FFBWZ0FN6z1ASqxARjPlf2B4AA",
	authDomain: "project-651d4.firebaseapp.com",
	databaseURL: "https://project-651d4-default-rtdb.firebaseio.com",
	projectId: "project-651d4",
	storageBucket: "project-651d4.appspot.com",
	messagingSenderId: "124160193506",
	appId: "1:124160193506:web:d29ddf8fd46505955b3fbb",
	measurementId: "G-9GK31K6EYS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var SelectMode = document.getElementById("SelectMode");
  var SelectValueRed = document.getElementById("SelectValueRed"); /* create variable*/
  var SelectValueBlue = document.getElementById("SelectValueBlue"); /* create variable*/
  SelectValueRed.innerHTML = Number( sliderRed.value); /* get value from slider id in HTML but the value unable to change*/
  SelectValueGreen.innerHTML = sliderGreen.value; /* get value from slider id in HTML but the value unable to change*/
  SelectValueBlue.innerHTML = sliderBlue.value; /* get value from slider id in HTML but the value unable to change*/
  //--------------get value from firebase to show it when first run (sync between html and firebase)
  var database = firebase.database();
  database.ref().on("value", function(snap){      
      sliderBlue.value = snap.val().Ref_temp;           //get value Ref_temp from firebase and store to  sliderBlue.value
      SelectValueBlue.innerHTML = snap.val().Ref_temp;  //get value Ref_temp from firebase and store to  SelectValueBlue.innerHTML	
      
      Mode.value = snap.val().Mode;   
      SelectMode.innerHTML = snap.val().Mode; 

      sliderRed.value = snap.val().Set_temp;           
      SelectValueRed.innerHTML = snap.val().Set_temp;  
      
      sliderGreen.value = snap.val().Test_temp;           
      SelectValueGreen.innerHTML = snap.val().Test_temp;
      
     
  });
  sliderRed.oninput = function(){
      SelectValueRed.innerHTML = this.value; /* able to change the value*/
      var firebaseRef = firebase.database().ref().child("Set_temp");
      firebaseRef.set(Number(sliderRed.value));           
  }

      Mode.onclick = function(){
        SelectMode.innerHTML = this.value; /* able to change the value*/
        var firebaseRef = firebase.database().ref().child("Mode");
        firebaseRef.set(Number(Mode.value));        
  
  }
  sliderBlue.oninput = function(){
      SelectValueBlue.innerHTML = this.value; /* able to change the value*/
      var firebaseRef = firebase.database().child("Ref_temp");
      //firebaseRef.set(Number(sliderBlue.value));           
      firebaseRef.set(sliderBlue.value);           
  }
  sliderGreen.oninput = function(){
    SelectValueGreen.innerHTML = this.value; /* able to change the value*/
    var firebaseRef = firebase.database().ref().child("Test_temp");
    firebaseRef.set(sliderGreen.value);    



  }
  $(document).ready(function(){
	var database = firebase.database();
	var Heater;
	var Fan;
	var Turner;
	database.ref().on("value", function(snap){
		Heater = snap.val().Heater;
		Fan = snap.val().Fan;
		Turner = snap.val().Turner;
		if(Heater == "1"){
			document.getElementById("unact").style.display = "none";
			document.getElementById("act").style.display = "block";
		} else {
			document.getElementById("unact").style.display = "block";
			document.getElementById("act").style.display = "none";
		}
		if(Fan == "1"){
			document.getElementById("unact1").style.display = "none";
			document.getElementById("act1").style.display = "block";
		} else {
			document.getElementById("unact1").style.display = "block";
			document.getElementById("act1").style.display = "none";
		}
		if(Turner == "1"){
			document.getElementById("unact2").style.display = "none";
			document.getElementById("act2").style.display = "block";
		} else {
			document.getElementById("unact2").style.display = "block";
			document.getElementById("act2").style.display = "none";
		}
	});

	$(".toggle-btn").click(function(){
		var firebaseRef = firebase.database().ref().child("Heater");
		if(Heater == "1"){
			firebaseRef.set(Number("0"));
			Heater = "0";
		} else {
			firebaseRef.set(Number("1"));
			Heater = "1";
		}
	})
	$(".toggle-btn1").click(function(){
		var firebaseRef = firebase.database().ref().child("Fan");
		if(Fan == "1"){
			firebaseRef.set("0");
			Fan = "0";
		} else {
			firebaseRef.set("1");
			Fan = "1";
		}
	})
	$(".toggle-btn2").click(function(){
		var firebaseRef = firebase.database().ref().child("Turner");
		if(Turner == "1"){
			firebaseRef.set("0");
			Turner = "0";
		} else {
			firebaseRef.set("1");
			Turner = "1";
		}
	})
});

