import React, { Component } from 'react';
import './formSearch.css';

interface State {
  searchQuery: string;
  savedSearch: string | null;
}

class Search extends Component<object, State> {
  constructor(props: object) {
    super(props);

    this.state = {
      searchQuery: '',
      savedSearch: null,
    };
  }

  componentDidMount(): void {
    const savedQuery = localStorage.getItem('savedSearchQuery');
    if (savedQuery) {
      this.setState({ searchQuery: savedQuery });
    }
  }

  handleSearch = (): void => {
    if (this.state.searchQuery !== this.state.searchQuery.trim()) {
      this.showSpaceError();
    } else {
      localStorage.setItem('savedSearchQuery', this.state.searchQuery);
      this.setState({ savedSearch: this.state.searchQuery });
    }
  };

  showSpaceError = (): void => {
    alert('Поле поиска не должно содержать пробелы в начале или конце!');
  };

  render(): React.ReactNode {
    return (
      <form className="search">
        <input
          className="seach__input"
          type="text"
          placeholder="Search..."
          value={this.state.searchQuery}
          onChange={(e) => this.setState({ searchQuery: e.target.value })}
        ></input>
        <button onClick={this.handleSearch} className="search__btn">
          Search
        </button>
      </form>
    );
  }
}

export default Search;

// import React, { Component } from 'react';
// import './formSearch.css';
// import ApiService from '../../API/fetch';

// interface State {
//   searchQuery: string;
//   savedSearch: string | null;
// }

// class Search extends Component<object, State> {
//   constructor(props: object) {
//     super(props);

//     this.state = {
//       searchQuery: '',
//       savedSearch: null,
//     };
//   }

//   componentDidMount() {
//     const savedQuery = localStorage.getItem('savedSearchQuery');
//     if (savedQuery) {
//       this.setState({ savedSearch: savedQuery });
//     }
//   }

//   handleSearch = async () => {
//     if (this.state.searchQuery.trim() === '') {
//       alert('Поле поиска не должно быть пустым!');
//       return;
//     }

//     try {
//       const results = await ApiService.getPlanets(this.state.searchQuery);
//       localStorage.setItem('savedSearchQuery', this.state.searchQuery);
//       this.setState({ savedSearch: this.state.searchQuery });
//       console.log(results);
//     } catch (error) {
//       console.error('Ошибка при поиске:', error);
//     }
//   };

//   render(): React.ReactNode {
//     return (
//       <form className="search">
//         <input
//           className="seach__input"
//           type="text"
//           placeholder="Search"
//           value={this.state.searchQuery}
//           onChange={(e) => this.setState({ searchQuery: e.target.value })}
//         ></input>
//         <button onClick={this.handleSearch}>Search</button>
//       </form>
//     );
//   }
// }

// export default Search;
