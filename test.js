// const calcTime = (distance, speed) => {
 
//     // how many hours will it take to get to mars if you go 2000 miles an hour?
    
//     const hours = distance/speed;
//     console.log(hours)
//     const days = hours/24;
//     console.log(days)

//     const years = days/365;
//     console.log(years)

//     const minutes = hours * 60;
//     console.log(minutes)

//     const seconds = minutes * 60;
//     console.log(seconds)


// }
function travelTime(distance, speed) {
 
    
        // how many hours will it take to get to mars if you go 2000 miles an hour?
   
        this.hours = distance/speed;
        console.log(this.hours, 'hours')

        this.days = this.hours/24;
        console.log(this.days, 'days')
    
        this.years = this.days/365;
        console.log(this.years, 'years')
    
        this.minutes = this.hours * 60;
        console.log(this.minutes, 'minutes')
    
        this.seconds = this.minutes * 60;
        console.log(this.seconds, 'seconds')
        


}

let lamboTime = new travelTime(48000000, 2000)
