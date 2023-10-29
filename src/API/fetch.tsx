// const url = `https://swapi.dev/api/planets/`;

// class ApiService {
//   static async getPlanets() {
//     const response = await fetch(`${url}`);
//     const data = await response.json();
//     if (data.results) {
//       return data.results;
//     } else {
//       throw new Error('Отсутствуют данные "results"');
//     }
//   }
// }

// export default ApiService;

class ApiService {
  static async getPlanets(searchQuery: string | null) {
    let url = 'https://swapi.dev/api/planets';

    if (searchQuery) {
      url = `https://swapi.dev/api/planets/?search=${searchQuery}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    if (data.results) {
      return data.results;
    } else {
      throw new Error('Отсутствуют данные "results"');
    }
  }
}

export default ApiService;

//
//

//

// const url = 'https://swapi.dev/api/planets/';

// interface Planet {
//   name: string;
//   terrain: string;
//   rotation_period: string;
//   orbital_period: string;
//   diameter: string;
//   climate: string;
// }

// class ApiService {
//   static async getPlanets() {
//     let allPlanets: Planet[] = [];
//     let nextUrl = url;

//     while (nextUrl) {
//       const response = await fetch(nextUrl);
//       const data = await response.json();

//       if (data.results) {
//         allPlanets = allPlanets.concat(data.results);
//       } else {
//         throw new Error('Отсутствуют данные "results"');
//       }

//       nextUrl = data.next;
//     }

//     return allPlanets;
//   }
// }

// export default ApiService;
