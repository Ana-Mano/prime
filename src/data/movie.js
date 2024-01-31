const data = [
     {
        id: 1,
         title: 'Kandahar',
        genre: 'Thriller',
        category: 'Hollywood',
        url: "https://th.bing.com/th/id/OIP.r7wVl7upaNUqZzTu5bAPSwHaLH?rs=1&pid=ImgDetMain"
     },
     {
        id: 2,
        title: 'The Woman King',
        genre: 'Action',
        category: 'Hollywood',
        url: "https://th.bing.com/th/id/OIP.If7dDS3MS7vyM4VH8Fb9EwHaKl?w=115&h=180&c=7&r=0&o=5&pid=1.7"
     },
     {
        id: 3,
        title: 'Blood Sisters',
        genre: 'Thriller',
        category: 'Nollywood',
        url: "https://th.bing.com/th/id/OIP.RemyccQ-dJ7FwdlBu7Hx-QHaK9?rs=1&pid=ImgDetMain"
     },
     {
        id: 4,
        title: 'Vincenzo',
        genre: 'Action',
        category: 'K.Drama',
        url: "data:image/jpeg;base64,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"
     },
     {
        id: 5,
        title: 'Mr.Queen',
        genre: 'Romance',
        category: 'K.Drama',
        url: "https://th.bing.com/th?id=OIP.38BXJi8ZzF4YFdfLiJ1vOgHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
     },
     {
        id: 6,
        title: 'Brotherhood',
        genre: 'Action',
        category: 'Nollywood',
        url: "https://th.bing.com/th?id=OIP.FDSHP7z_Ey5_pOvsWMqdKwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
     },
     {
        id: 7,
        title: 'Love at First Sight',
        genre: 'Romance',
        category: 'Hollywood',
        url: "https://th.bing.com/th?id=OIP.DLo_GiS_vpZZ3aLZyR7FngHaK9&w=205&h=304&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
     },
     {
        id: 8,
        title: 'A Tribe Called Judah',
        genre: 'Comedy',
        category: 'Nollywood',
        url: "https://th.bing.com/th?id=OIP.7lL_Ue_Dmxsqv2BZKw8TygHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
     },
     {
      id: 9,
      title: 'Family Switch',
      genre: 'Comedy',
      category: 'Hollywood',
      url: "https://th.bing.com/th?id=OIP.nR7Ag2Rst1dkUZf2sbDRsAAAAA&w=201&h=282&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
   },

]

export default data