//generate side
const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', function(){
    const random = Math.random() * 9999;
    const randomNum = Math.round(random);

    document.getElementById('generate-display').value = randomNum;
})
// verify side
function buttonD(e){
    document.getElementById('varify-display').value = document.getElementById('varify-display').value + e;
}

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', function(){
    if (document.getElementById('generate-display').value ==  document.getElementById('varify-display').value) {
        document.getElementById("matchd").style.display = "block";
        document.getElementById("try-again").style.display = "none";
    } 
    else{
        document.getElementById("try-again").style.display = "block";
        document.getElementById("matchd").style.display = "none";

        document.getElementById('try').innerText = parseFloat(document.getElementById('try').innerText) + 1;
    }
    document.getElementById('varify-display').value = null;
})

submitBtn.addEventListener('click', function(){
    if (document.getElementById('try').innerText > 3) {
        document.getElementById('submit').style.display = 'none';
        document.getElementById('eror').style.display = 'block';
    }
})