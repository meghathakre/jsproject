var ctx=document.getElementById('linechart').getContext('2d');
var mychart= new Chart(ctx, {

type:'line',
data:{
labels:['jan','fab','mar','apr','jun','july','aug','sep','oct','nov','dec'],
datasets:[{
  label:'Earnings in $',
  data :[2050,2909,4100,2300,5200,3100,2500,6500,4000,3000,1000,1400],
  backgroundColor:[
      'rgba(9, 23, 32, 51)',
      
    ],
    borderColor: [
      'rgb(41, 99, 99)',
      
    ],
    borderWidth: 1
  }]
}



});




function fun(){
  let a=document.body
  a.classList.toggle('dark')

}



