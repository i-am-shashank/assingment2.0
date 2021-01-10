import React, { useState } from "react";
import DateMomentUtils from "@date-io/moment";
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

export default function Cal() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateMomentUtils}>
      <DatePicker value={selectedDate} onChange={handleDateChange} />
    </MuiPickersUtilsProvider>
  );
}
