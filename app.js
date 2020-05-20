function calculate()
{
    // var theForm = document.forms["calculator"];
    // alert(theForm);
    var top = document.getElementById("top").value;
    var how = document.getElementById("how").value;
    var yos = document.getElementById("yos").value;
    var answer = Math.round((top*how*yos + Number.EPSILON) * 100) / 100
    document.getElementById("ah").value = answer;
}

function salaried()
{
    document.getElementById("how").value = 80;
    document.getElementById("sal").className = 'btn';
    document.getElementById("hour").className = 'btn';
    document.getElementById("sal").classList.add('btn-success');
}

function hourly()
{
    document.getElementById("how").value = 0;
    document.getElementById("sal").className = 'btn';
    document.getElementById("hour").className = 'btn';
    document.getElementById("hour").classList.add('btn-success');
}