import React from 'react';
import { useEffect ,useState} from 'react';
import Tables from './Tables';
import Numbers from './Numbers';
import ArithmeticPage from './ArithmeticPage';

const Maths = ({num,Click}) => {

  const renderSection = () => {
     switch (num) {
       case '1' :
         return <Numbers Click={Click}></Numbers>;
       case '2':
         return <Tables Click={Click}></Tables>;
       case '3':
         return <ArithmeticPage Click={Click}></ArithmeticPage>;
     }
   };

  return (
   <div>
   {renderSection()}
   </div>
  );
};

export default Maths;
