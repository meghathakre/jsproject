var ctx=document.getElementById('doun').getContext('2d');
var mychart= new Chart(ctx, {

type:'doughnut',
data:{
labels:['jan','fab','mar','apr','jun','july','aug','sep','oct','nov','dec'],
datasets:[{
  label:'Operations',
  data :[200,29,210,230,221,91,95,67,140,110,100,120],
  backgroundColor:[
 
 
      'rgba(345, 243, 332, 566,107)',

      'rgba(29, 23, 33, 81)',
      'rgba(69, 43, 32, 01)',
      'rgba(21, 43, 12, 21)',
      'rgba(99, 24, 72, 1)',
      'rgba(90, 23, 03, 1)',
      'rgba(99, 43, 32, 1)'
    
      
    ],
    borderColor: [
      'rgb(41, 99, 249)',
      
      
    ],
    borderWidth: 1
  }]
}
})


