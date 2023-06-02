const endDate = '20 June 2023 10:00 PM';
document.getElementById('end-date').innerText=endDate;
const inputs = document.querySelectorAll('input')

const clock =()=>{
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end-now)/1000// in seconds
    if(diff<0)
    {
        return;
    }
    // convert it into days
    inputs[0].value = Math.floor(diff/3600/24);
    //convert it into hours
    inputs[1].value = Math.floor(((diff/3600)%24));
    //convert into minutes
    inputs[2].value = Math.floor((diff/60)%60);
    //convert into seconds
    inputs[3].value = Math.floor((diff%60));

}
clock()

setInterval(
    ()=>{
        clock()
    },
    1000
)