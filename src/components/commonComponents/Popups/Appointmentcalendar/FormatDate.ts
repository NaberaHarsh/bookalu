export const setDateFormat = (date:any) => {
  if(date){
  let FormattedDate =
    new Date(date).getFullYear() +
    "-" +
    ((new Date(date).getMonth() + 1) > 9 ? (new Date(date).getMonth() + 1) : ("0"+ (new Date(date).getMonth() + 1)) ) +
    "-" +
    ((new Date(date).getDate()) > 9 ? (new Date(date).getDate()) : ("0"+new Date(date).getDate()) );


  return FormattedDate;}
  else return "--"
};

export const setDateTimeFormat = (date:any) => {
  if(date){
  let FormattedDate =
    new Date(date).getUTCFullYear() +
    "-" +
    ((new Date(date).getUTCMonth() + 1) > 9 ? (new Date(date).getUTCMonth() + 1) : ("0"+ (new Date(date).getUTCMonth() + 1)) ) +
    "-" +
    ((new Date(date).getUTCDate()) > 9 ? (new Date(date).getUTCDate()) : ("0"+new Date(date).getUTCDate()) ) + " " +
    (new Date(date).getUTCHours() > 9 ? new Date(date).getUTCHours() : ("0"+new Date(date).getUTCHours()) ) +":"+
    (new Date(date).getUTCMinutes() > 9 ? new Date(date).getUTCMinutes() : ("0"+new Date(date).getUTCMinutes())) +":"+"00"

  return FormattedDate;}
  else return "--"
};

