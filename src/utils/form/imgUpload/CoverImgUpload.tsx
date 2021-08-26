import React, { Fragment, useEffect, useRef, useState } from "react";
import { FieldRenderProps } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { Spinner, OverlayTrigger, Tooltip } from "react-bootstrap";
import { coverImgUpload } from "../../../redux/action/globalActions/coverUploadActions/coverUploadActions";
import { RootState } from "../../../redux/reducer";
import "../common.css";
import { businessRegPgVal } from "../../../redux/action/businessPagesAction/businessRegPgVal";
// import  from 'react-bootstrap';
type Props = FieldRenderProps<any, any>;

const CoverImgUpload: React.FC<Props> = ({ input, ...rest }: Props) => {
  const dispatch = useDispatch();
  const imgUploaded = useSelector((state: RootState) => state.coverImgUpload);
  const { values } = useSelector((state: RootState) => state.businessRegPgVal);
  const { error, loading, data, calledFrom } = imgUploaded;
  const [imgFile, setImgFile] = useState({});
  const handleImgUploads = (val: any) => {
    console.log("val", val.target.files[0]);
    setImgFile(val.target.files[0]);
    dispatch(
      coverImgUpload({
        files: [val.target.files[0]],
        calledFrom: "businessCover",
      })
    );
    input.onChange(val);
  };

  useEffect(() => {
    if (!error && !loading && data && calledFrom === "businessCover") {
      console.log("data", data);
      values.companyinfo.coverphotoid = data[0];
      dispatch(businessRegPgVal(values));
    }
  }, [error, loading, data]);

  return (
    <Fragment>
      <p>
        Add a cover photo
        <OverlayTrigger
          placement="right"
          overlay={
            <Tooltip id={`tooltip-right`}>
              Choose a Cover image for business
            </Tooltip>
          }
        >
          <img src="images/dontknow.png" alt="images" className="ml-3" />
        </OverlayTrigger>
      </p>
      <label htmlFor="myfile2" className="input_inner_item2_label">
        Choose an image
      </label>
      <input
        id={input.id}
        type={input.type}
        name={input.name}
        {...rest}
        accept="image/*"
        onChange={(val) => {
          if (val.target.files?.length && val.target.files?.length !== 0) {
            handleImgUploads(val);
          }
        }}
        value={values.coverimgsrc}
      />
      {/* <p>{input.name}</p> */}
      {imgFile && imgFile["name"] && (
        <div className="row pt-3 pl-1">
          <div className="col-md-6">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              className="imgText"
            >
              {imgFile["name"]}
            </a>
          </div>
          <div className="col-md-6">
            <button
              onClick={() => {
                setImgFile({});
                values.companyinfo.coverphotoid = data[0];
                values.coverimgsrc = "";
                dispatch(businessRegPgVal(values));
              }}
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default CoverImgUpload;

/* <div className="coverImg">
        {calledFrom === "businessCover" && loading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <img
            src={`${
              values.companyinfo.coverphotoid
                ? `${API_BASE_URL}/File/${values.companyinfo.coverphotoid}`
                : "/images/page_image.png"
            } `}
            alt=""
          />
        )}
      </div>
      <p>
        Add a cover photo{" "}
        <OverlayTrigger
          placement="right"
          overlay={
            <Tooltip id={`tooltip-right`}>
              Choose a Cover image for business profile
            </Tooltip>
          }
        >
          <img src="images/dontknow.png" alt="images" className="ml-3" />
        </OverlayTrigger>
      </p>

      <label htmlFor="coverImg" className="input_inner_item2_label">
        Choose an image
      </label>
      <input
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
      /> */
