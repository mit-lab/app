import React from 'react';
import { Button, Table } from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';
import '../../App.css';


const dateFormat = 'YYYY/MM/DD';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

function  Message(props) {
  return (
    <>
      <h2 id="h2">Смотреть смс сообщения</h2>
      <p>Просмотр сообщений позволяет получить подробный отчет об отправленных сообщения</p>
      <div>
        <div className="DatePickerWr">
          <p>Начало периода</p>
          <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
        </div>
        <br />
        <div className="DatePickerWr">
        <p>Конец периода</p>
        <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
        </div>
        <br />
        <div className="buttonStatistics">
        <Button onClick={props.showMessageDetails} type="primary" htmlType="submit" className="login-form-button">
          Смотреть 
        </Button>   
      </div> 
      </div>
      {!props.isHiddenMessage&&
        <div>
          <h2>Cообщения</h2>
          <Table columns={props.columnsMessage} dataSource={props.dataMessage} size="middle" />
        </div>
      }
    </>
  );
 
}


export default Message;