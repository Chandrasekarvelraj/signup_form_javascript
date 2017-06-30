function nameValidate(){
	var x=document.getElementById("Name").value;
	if(x.match("^[A-Za-z]{3,7}$"))
	{
		document.getElementById("nameErrMessage").style.display="none";
		return true;
	}
	else
	{
		document.getElementById("nameErrMessage").style.display="block";
		document.getElementById("nameErrMessage").style.color="red";
		return false;
	}
}
function emailValidate(){
	var x=document.getElementById("Email").value;
	if(x.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"))
	{
		document.getElementById("emailErrMessage").style.display="none";
		return true;
	}
	else
	{
		document.getElementById("emailErrMessage").style.display="block";
		document.getElementById("emailErrMessage").style.color="red";
		return false;
	}
}
function passwordValidate(){
	var x=document.getElementById("Password").value;
	if(x.match(".{8}"))
	{
		document.getElementById("passwordErrMessage").style.display="none";
		return true;
	}
	else
	{
		document.getElementById("passwordErrMessage").style.display="block";
		document.getElementById("passwordErrMessage").style.color="red";
		return false;
	}
}
function rePasswordValidate(){
	var x=document.getElementById("RePassword").value;
	if(x.match(".{8}"))
	{
		document.getElementById("rePasswordErrMessage").style.display="none";
		return true;
	}
	else
	{
		document.getElementById("rePasswordErrMessage").style.display="block";
		document.getElementById("rePasswordErrMessage").style.color="red";
		return false;
	}	
}
function formValidate(event)
{
	if(nameValidate()&&emailValidate()&&passwordValidate()&&rePasswordValidate())
	{
		alert("Validation successful");
		return true;
	}
	else
		event.preventDefault();
}