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
    numberSms: 43,
  },
  {
    key: '2',
    date: '2020/02',
    numberMessge: 42,
    numberSms: 43,
  },
  {
    key: '3',
    date: '2020/03',
    numberMessge: 32,
    numberSms: 43,
  },
  {
    key: '4',
    date: '2020/04',
    numberMessge: 18,
    numberSms: 6,
  },
  {
    key: '5',
    date: '2020/05',
    numberMessge: 15,
    numberSms: 8,
  },
  {
    key: '5',
    date: '2020/06',
    numberMessge: 12,
    numberSms: 9,
  },
  {
    key: '7',
    date: '2020/07',
    numberMessge: 9,
    numberSms: 18,
  }
]

// chart
const chartData = {
  labels: ['2020/01', '2020/02', '2020/03','2020/04', '2020/05', '2020/06', '2020/07'],
  datasets: [
    {
      label: 'Количество сообщений',
      data: [ 32, 42, 32, 18,  15,  13, 9 ], 
      backgroundColor: [
        'rgba(255, 77, 79, 0.7)',                
      ],
      borderColor: 'rgba(77, 78, 89, 1);',
      borderWidth: 2,
    }, 
    {
      label: 'Количество смс',
      data: [ 3, 72, 22, 88,  15,  1, 9 ], 
      backgroundColor: [
        'rgba(24, 144, 255, 0.7)',      
      ],
      borderWidth: 2,
      borderColor: 'rgba(77, 78, 89, 1);'
    }
  ]
}


export {columnsStatistics, dataStatistics, chartData, columnsMessage, dataMessage};


