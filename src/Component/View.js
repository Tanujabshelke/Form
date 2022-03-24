import React, { useEffect, useState } from 'react'

function View() {
    const [tableData ,setTableData] = useState([]);

    useEffect(() => {
    let data = window.localStorage.getItem("userInfo");
    console.log("string" ,JSON.parse(data));
   
    setTableData(JSON.parse(data))
    },[])

  return (
      <div className='view'>
       <h2>View User Info</h2>   
      {tableData !== undefined ? 
       
        <table className='table'>
            <thead>
                <th>Name</th>
                <th>Mobile</th>
                <th>Add</th>
            </thead>
            <tbody>
                
                <tr>
                    <td className='cell'>{tableData.userName}</td>
                    <td className='cell'>{tableData.userMobile}</td>
                    <td className='cell'>{tableData.userAdd}</td>
                </tr>
            </tbody>
        </table>
    
    :
    <p>No user Data Available</p>

      }
    
  </div>
  )
}

export default View