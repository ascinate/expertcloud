import React, {useState} from 'react';
import DatePickerDiv from './DatePickerDiv';
import { FaTrashAlt } from "react-icons/fa";



function AppenDiv(){
    const [dateList, setDateList] = useState([{ services : ""}]);

    const handleServiceChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...dateList];
        list[index][name] = value;
        setDateList(list);
      };
    
      const handeleDataListRemove = (index) => {
        const list = [...dateList];
        list.splice(index, 1);
        setDateList(list);
      };
    
      const handleDataListAdd = () => {
        setDateList([...dateList, { service: "" }]);
      };

    

    return(
        <>
        {dateList.map((singleService, index) => (
            <div key={index} className="services1">
              <div className='d-sm-flex align-item-center justify-content-between'>
                <div className='comon-dt-picker form-control'>
                   <DatePickerDiv/>
                </div>

                <div className='comon-dt-picker form-control'>
                   <DatePickerDiv/>
                </div>
                <div className='add-btn-divs'>
                {dateList.length - 1 === index && dateList.length < 4 && (
                  <button
                    type="button"
                    onClick={handleDataListAdd}
                    className="btn add-btn"
                  >
                    <span><img src='images/plush-icons-add.svg' alt='svg'/></span>
                  </button>
                )}
                </div>
              </div>
              <div className="remove-btn-div">
                {dateList.length !== 1 && (
                  <button
                    type="button"
                    onClick={() => handeleDataListRemove(index)}
                    className="remove-btn btn"
                  >
                  <FaTrashAlt/>
                    <span>
                       
                    </span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </>
    );
}

export default AppenDiv;