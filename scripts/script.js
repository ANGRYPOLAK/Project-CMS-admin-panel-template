new Morris.Line({
    element: 'myfirstchart',
    data: [
      { year: '2022-02', views: 1205 },
      { year: '2022-03', views: 1099 },
      { year: '2022-04', views: 2930 },
      { year: '2022-05', views: 6780 },
      { year: '2022-06', views: 7200 },
      { year: '2022-07', views: 6034 },
      { year: '2022-08', views: 6099 },
      { year: '2022-09', views: 7260 }
    ],
    xkey: 'year',
    ykeys: ['views'],
    labels: ['views']
  });

  new Morris.Donut({
    element: 'myfirstDonut',
    data: [
      {label: "Male", value: 3112},
      {label: "Female", value: 1230},
    ]
  });

  new Morris.Bar({
    element: 'Income',
    data: [
      { d: 'Mon', Income: 1205},
      { d: 'Tues', Income: 1099 },
      { d: 'Wed', Income: 2930 },
      { d: 'Thurs', Income: 6780 },
      { d: 'Fri', Income: 7200 },
      { d: 'Sat', Income: 6034 },
      { d: 'Sun', Income: 6099 }
    ],
    xkey: 'd',
    ykeys: ['Income'],
    labels: ['Income PLN']
  });