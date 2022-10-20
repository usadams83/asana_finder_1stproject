console.log(`working`)
poses = [{
    name: `easypose`,
    src: `https://media.istockphoto.com/vectors/african-black-skin-boy-sitting-on-floor-and-meditating-child-or-teen-vector-id1355494822?k=20&m=1355494822&s=612x612&w=0&h=Vdsxcr5lYF1VEn4POfUukkc5m9d4fXkA1EyEpn9YFMw=`,
    instructions: `Seated upright with legs crossed infront of you`

}, {
    name: `warrior 2`,
    src: `https://media.istockphoto.com/vectors/woman-doing-warrior-ii-pose-virabhadrasana-ii-exercise-flat-vector-vector-id1408272222?k=20&m=1408272222&s=612x612&w=0&h=TlvKAL6aeEa9lcR_RfySMw6ofqkdU6WOlN5Brt5uQrE=`,
    instructions: `legs spread with arms wide`
}, {
    name: `headstand`,
    src: `https://media.istockphoto.com/vectors/girl-practicing-yoga-vector-id1149727425?k=20&m=1149727425&s=612x612&w=0&h=-k_fHZ6bGTHJRig456WulswKG-2kN-zu1JsFBJcfUMc=`,
    instruction: `stand on your head`
}
]
async function getPoses (){
const poses = await fetch(`https://lightning-yoga-api.herokuapp.com/yoga_poses
`, {
  method: 'GET',
})
  .then((response) => response.json())
  .then((result) => {
    console.log(result.items)

    let poses = result.items

    const currentPose = document.querySelector(".currentimage")
currentPose.src = poses[0].img_url
const currentText = document.querySelector(".currenttext")
currentText.innerText = poses[0].english_name
const sanskritName = document.querySelector("#sanskritName")
sanskritname.innerText = poses[0].sanskrit_name

})
  .catch((error) => {
    console.error('Error:', error);
  });
  return poses
}
poses = getPoses()
console.log(getPoses())
let poseIndex = 0


function changePose(){
    currentPose.src = poses[poseIndex]
    }
