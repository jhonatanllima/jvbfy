export function loadLists() {
  return [
    { 
      title: 'Tarefas', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Estudar módulo 01 de NodeJS',
          labels: ['#7159c1'],
          user: 'https://scontent.fsod6-1.fna.fbcdn.net/v/t1.0-9/60336815_2153456471428416_4448021955991306240_n.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=YihjrNsYagMAX8AerBe&_nc_ht=scontent.fsod6-1.fna&oh=b4f737fed56a400a8100f303f64fbed4&oe=5FCE2B2A'
        },
        {
          id: 2,
          content: 'Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy',
          labels: ['#7159c1'],
          user: 'https://scontent.fsod6-1.fna.fbcdn.net/v/t1.0-9/60336815_2153456471428416_4448021955991306240_n.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=YihjrNsYagMAX8AerBe&_nc_ht=scontent.fsod6-1.fna&oh=b4f737fed56a400a8100f303f64fbed4&oe=5FCE2B2A'
        },
        {
          id: 3,
          content: 'Estudar módulo 03 de React Native',
          labels: ['#7159c1'],
          user: 'https://scontent.fsod6-1.fna.fbcdn.net/v/t1.0-9/60336815_2153456471428416_4448021955991306240_n.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=YihjrNsYagMAX8AerBe&_nc_ht=scontent.fsod6-1.fna&oh=b4f737fed56a400a8100f303f64fbed4&oe=5FCE2B2A'
        },
        {
          id: 4,
          content: 'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
          labels: ['#54e1f7'],
          user: 'https://scontent.fsod6-1.fna.fbcdn.net/v/t1.0-9/60336815_2153456471428416_4448021955991306240_n.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=YihjrNsYagMAX8AerBe&_nc_ht=scontent.fsod6-1.fna&oh=b4f737fed56a400a8100f303f64fbed4&oe=5FCE2B2A'
        },
        {
          id: 5,
          content: 'Gravar testes e deploy ReactJS',
          labels: ['#54e1f7'],
          user: 'https://scontent.fsod6-1.fna.fbcdn.net/v/t1.0-9/60336815_2153456471428416_4448021955991306240_n.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=YihjrNsYagMAX8AerBe&_nc_ht=scontent.fsod6-1.fna&oh=b4f737fed56a400a8100f303f64fbed4&oe=5FCE2B2A'
        },
      ]
    },
    { 
      title: 'Fazendo', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Recriando clone do Pipefy',
          labels: [],
          user: 'https://scontent.fsod6-1.fna.fbcdn.net/v/t1.0-9/60336815_2153456471428416_4448021955991306240_n.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=YihjrNsYagMAX8AerBe&_nc_ht=scontent.fsod6-1.fna&oh=b4f737fed56a400a8100f303f64fbed4&oe=5FCE2B2A'
        }
      ]
    },
    { 
      title: 'Pausado', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Gravar sobre Geolocalização e mapas com React Native',
          labels: ['#7159c1'],
          user: 'https://scontent.fsod6-1.fna.fbcdn.net/v/t1.0-9/60336815_2153456471428416_4448021955991306240_n.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=YihjrNsYagMAX8AerBe&_nc_ht=scontent.fsod6-1.fna&oh=b4f737fed56a400a8100f303f64fbed4&oe=5FCE2B2A'
        },
        {
          id: 8,
          content: 'Gravar testes e deploy ReactJS',
          labels: ['#54e1f7'],
          user: 'https://scontent.fsod6-1.fna.fbcdn.net/v/t1.0-9/60336815_2153456471428416_4448021955991306240_n.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=YihjrNsYagMAX8AerBe&_nc_ht=scontent.fsod6-1.fna&oh=b4f737fed56a400a8100f303f64fbed4&oe=5FCE2B2A'
        },
        {
          id: 9,
          content: 'Ajustes na biblioteca unform',
          labels: [],
        }
      ]
    },
    { 
      title: 'Concluído', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Gravar aula sobre deploy e CI com React Native',
          labels: [],
        },
        {
          id: 12,
          content: 'Gravar testes e deploy ReactJS',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
          labels: ['#7159c1'],
        }
      ]
    },
  ];
}