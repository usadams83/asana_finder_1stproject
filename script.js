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


const currentPose = document.querySelector(".currentimage")
currentPose.src = poses[0].src
const currentText = document.querySelector(".currenttext")
currentText.innerText = poses[0].name