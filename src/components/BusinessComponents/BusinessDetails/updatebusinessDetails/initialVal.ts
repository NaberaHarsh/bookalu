export const  tabInitialValues = (appoinmentvia:any,appoinmentviastring:any ) => { 
    return {
    heading: "",
    id: "",
    subservices: [
        {
            appoinmentvia,
            appoinmentviastring,
            haslinebreak: false,
            id: "",
            name: "",
            price: 0,
            sequenceKey:"",
            tabItemId: "",
            timereqquired: 1611741790000,
          }
    ],
  };
}