import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Social from '../Social';

import './Header.css'

const propTypes = {
  text: PropTypes.string
};

const defaultProps = {

};

export default class Header extends Component {

  state = {
    headerClass: 'Header'
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ headerClass: 'Header post' });
    }, 4000);
  }

  render() {
    const { headerClass } = this.state;

    return (
      <div className={ headerClass }>

        <div className="Header-title">
          <div className="Header-title-wrapper">
            <p className="Header-title-p">I'm Matt.</p>
            <p className="Header-title-p">I build apps,</p>
            <p className="Header-title-p">read books,</p>
            <p className="Header-title-p">and ride bikes.</p>
          </div>
        </div>

        <div className="Header-social">
          <Social />
        </div>

      </div>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

// import React from 'react';
// import Social from './Social';

// const styles = {
//   main: {
//     backgroundColor: '#0E0D0B',
//     paddingTop: 20,
//   },
//   nameBlock: {
//     marginLeft: 65
//   },
//   name: {
//     fontSize: 22
//   },
//   title: {
//     fontSize: 14
//   },
//   summary: {
//     marginTop: 150,
//     marginBottom: 125,
//     fontSize: 25,
//   },
// };

// const Header = (props) => {
//   return (
//     <div style={styles.main}>
//       <div className="container grey-light">
//         <div className="col-sm-6 pull-right">
//           <Social />
//         </div>
//         <div className="col-sm-5 col-sm-offset-1" style={styles.nameBlock} >
//           <span style={styles.name}>Matthew Thomas Smith</span>
//           <p style={styles.title}>Full-Stack Engineer · Denver, CO</p>
//         </div>
//         <div className="row" style={styles.summary}>
//           <div className="col-sm-11 col-sm-offset-1">
//             <p>
//               <strong>Learning</strong> - Constant improvement: coding, reading, cycling, deliberate practice
//             </p>
//             <p>
//               <strong>Building</strong> - Shipping JavaScript apps built with React.js, Redux, Electron, Meteor.js
//             </p>
//             <p>
//               <strong>Teaching</strong> - Invoking ❤️  for JavaScript by teaching React.js, Redux, Express.js, Node.js
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;

