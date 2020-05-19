import React from 'react';
import { Button } from 'antd';
import { DatePicker, Radio, Table} from 'antd';
import moment from 'moment';
import '../../App.css';
import Chart from './Сhart';
import {columnsStatistics, dataStatistics} from '../data'


const dateFormat = 'YYYY/MM/DD';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];


function Statistics(props) {
  return (
    <>
      <h2>Смотреть статистику</h2>
      <p>Просмотр статистики позволяет получить подробный отчет о количестве отправленных сообщений за год, месяц, неделю и день</p>
      <div className="Statistics">
        <div className="StatisticsDatePicker">
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
        </div>
        <div className="StatisticsRadio">
          <Radio.Group name="radiogroup" defaultValue={3}>
            <Radio value={1}>Час</Radio>
            <Radio value={2}>День</Radio>
            <Radio value={3}>Месяц</Radio>
            <Radio value={4}>Год</Radio>
          </Radio.Group>
        </div> 
      </div>
      <div className="buttonStatistics">
        <Button onClick={props.showStatisticsDetails} type="primary" htmlType="submit" className="login-form-button">
          Смотреть 
        </Button>   
      </div> 
      {!props.isHiddenstatistics&&
        <div>
          <h2>Статистика</h2>
          <Table columns={columnsStatistics} dataSource={dataStatistics} size="middle" />
          <div className="buttonStatistics">
          <Button danger  onClick={props.showChart}>{props.nameButtoon ? 'Закрыть график': 'Смотреть графики'}</Button>
          </div>
        </div> 
      }
      {props.isHiddenChart &&
        <div> 
          <Chart chartData={props.chartData}/>
        </div>
      }
    </>
  ); 
}


export default Statistics;