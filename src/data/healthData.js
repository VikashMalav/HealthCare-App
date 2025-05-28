const Appointments = [
    {
        title: "Dentist",
        start: "09:00",
        end: "11:00",
        doctor: "Dr. Cameron Williamson",
       icon:"tooth.png"
    }
    , {
        title: "Physiotherapy Appointment",
        start: "11:00",
        end: "12:00",
        doctor: "Dr. Kevin Djones",
        icon:"hand.png"
       
    }

];


const calendarContent = [
    {
        day: "Mon",
        date: 25,
        timeSlots: ["10:00", "11:00", "12:00"]
    },
    {
        day: "Tues",
        date: 26,
        timeSlots: ["08:00", "09:00", "10:00"]
    },
    {
        day: "Wed",
        date: 27,
        timeSlots: ["12:00", "-", "13:00"]
    }, {
        day: "Thurs",
        date: 28,
        timeSlots: ["10:00", "11:00", "-"]
    }, {
        day: "Fri",
        date: 29,
        timeSlots: ["-", "14:00", "16:00"]
    }, {
        day: "Sat",
        date: 30,
        timeSlots: ["12:00", "14:00", "15:00"]
    }, {
        day: "Sun",
        date: 31,
        timeSlots: ["09:00", "10:00", "11:00"]
    }
];
export { calendarContent, Appointments } 