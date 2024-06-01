const key = "14:10"
const mainKey = document.querySelector("#key")
const mainMap = document.querySelector("#map")
const  btn = document.querySelector(".btn")
const senha = document.querySelector("#senha_i")
senha.addEventListener("input", (evt)=>{
    if(senha.value==key){
        btn.removeAttribute("disabled")
        this.valid = true
    }
    if(senha.value!=key){
        btn.setAttribute("disabled", "disabled")
        this.valid = false
    }
})

btn.addEventListener("click",(evt)=>{
    if(this.valid){
        mainKey.classList.add("sumiu")
        mainMap.classList.remove("sumiu")
    }
})