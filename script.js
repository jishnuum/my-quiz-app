const form = document.getElementById('formvalidation')

form.addEventListener('submit',(event)=>{

    event.preventDefault()

    const username = form.username.value
    const age = form.age.value
    const place = form.place.value

    let isvalid = true

    if(username.length <3){

        const namerror = document.getElementById('nameerror')
        namerror.innerText = 'minimum 3 characters'
        isvalid = false
    }

    if(age<0 || isNaN(age)){
        const ageerror = document.getElementById('ageerror')
        ageerror.innerText = 'Invalid age.Please enter a valid age.'
        isvalid = false
    }
    if(age>99){
        const ageerror = document.getElementById('ageerror')
        ageerror.innerText = 'Invalid age. Please enter a valid age.'
        isvalid = false
    }

    if(!isNaN(place) || place == ""){
        const placeerror = document.getElementById('placeerror')
        placeerror.innerText = 'Invalid input. Place cannot be a number'
        isvalid = false
    }

    if(isvalid){
        form.submit()
        form.reset()
    }
    

})