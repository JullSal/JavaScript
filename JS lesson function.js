// let hour = "sunday";

// if (hour < 18 && hour >= 8) {
//     console.log("Open")
// } else if (hour >= 24 || hour < 0) {
//     console.log("Error!") 
// } else if (hour == "sunday" || hour == 'saturday') {
//     console.log("Weekend!") 
// } else {
//     console.log("Close")
//     }

// function workDays(day, hour) {

//     if (typeof day == "string" && typeof hour == 'number') {
//         console.log("workDay = ", day)
//         console.log('workHour = ', hour)
//     } else {
//         console.log('false')
//     }

//     // // console.log('workDay = ', day)
//     // console.log('workHour = ', hour)
// }
// workDays('gt',4)

function workDays(days) {
let wwdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] ;
let h_days = ['Saturday', 'Sunday']
    if (typeof days === 'string') {
        if (wwdays.includes(days)) {
            return true
        } else if  (h_days.includes(days)) {
                   return false
                } else {
                    return false
                }
            } else {
                console.log('Error')
                return false
            }
}

  
    function chek_hours(hour) {
        if (hour < 18 && hour >= 8) {
               return true
            } else if (hour >= 24 || hour < 0) {
               return false
                } else {
                    return false
                }
    }


    let days = 'Thursday';
    let hour = 13;

    if (workDays(days) && chek_hours(hour)) {
        console.log('Open!')
    } else {
        console.log('Close')
    }

console.log('=========================')


let test_today = 4;

switch (test_today) {
    case 'Saturday':
        console.log('Cool! Saturday')
        break;
    case 'Monday':
        console.log('Cool! Monday')
        break;
    case 'Sunday':
        console.log('Cool! Sunday')
        break;
    default:
        console.log('Default!')
}