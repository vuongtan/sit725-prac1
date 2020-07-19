class Biosensor{
   constructor(name){
       this.owner=name
       this.heartrate=0
       this.live()
   }
   generaterandomnumber(min,max){
       return parseInt(Math.random()*(max-min)+min)
   }
   beat(){
     let hr=this.generaterandomnumber(10,100)
     this.heartrate=hr
     console.log('[Owner]:'+this.owner+'----heartrate: '+this.heartrate)
   }
   live(){
       setInterval(()=>{this.beat()},1000)
   }
}
let t=new Biosensor("Andrea")
let k=new Biosensor("James")