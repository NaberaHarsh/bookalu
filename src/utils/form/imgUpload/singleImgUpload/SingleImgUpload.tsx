import React, { Fragment, useEffect } from "react";
import { FieldRenderProps } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Container,
  Spinner,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { imgUpload } from "../../../../redux/action/globalActions/ImageUploadActions/ImgUploadActions";
import { RootState } from "../../../../redux/reducer";
import "../../common.css";
import { businessRegPgVal } from "../../../../redux/action/businessPagesAction/businessRegPgVal";
import { NEW_API_BASE_URL } from "../../../../utils/baseUrl";
type Props = FieldRenderProps<any, any>;

const SingleImgUpload: React.FC<Props> = ({ input, ...rest }: Props) => {
  const dispatch = useDispatch();
  const imgUploaded = useSelector((state: RootState) => state.imgUpload);
  const { values } = useSelector((state: RootState) => state.businessRegPgVal);
  const { error, loading, data, calledFrom } = imgUploaded;

  const handleImgUpload = (val: any) => {
    // console.log(val.target.result);
    dispatch(
      imgUpload({ files: [val.target.files[0]], calledFrom: "businessProfile" })
    );
    input.onChange(val);
  };

  useEffect(() => {
    if (!error && !loading && data && calledFrom === "businessProfile") {
      values.companyinfo.logoid = data[0];
      dispatch(businessRegPgVal(values));
    }
  }, [error, loading, data]);

  console.log(
    calledFrom === "businessProfile" &&
      loading &&
      " ** FROM SINGLE IMG DSIPLAY  **"
  );

  return (
    <Fragment>
      <p>
        Add a logo
        <OverlayTrigger
          placement="right"
          overlay={
            <Tooltip id={`tooltip-right`}>
              Choose a profile image for business profile
            </Tooltip>
          }
        >
          <img src="images/dontknow.png" alt="images" className="ml-3" />
        </OverlayTrigger>
      </p>
      <label htmlFor="myfile" className="input_inner_item_label">
        Choose an image
      </label>
      <input
        type={input.type}
        name={input.name}
        onChange={(val) => {
          if (val.target.files?.length && val.target.files?.length !== 0) {
            handleImgUpload(val);
          }
        }}
        disabled={loading}
        {...rest}
        accept="image/*"
      />

      {calledFrom === "businessProfile" && loading ? (
        <Spinner
          className="businessProfileImg"
          animation="border"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <img
          className="businessProfileImg"
          src={`${
            values.companyinfo.logoid
              ? `${NEW_API_BASE_URL}/file/${values.companyinfo.logoid}`
              : "images/image_upload.png"
          } `}
          alt="logo"
          style={{ borderRadius: "50px" }}
        />
      )}
    </Fragment>
  );
};

export default SingleImgUpload;

/* <input
        value={input.value}
        name={input.name}
        type={input.type}
        {...rest}
        onChange={(val) => {
          if (val.target.files?.length && val.target.files?.length !== 0) {
            handleImgUpload(val.target.files[0]);
          }
        }}
        disabled={loading}
      />
      <div className="imagepreview">
        {calledFrom === "businessProfile" && loading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <img
            src={`${
              values.companyinfo.logoid
                ? `${API_BASE_URL}/File/${values.companyinfo.logoid}`
                : "images/image_upload.png"
            } `}
            alt=""
          />
        )}
      </div> */
