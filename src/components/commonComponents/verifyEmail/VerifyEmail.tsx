import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { RootState } from "../../../redux/reducer/index";
import { verifyEmailAction } from "../../../redux/action/verifyUser/verifyEmail/verifyEmailAction";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Loader from "../../../utils/Loader/Loader";
import { HistoryProp } from "../../../utils/interfaces/common_props";
import { nonAuthRoutes } from "../../../RouteHandler/routeEnum";

interface StateProps extends HistoryProp {}

const VerifyEmail: React.FC<StateProps> = ({ history }) => {
  const dispatch = useDispatch();
  /* prettier-ignore */
  const verifyEmailReducer = useSelector((state: RootState) => state.verifyEmailReducer );
  //   token param
  const { token } = useParams<{ token: string }>();

  // verification started
  const [verifyStarted, setVerifyStarted] = useState(false);
  const [loader, setLoader] = useState(true);

  //  verification API call
  useEffect(() => {
    setVerifyStarted(true);
    dispatch(verifyEmailAction({ token: token }));
  }, []);
  //   Verification mail check
  useEffect(() => {
    const { success, dataReceived, error } = verifyEmailReducer;
    if (dataReceived) setLoader(false);
    if (dataReceived && error) setVerifyStarted(false);
    if (success && dataReceived) {
      setVerifyStarted(false);
      history.push(nonAuthRoutes.login);
    }
  }, [verifyEmailReducer]);

  console.log(verifyEmailReducer.errors);
  return (
    <div>
      <Container>
        <Row>
          <Col md={12}>
            <Card className="text-center">
              <Card.Header>
                {verifyStarted
                  ? "Email Verification started"
                  : verifyEmailReducer.dataReceived &&
                    verifyEmailReducer.error &&
                    !verifyEmailReducer.loading
                  ? "Opps! something went worng.."
                  : "Email is now verified"}
              </Card.Header>
              <Card.Body>
                {/* <Card.Title>Verification started</Card.Title> */}
                <Card.Text>
                  {verifyStarted
                    ? "We are verifying your Email address just a moment ..."
                    : verifyEmailReducer.dataReceived &&
                      verifyEmailReducer.error &&
                      !verifyEmailReducer.loading
                    ? verifyEmailReducer.errors
                    : "Email is now verified you can go for login!"}
                </Card.Text>
                <Link to={nonAuthRoutes.login}>
                  <Button variant="primary" disabled={verifyStarted}>
                    Login
                  </Button>
                </Link>
              </Card.Body>
              {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
            </Card>
          </Col>
        </Row>
      </Container>
      {loader && <Loader />}
    </div>
  );
};

export default VerifyEmail;
