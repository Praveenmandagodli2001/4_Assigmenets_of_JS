function countDown(){
    setInterval(function(){
        let destiation=new Date("july 14,2024,10:00:00").getTime()
        let current=new Date().getTime()
        let diffrence=destiation-current
        

        let day=Math.floor(diffrence/(1000*60*60*24))
        // console.log(day);
        let hours=Math.floor(diffrence%(1000*60*60*24)/(1000*60*60));
        let minutes=Math.floor(diffrence%(1000*60*60)/(1000*60))
        let seconds=Math.floor(diffrence%(1000*60)/(1000))

document.getElementById("day").innerHTML=day+`</br>day`
document.getElementById("hrs").innerHTML=hours+`</br>hrs`
document.getElementById("min").innerHTML=minutes+`</br>min`
document.getElementById("sec").innerHTML=seconds+`</br>sec`

    },1000)
}
countDown()