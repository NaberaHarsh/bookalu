import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

interface Props {
  shop: any;
}

const ShopContactDetails: React.FC<Props> = ({ shop }) => {
  const { contactdetails, openingtimes } = shop;

  const [address, setAddress] = useState<string>("");

  useEffect(() => {
    if (contactdetails) {
      const { address } = contactdetails;
      // console.log(address);
      let addressLine: string = "";
      if (address.addressLine1) addressLine += " " + address.addressLine1;
      if (address.addressLine2) addressLine += " " + address.addressLine1;
      if (address.country) addressLine += " " + address.country;
      if (address.county) addressLine += " " + address.county;
      if (address.postcode) addressLine += " " + address.postcode;
      if (address.town) addressLine += " " + address.town;
      setAddress(addressLine);
    }
  }, [contactdetails]);

  const toMomentTime = (time: any) => {
    return moment(
      new Date("1970-01-01 " + time),
      "ddd DD-MMM-YYYY, hh:mm A"
    ).format("hh:mm A");
  };

  return (
    <div className="tab-pane fade tab_content_inner active show">
      <div className="tab_content_inner_item">
        <div className="contab_tab_inner">
          <div className="contab_tab_inner_left">
            <div className="contab_tab_inner_left_title">
              <h5>Opening times</h5>
            </div>
            <ul>
              <li>
                <p
                  className={`${
                    openingtimes && !openingtimes[0] && "cont_tab_inactive_day"
                  }`}
                >
                  Monday{" "}
                  <span>
                    {openingtimes &&
                    openingtimes[0] &&
                    !isNaN(openingtimes[0].day)
                      ? `${toMomentTime(
                          openingtimes[0].starttime
                        )}-${toMomentTime(openingtimes[0].endtime)}`
                      : "Close"}
                  </span>
                </p>
              </li>
              <li>
                <p
                  className={`${
                    openingtimes && !openingtimes[1] && "cont_tab_inactive_day"
                  }`}
                >
                  Tuesday{" "}
                  <span>
                    {openingtimes &&
                    openingtimes[1] &&
                    !isNaN(openingtimes[1].day)
                      ? `${toMomentTime(
                          openingtimes[1].starttime
                        )}-${toMomentTime(openingtimes[1].endtime)}`
                      : "Close"}
                  </span>
                </p>
              </li>
              <li>
                <p
                  className={`${
                    openingtimes && !openingtimes[2] && "cont_tab_inactive_day"
                  }`}
                >
                  Wednesday{" "}
                  <span>
                    {openingtimes &&
                    openingtimes[2] &&
                    !isNaN(openingtimes[2].day)
                      ? `${toMomentTime(
                          openingtimes[2].starttime
                        )}-${toMomentTime(openingtimes[2].endtime)}`
                      : "Close"}
                  </span>
                </p>
              </li>
              <li>
                <p
                  className={`${
                    openingtimes && !openingtimes[3] && "cont_tab_inactive_day"
                  }`}
                >
                  Thursday{" "}
                  <span>
                    {openingtimes &&
                    openingtimes[3] &&
                    !isNaN(openingtimes[3].day)
                      ? `${toMomentTime(
                          openingtimes[3].starttime
                        )}-${toMomentTime(openingtimes[3].endtime)}`
                      : "Close"}
                  </span>
                </p>
              </li>
              <li>
                <p
                  className={`${
                    openingtimes && !openingtimes[4] && "cont_tab_inactive_day"
                  }`}
                >
                  Friday{" "}
                  <span>
                    {openingtimes &&
                    openingtimes[4] &&
                    !isNaN(openingtimes[4].day)
                      ? `${toMomentTime(
                          openingtimes[4].starttime
                        )}-${toMomentTime(openingtimes[4].endtime)}`
                      : "Close"}
                  </span>
                </p>
              </li>
              <li>
                <p
                  className={`${
                    openingtimes && !openingtimes[5] && "cont_tab_inactive_day"
                  }`}
                >
                  Saturday{" "}
                  <span>
                    {openingtimes &&
                    openingtimes[5] &&
                    !isNaN(openingtimes[5].day)
                      ? `${toMomentTime(
                          openingtimes[5].starttime
                        )}-${toMomentTime(openingtimes[5].endtime)}`
                      : "Close"}
                  </span>
                </p>
              </li>
              <li>
                <p
                  className={`${
                    openingtimes && !openingtimes[6] && "cont_tab_inactive_day"
                  }`}
                >
                  Sunday
                  <span>
                    {openingtimes &&
                    openingtimes[6] &&
                    !isNaN(openingtimes[6].day)
                      ? `${toMomentTime(
                          openingtimes[6].starttime
                        )}-${toMomentTime(openingtimes[6].endtime)}`
                      : "Close"}
                  </span>
                </p>
              </li>
            </ul>
          </div>
          <div className="contab_tab_inner_right">
            <div className="contab_tab_inner_right_title">
              <h5>Contact Details</h5>
            </div>
            <div className="contab_tab_inner_right_address">
              <b>Address: </b>
              <p>{address}</p>
              <a
                href={`http://maps.google.com/?q=${address}`}
                rel="noreferrer"
                target="_blank"
              >
                See Map
              </a>
            </div>
            <div className="contab_tab_inner_right_address2">
              <ul>
                {contactdetails && contactdetails.phonenumber1 && (
                  <li>
                    <a
                      href="#"
                      className="contab_tab_inner_right_address2_list"
                    >
                      <img src="/images/icon_set/icon_1.png" alt="ime" />
                      {contactdetails && `${contactdetails.phonenumber1}`}
                    </a>
                  </li>
                )}

                {contactdetails && contactdetails.phonenumber2 && (
                  <li>
                    <a
                      href="#"
                      className="contab_tab_inner_right_address2_list"
                    >
                      <img src="/images/icon_set/icon_1.png" alt="imae" />
                      {contactdetails && `${contactdetails.phonenumber2}`}
                    </a>
                  </li>
                )}
                <li>
                  <a href="#" className="contab_tab_inner_right_address2_list1">
                    <img src="/images/icon_set/icon_2.png" alt="iage" />
                    {contactdetails && `${contactdetails.email}`}
                  </a>
                </li>
                <li>
                  <a href="#" className="contab_tab_inner_right_address2_list2">
                    <img src="/images/icon_set/icon_3.png" alt="imae" />
                    www.websiteaddress.co.uk
                  </a>
                </li>
              </ul>
            </div>
            <ul className="contab_tab_inner_right_social">
              <li>
                <a href="#">
                  <img src="/images/icon_set/icon_4.png" alt="iages" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/icon_set/icon_5.png" alt="imaes" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/icon_set/icon_6.png" alt="imaes" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/icon_set/icon_7.png" alt="images" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/icon_set/icon_8.png" alt="images" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/icon_set/icon_9.png" alt="images" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/icon_set/icon_10.png" alt="images" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/icon_set/icon_11.png" alt="images" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopContactDetails;
