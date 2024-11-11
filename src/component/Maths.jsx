import React from 'react';
import { useEffect ,useState} from 'react';
import Tables from './Tables';
import Numbers from './Numbers';

const Maths = ({num}) => {

  const renderSection = () => {
    console.log(num)
     switch (num) {
       case '1' :
         return <Numbers></Numbers>;
       case '2':
         return <Tables></Tables>;
       case '3':
         return <>Arithmetic</>;
     }
   };

  return (
   <div>
   {renderSection()}
   </div>
  );
};

export default Maths;
