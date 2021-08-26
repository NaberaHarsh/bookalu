import React, { useEffect, useState } from "react";
import NavbarHeader from "../../../commonComponents/Header-Footer/Header/NavbarHeader";
import TabFooter from "../../../commonComponents/Header-Footer/Footer/TabFooter";
import Loader from "../../../../utils/Loader/Loader";
import { StateProps } from "./index";
import BusinessDetails from "../BusinessDetails";
import { useDispatch, useSelector } from "react-redux";
import { getBusinessPgDetails } from "../../../../redux/action/businessPagesAction/businessRegUpdateAction";
import { RootState } from "../../../../redux/reducer";
import { Container } from "react-bootstrap";

const BusinessPgMaster: React.FC<StateProps> = ({ match }) => {
  const dispatch = useDispatch();
  const [searched, setSearched] = useState<boolean>(false);

  useEffect(() => {
    setSearched(match.params.username ? true : false);
    dispatch(getBusinessPgDetails(match.params.username));
  }, []);

  const getBusinessPgDetailsReducer = useSelector(
    (state: RootState) => state.getBusinessPgDetailsReducer
  );

  const { loading, data, error } = getBusinessPgDetailsReducer;
  console.log("data", data);

  return (
    <>
      <NavbarHeader />
      {loading ? (
        <Loader />
      ) : !loading && error ? (
        <section className="bannar_area">
          <Container>
            <p>Something went worng.. Please try again..</p>
          </Container>
        </section>
      ) : (
        <BusinessDetails searched={searched} details={data.data} />
      )}

      <TabFooter />
    </>
  );
};

export default BusinessPgMaster;
