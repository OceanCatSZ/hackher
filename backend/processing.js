// Step 1: Fetch Classroom from frontend

// Step 2: Fetch from database using this classroom

// Step 3: Push the time array we got from step 2 to frontend

// Step 4: Fetch selected time interval from frontend

// Step 5: Modify the database based on time interval in step 4

// mapping function

const timestrings = [
    "7:00","7:15","7:30","7:45",
    "8:00","8:15","8:30","8:45",
    "9:00","9:15","9:30","9:45",
    "10:00","10:15","10:30","10:45",
    "11:00","11:15","11:30","11:45",
    "12:00","12:15","12:30","12:45",
    "13:00","13:15","13:30","13:45",
    "14:00","14:15","14:30","14:45",
    "15:00","15:15","15:30","15:45",
    "16:00","16:15","16:30","16:45",
    "17:00","17:15","17:30","17:45",
    "18:00","18:15","18:30","18:45",
    "19:00","19:15","19:30","19:45",
    "20:00","20:15","20:30","20:45",
    "21:00","21:15","21:30","21:45",
    "22:00","22:15","22:30","22:45",
    "23:00","23:15","23:30","23:45"
    ];

const roomstrings = [
    "149G","149H","149J","149L","149N",
    "156","158","159","160","162","163",
    "165","166","168","173","178","181",
    "183","185","187","189","193","197"
]



function timetoStrings(time_arr) {
    tlength = timestrings.length;
    retarr = time_arr.map((elem, index) => timestrings[index])
}

console.log(timeMapping([0, 3, 6, 12, 24, 69]))