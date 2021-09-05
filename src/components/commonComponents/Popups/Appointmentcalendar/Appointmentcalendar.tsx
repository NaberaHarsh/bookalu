import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import "../modal.css";
import "./Appointmentcalendar.css";
import "react-multi-carousel/lib/styles.css";
import DatePicker from "react-datepicker";
import { addDays, subDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import UserService from "../../../../RouteHandler/axiosHandler/user.service";
import { setDateFormat, setDateTimeFormat } from "./FormatDate";
import AppointmentSuccess from "./AppointmentSuccess";
import { CREATE_APPOINTMENT_MSG } from "../../../../utils/constants/errorMessages";
import { toast } from "react-toastify";

interface PropsState {
  show: boolean;
  onHide: () => void;
  companyId: number;
  serviceId: number;
}
const Appointmentcalendar: React.FC<PropsState> = ({
  show,
  onHide,
  companyId,
  serviceId,
}: PropsState) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<any>("");
  const [timeSlotData, setTimeSlotData] = useState<any>([]);
  const [appointmentSuccess, setAppointmentSuccess] = useState(false);

  useEffect(() => {
    show && setupData();
  }, [show, selectedDate]);

  const setupData = async () => {
    try {
      const payload = {
        typeId: 3,
        date: setDateFormat(selectedDate),
        serviceItemId: serviceId,
        companyId: companyId,
      };
      const response = await UserService.postRequest(
        "appointment/free-slots",
        payload
      );

      const data = response
        ? response.data.data.slots.map((r: any, i: number) => {
            const hour = new Date(r.starttime).getUTCHours() + 1;
            const min = new Date(r.starttime).getUTCMinutes();
            const stHour = hour % 12;
            const ap = hour >= 12 ? "PM" : "AM";
            const displayTime =
              (stHour === 0 ? 12 : stHour > 9 ? stHour : "0" + stHour) +
              ":" +
              (min > 9 ? min : "0" + min) +
              " " +
              ap;
            return { ...r, selected: false, displayTime: displayTime, id: i };
          })
        : [];

      setTimeSlotData(data);
    } catch (err) {
      console.log(err);
      const message =
        err.response && err.response.data && err.response.data.message;
      toast.error(message);
    }
  };

  const handleDateChange = (data: any) => {
    setSelectedDate(data);
    setSelectedTimeSlot("");
  };

  const handleSlotSelected = (data: { [k: string]: any }) => {
    console.log(data);
    setSelectedTimeSlot(data);
    const dataPrep = timeSlotData.map((r: any, i: number) =>
      i === data.id ? { ...r, selected: true } : { ...r, selected: false }
    );
    setTimeSlotData(dataPrep);
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        appointmentStartDate: setDateTimeFormat(selectedTimeSlot.starttime),
        appointmentDate: setDateFormat(selectedTimeSlot.starttime),
        appointmentEndDate: setDateTimeFormat(selectedTimeSlot.endtime),
        serviceItemId: serviceId,
        companyId: companyId,
        typeId: 3,
      };
      await UserService.postRequest("appointment/createappointment", payload);
      setAppointmentSuccess(true);
    } catch (err) {
      console.log(err);
      const message =
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : CREATE_APPOINTMENT_MSG;
      toast.error(message);
    }
  };

  const handleHideSuccessModal = () => {
    setAppointmentSuccess(false);
    onHide();
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
                  {timeSlotData.length > 0 ? (
                    timeSlotData.map((ele: any) => (
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
                          <span>{ele.displayTime}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div
                      className="col col-md-12 col-xs-12"
                      style={{ margin: "4px 0px" }}
                    >
                      No Slots Available
                    </div>
                  )}
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
      <AppointmentSuccess
        show={appointmentSuccess}
        onHide={handleHideSuccessModal}
      />
    </Modal>
  );
};

export default Appointmentcalendar;
