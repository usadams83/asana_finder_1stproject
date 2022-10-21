console.log(`working`)
let posesArray = []

function assignEventListener (){
    const currentPose = document.querySelector(".currentimage")

const currentText = document.querySelector(".currenttext")

const sanskritName = document.querySelector("#sanskritname")
console.log(sanskritName)
    posesArray.forEach((pose, i) => {
    document.querySelector(`.img${i}`).addEventListener('click', function(){
        currentPose.src = pose.img_url
        currentText.innerText = pose.english_name
        sanskritName.innerText = pose.sanskrit_name
        currentPose.scrollIntoView({behavior: "smooth"})    }
    )})
}
async function getPoses (){
const poses = await fetch(`https://lightning-yoga-api.herokuapp.com/yoga_poses
`, {
  method: 'GET',
})
  .then((response) => response.json())
  .then((result) => {
    let poses = result.items

    const currentPose = document.querySelector(".currentimage")
currentPose.src = poses[0].img_url
const currentText = document.querySelector(".currenttext")
currentText.innerText = poses[0].english_name
const sanskritName = document.querySelector("#sanskritName")
sanskritname.innerText = poses[0].sanskrit_name

poses.map((pose,i)=>{
    posesArray.push(pose)
    const image = pose.img_url
    const newElement = `<li><img class="img${i} pose " src="${image}")></li>`
    document.querySelector(".allposes").innerHTML+=newElement
})
assignEventListener()


})
  .catch((error) => {
    console.error('Error:', error);
  });
}
getPoses()
