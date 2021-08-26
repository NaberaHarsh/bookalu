import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import "../modal.css";
import "./Appointmentcalendar.css";
import "react-multi-carousel/lib/styles.css";
import DatePicker from "react-datepicker";
import { addDays, subDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

interface PropsState {
  show: boolean;
  onHide: () => void;
}
const Appointmentcalendar: React.FC<PropsState> = ({
  show,
  onHide,
}: PropsState) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<any>("");
  const [timeSlotData, setTimeSlotData] = useState<any>([]);
  const [originalTimeData, setOriginalTimeData] = useState<any>([]);

  useEffect(() => {
    if (show) {
      let timeData: any = [];
      let x = 30; //minutes interval
      let tt = 540; // start time
      let ap = ["AM", "PM"]; // AM-PM

      //loop to increment the time and push results in array
      for (let i = 0; tt < 19 * 60; i++) {
        let hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
        let mm = tt % 60; // getting minutes of the hour in 0-55 format
        timeData[i] = {
          timeSlot:
            ("0" + (hh === 12 ? hh : hh % 12)).slice(-2) +
            ":" +
            ("0" + mm).slice(-2) +
            " " +
            ap[Math.floor(hh / 12)],
          selected: false,
          id: i,
        }; // pushing data in array in [00:00 - 12:00 AM/PM format]
        tt = tt + x;
      }

      console.log(timeData);
      setTimeSlotData(timeData);
      setOriginalTimeData(timeData);
    }
  }, [show]);

  const handleDateChange = (data: any) => {
    setSelectedDate(data);
    setSelectedTimeSlot("");
    setTimeSlotData(originalTimeData);
  };

  console.log("timeSlotData", timeSlotData);

  const handleSlotSelected = (data: { [k: string]: any }) => {
    console.log(data);
    setSelectedTimeSlot(data);
    const dataPrep = timeSlotData.map((r: any, i: number) =>
      i === data.id ? { ...r, selected: true } : { ...r, selected: false }
    );
    setTimeSlotData(dataPrep);
  };

  const handleSubmit = () => {
    const payload = {
      timeSlot: selectedTimeSlot,
      selectedDate,
    };
    console.log("payload", payload);
  };

  return (
    <Modal
      className="boxBorder forgotPassModal"
      // {...props}
      show={show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      size="xl"
      centered
    >
      <div>
        <Modal.Header closeButton className="modalHeader">
          {/* <Modal.Title id="contained-modal-title-vcenter">
            Book Appointment
          </Modal.Title> */}
        </Modal.Header>
        <Modal.Body className="show-grid">
          <div className="container">
            <div className="row">
              <div
                className="col col-md-6 col-xs-12"
                style={{ borderRight: "2px solid gray", marginBottom: "34px" }}
              >
                <h4>Select Date for Service</h4>
                <br />
                <DatePicker
                  minDate={subDays(new Date(), 0)}
                  maxDate={addDays(new Date(), 60)}
                  selected={selectedDate}
                  onChange={(e: any) => handleDateChange(e)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select Date"
                />
              </div>

              <div className="col col-md-6 col-xs-12">
                <h4>Available Time Slots</h4>
                <br />
                <div className="row">
                  {timeSlotData.map((ele: any) => (
                    <div
                      key={ele.id}
                      className="col col-md-3 col-xs-4"
                      style={{ margin: "4px 0px" }}
                    >
                      <div
                        data-qa-id="slot_time"
                        className={
                          ele.selected
                            ? "c-day-session__slot  c-day-session__slot--selected"
                            : "c-day-session__slot"
                        }
                        // style={{
                        //   color: ele.selected ? "#00a8e5" : "#2d2d32",
                        //   border: ele.selected
                        //     ? "1px solid #00a8e5"
                        //     : "1px solid #e0e0e4",
                        //   backgroundColor: ele.selected ? "#f0f0f5" : "none",
                        // }}
                        onClick={() => handleSlotSelected(ele)}
                      >
                        <span>{ele.timeSlot}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <br />
                <br />
                <div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                  >
                    Confirm Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default Appointmentcalendar;
