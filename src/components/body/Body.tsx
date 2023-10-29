// import React, { Component } from 'react';
// import './body.css';
// import Card from '../card/Card';
// import ApiService from '../../API/fetch';
// import Loader from '../Loader/Loader';

// interface State {
//   data: Array<{
//     name: string;
//     climate: string;
//     terrain: string;
//     population: string;
//   }>;
//   isLoading: boolean;
// }

// class Body extends Component<object, State> {
//   constructor(props: object | Readonly<object>) {
//     super(props);

//     this.state = {
//       data: [],
//       isLoading: false,
//     };
//   }

//   componentDidMount() {
//     this.getSearch();
//   }

//   getSearch = () => {
//     this.setState({ isLoading: true });

//     ApiService.getPlanets('')
//       .then((data) => {
//         this.setState({ isLoading: false, data: data });
//         console.log(data);
//       })
//       .catch((error) => {
//         this.setState({ isLoading: false });
//         console.error('Ошибка при получении данных:', error);
//       });
//   };

//   render(): React.ReactNode {
//     const { isLoading } = this.state;
//     return (
//       <div className="body__container">
//         {isLoading ? (
//           <div className="body__loader">
//             <Loader />
//           </div>
//         ) : (
//           this.state.data.map(
//             (
//               item: {
//                 name: string;
//                 climate: string;
//                 terrain: string;
//                 population: string;
//               },
//               index: React.Key | null | undefined
//             ) => (
//               <Card
//                 key={index}
//                 name={item.name}
//                 climate={item.climate}
//                 terrain={item.terrain}
//                 population={item.population}
//               />
//             )
//           )
//         )}
//       </div>
//     );
//   }
// }

// export default Body;

import React, { Component } from 'react';
import './body.css';
import Card from '../card/Card';
import ApiService from '../../API/fetch';
import Loader from '../Loader/Loader';

interface State {
  data: Array<{
    name: string;
    climate: string;
    terrain: string;
    population: string;
  }>;
  isLoading: boolean;
  noResults: boolean;
}

class Body extends Component<object, State> {
  constructor(props: object | Readonly<object>) {
    super(props);

    this.state = {
      data: [],
      isLoading: false,
      noResults: false,
    };
  }

  componentDidMount() {
    const savedQuery = localStorage.getItem('savedSearchQuery');
    if (savedQuery) {
      this.getSearch(savedQuery); // Если есть сохраненный запрос, используем его
    } else {
      this.getSearch(''); // Иначе, используем пустой запрос
    }
  }

  getSearch = (searchQuery: string) => {
    this.setState({ isLoading: true, noResults: false });

    ApiService.getPlanets(searchQuery)
      .then((data) => {
        this.setState({
          isLoading: false,
          data: data,
          noResults: data.length === 0,
        });
        console.log(data);
      })
      .catch((error) => {
        this.setState({ isLoading: false });
        console.error('Ошибка при получении данных:', error);
      });
  };

  render(): React.ReactNode {
    const { isLoading, noResults } = this.state;
    return (
      <div className="body__container">
        {isLoading ? (
          <div className="body__loader">
            <Loader />
          </div>
        ) : noResults ? (
          <div className="body__no-results">Ничего не найдено</div>
        ) : (
          this.state.data.map(
            (
              item: {
                name: string;
                climate: string;
                terrain: string;
                population: string;
              },
              index: React.Key | null | undefined
            ) => (
              <Card
                key={index}
                name={item.name}
                climate={item.climate}
                terrain={item.terrain}
                population={item.population}
              />
            )
          )
        )}
      </div>
    );
  }
}

export default Body;

// fetch('https://swapi.dev/api/planets/?search=Tatooine')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// fetch('https://swapi.dev/api/people/?search=r2')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// fetch('https://swapi.dev/api/planets/schema/')
//   .then((response) => response.json())
//   .then((json) => console.log(json));
