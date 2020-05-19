// message
const columnsMessage = [
  {
    title: 'Дата',
    dataIndex: 'date',
  },
  {
    title: 'Номер телефона',
    dataIndex: 'numberPhone',
  },
  {
    title: 'Текст сообщения',
    dataIndex: 'content',
  },
]

const dataMessage = [
  {
    key: '1',
    date: '2020/01',
    numberPhone: +79000000000,
    content: "Привет, буду поздно вечером",
  },
  {
    key: '2',
    date: '2020/02',
    numberPhone: +79000000000,
    content: "Привет, буду поздно вечером",
  },
  {
    key: '3',
    date: '2020/03',
    numberPhone: +79000000000,
    content: "Привет, буду поздно вечером",
  },
]

// statistics
const columnsStatistics = [
  {
    title: 'Период',
    dataIndex: 'date',
  },
  {
    title: 'Число сообщений',
    dataIndex: 'numberMessge',
  },
  {
    title: 'Число смс',
    dataIndex: 'numberSms',
  },
]


const dataStatistics = [
  {
    key: '1',
    date: '2020/01',
    numberMessge: 32,
    numberSms: 3,
  },
  {
    key: '2',
    date: '2020/02',
    numberMessge: 42,
    numberSms: 72,
  },
  {
    key: '3',
    date: '2020/03',
    numberMessge: 32,
    numberSms: 22,
  },
  {
    key: '4',
    date: '2020/04',
    numberMessge: 18,
    numberSms: 88,
  },
  {
    key: '5',
    date: '2020/05',
    numberMessge: 15,
    numberSms: 15,
  },
  {
    key: '5',
    date: '2020/06',
    numberMessge: 13,
    numberSms: 1,
  },
  {
    key: '7',
    date: '2020/07',
    numberMessge: 9,
    numberSms: 9,
  }
]

// data conversion for chart
let keyDate = dataStatistics.map((item) => item.date);
let keyNumberMessge = dataStatistics.map((item) => item.numberMessge);
let keyNumberSms = dataStatistics.map((item) => item.numberSms);


// chart
const chartData = {
  labels: keyDate,
  datasets: [
    {
      label: 'Количество сообщений',
      data: keyNumberMessge, 
      backgroundColor: [
        'rgba(255, 77, 79, 0.7)',                
      ],
      borderColor: 'rgba(77, 78, 89, 1);',
      borderWidth: 2,
    }, 
    {
      label: 'Количество смс',
      data: keyNumberSms, 
      backgroundColor: [
        'rgba(24, 144, 255, 0.7)',      
      ],
      borderWidth: 2,
      borderColor: 'rgba(77, 78, 89, 1);'
    }
  ]
}


export { columnsStatistics, dataStatistics, chartData, columnsMessage, dataMessage };


