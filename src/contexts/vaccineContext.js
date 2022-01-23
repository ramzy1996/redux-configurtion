import React from "react";

const VaccineContext = React.createContext({
  beneficiaryList: [
    { name: "Ramzy", date: "12/12/2021", vaccine: "Sputnik" },
    { name: "Ahmed", date: "22/10/2021", vaccine: "Sputnik" },
    { name: "Mohomed", date: "14/08/2021", vaccine: "Sputnik" },
  ],
});

export default VaccineContext;
