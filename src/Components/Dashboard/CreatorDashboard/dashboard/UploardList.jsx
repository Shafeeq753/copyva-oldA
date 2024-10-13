
import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import UploadEdit from '../../../../assets/upload_edit.svg'
import UploadSucces from '../../../../assets/uploade_success.svg'
import CloseImg from '../../../../assets/closeImg.svg'


const UploardList = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };
  const close = () => {
    setIsActive(false);
  };

  return (
    <div className={isActive ? 'Statement_page active' : 'Statement_page'}>
     
<div className='popupbg'>
  <div className='Popu_div'>
    <img src={CloseImg} alt='' className="close_btn" onClick={close}/>
    <img src={UploadSucces} alt='' />  
    <h3>Music uploaded successfully</h3>
    <button>Upload list</button>
    </div>
</div>




      <div class="Statement_page_firstcontent">
        <div>
          <h4>Upload List</h4>
        </div>
        <div className='statement_search'>
        <CiSearch />
<input type="text" placeholder="Search..." />

        </div>
      </div>





      <div className='Statemenet_table mt-3'>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Song name</th>
              <th scope="col">Affilliate link</th>
              <th scope="col">Artist name</th>
              <th scope="col"> Copyright owners</th>

            </tr>
          </thead>
          <tbody>
            <tr>


              <td>Music</td>
              <td>Demo music <a href="#" onClick={toggleClass}> <img src={UploadEdit} alt='UploadEdit' width={16} height={16}/></a></td>
              <td>https://copyva.com/searchmusic </td>
              <td>Demo name</td>
              <td>Demo name</td>
            </tr>
            <tr>


              <td>Music</td>
              <td>Demo music  <a href="#" onClick={toggleClass}> <img src={UploadEdit} alt='UploadEdit' width={16} height={16} /></a></td>
              <td>https://copyva.com/searchmusic </td>
              <td>Demo name</td>
              <td>Demo name</td>
            </tr>
          </tbody>
        </table>


      </div>





    </div>
  )
}

export default UploardList