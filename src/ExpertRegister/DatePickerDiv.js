import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css';


function DatePickerDiv(){
    const [value, onChange] = useState(new Date());
    return(
        <>
        <DatePicker onChange={onChange} value={value} />
        </>
    );
}
export default DatePickerDiv;