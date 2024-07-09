async function demo(){
    let bd=document.getElementById("showdata")
    let a=await fetch("http://localhost:3000/product")
    let b=await a.json()
let data = b.map((e)=>`
<tr>
<td>${e.id}</td>
<td>${e.patient_name}</td>
<td>${e.Number}</td>
<td>${e.payment}</td>
<td><button onclick="mydelete(${e.id})">Delete </button></td>
<td><button onclick="myedit(${e.id})">Edit</button></td>

</tr>


`).join("")
   bd.innerHTML=data
    
}
demo()



function mydelete(a){
    fetch(`http://localhost:3000/product/${a}`,{
    
    method :"DELETE"
    })
    .then(res=>alert("data deleted successfully"))
    
    }
    
    
    let strid=0
    function myedit(id){
        strid=id
        document.getElementById("myfrm").style.display="block"
    }
    
    function editdata() {
        let myfrmdata  ={
      
    id: document.getElementById('id').value,
    patient_name: document.getElementById('patient_name').value,
    Number :document.getElementById('Number').value,
    payment :document.getElementById('payment').value
    
        }
        fetch(`http://localhost:3000/product/${strid}`,{
    method :"PUT",
    headers:{
        'Content-type':'application/json',
    },
    body:JSON.stringify(myfrmdata)
    })
    .then(res=>alert("edited!!!"))
    }
    
    
    
    
    

function add(){
    let frmdata={
    id:document.getElementById("id").value,
    patient_name:document.getElementById("patient_name").value,
    Number:document.getElementById("Number").value,
    payment :document.getElementById('payment').value
    }
    fetch("http://localhost:3000/product",{
method:"POST",
headers: {
    'Content-type':'application/json',
},
body: JSON.stringify(frmdata)
    })
     
}




    




    

