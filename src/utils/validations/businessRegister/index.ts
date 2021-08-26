import instance from '../../../RouteHandler/axiosHandler';

  export  const composeValidators = (...validators: any[]) => (value: any) =>
  validators.reduce(
    (error, validator) => error || validator(value),
    undefined
  );

  export const required = (value: any) => (value && value ? undefined : "Required");
  export const requiredCompanyInfo = (value:any) => (value && value.trim() !== "" ?undefined:"Required")
export const mustBeNumber = (value:any) => (isNaN(value) ? "Must be a number" : undefined);
export const isValidEmail = (value: any) =>
!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) &&
"Please Provide valid email address";

export const minimumFiveRequired = (value: any) => {
  return value && value.length < 5 && "Minimum 5 required";
};
/* Validation for no more than 5 values in array  */
export const noMoreThan5 = (value:any) => {
  return value && value.length >5 && "Maximum 5 industries can be added"
};

/* atleast 1 value is required in a array  */
export const requiredAtleastOne = (value:any) => {
  return value && value.length === 0 && "Required"
}


export const minimumOneRequired = (value: any) =>
  value && value.length < 1 && "Minimum 1 is required";


  export const characterCount250 = (value:any) =>  value && value.length >250  && "Only 250 Characters are allowed"
  
  export const minimum5char = (value:any) => value && value.length < 5 && "At least 5 characters are required"

  const simpleMemoize = (fn:any) => {
    let lastArg:any = '';
    let lastResult:any = '';
    return (arg:any) => {
      if (arg !== lastArg) {
        lastArg = arg;
        lastResult = fn(arg);
      }
      return lastResult;
    };
  };
  export const isUserNameExists = simpleMemoize(async(value:any) => {
    if(value) {
     return await instance.get(`/businessAccount/checkUserName/${value}`)
      .then((res) => {
        return undefined
      })
      .catch((err) => {
        return err.response.data.message
      })
    }
  })


  /* Social media URL validations */


  export const twitterUrlValidation = (values:any) => {
if( !/(?:https?:\/\/)?(?:www\.)?twitter\.com\/(?:#!\/)?@?([^\/\?\s]*)/i.test(values.socialmediafeed[0].url)) {
      return {
        twitterError:"Please Provide a valid Twitter URL",
        error:true
      }
    }
  };


  export const facebookUrlValidation = (values:any) => {
    if(!/(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/?/i.test(values.socialmediafeed[1].url)) {
      return {
        fbError:"Please Provide a valid Facebook URL",
        error:true
      }
    }
  };

  export const instagramUrlValidation = (values:any) => {
    if(!/(?:(?:http|https):\/\/)?(?:www\.)?(?:instagram\.com|instagr\.am)\/([A-Za-z0-9-_\.]+)/i.test(values.socialmediafeed[2].url)) {
      return {
        instaError:"Please Provide a valid Instagram URL",
        error:true
      }
    }
  };


  export const youtubeValidation = (values:any) => {
    if( !/^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/i.test(values.socialmediafeed[3].url)) {
      return {
        youtubeError:"Please Provide a valid Youtube URL",
        error:true
      }
    }
  };


  export const pinterestValidation = (values:any) => {
    if(!/(ftp|http|https):\/\/?(?:www\.)?in.pinterest.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(values.socialmediafeed[4].url)){
      return {
        pintrError:"Please Provide a valid Youtube URL",
        error:true
      }
    }
  }

  export const linkedInUrlValidation = (values:any) => {
    if(!/(ftp|http|https):\/\/?(?:www\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(values.socialmediafeed[5].url)) {
      return {
        linkedInError:"Please Provide a valid LinkedIn URL",
        error:true
      }
    }
  }


  export const flikerValidation = (values:any) => {
    if(!/(ftp|http|https):\/\/?(?:www\.)?flickr.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(values.socialmediafeed[6].url)) {
      return {
        flikError:"Please Provide a valid Fliker URL",
        error:true
      }
    }
  };

  
  export const checkardValidation = (values:any) => {
    if(!/(ftp|http|https):\/\/?(?:www\.)?checkatrade.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(values.socialmediafeed[7].url)) {
      return {
        checkardError:"Please Provide a valid checkatrade URL",
        error:true
      }
    }
  }