"User Strict"
const service_id="service_m2x4ib1"
const temp_id="template_7wede3k"
const form=document.querySelector('#form');
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    const formdata=new FormData(form)
    const data=Object.fromEntries(formdata)
    console.log(data)
    console.log("clicked")
    emailjs.send(service_id,temp_id,data)
    .then(
        res=>{
            alert("Your Account has been registered \n Please wait until the school reaches out you")
            console.log(res)
            window.location.reload()
        }
    )
    .catch(err=>{
        alert("Error. Something went wrong!")
        console.log(err)
        window.location.reload()
    })
    
})
const logo=document.querySelector(".logo")
const home=document.querySelector(".home")
logo.addEventListener('click', function(){window.scrollTo(0,0)})
home.addEventListener('click', function(){window.scrollTo(0,0)})
const r1=document.querySelector(".admissions")
const r2=document.querySelector("#r-btn")
r1.addEventListener('click', function(){window.scrollTo(0,1700)})
r2.addEventListener('click', function(){window.scrollTo(0,1700)})
