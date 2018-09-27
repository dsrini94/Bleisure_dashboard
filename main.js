import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './client/views/loginPage.jsx';
import {HashRouter, Route, Link} from 'react-router-dom';
import MainLandingPage from './client/views/mainLandingPage.jsx';
import ShoppingPage from './client/views/shoppingList.jsx';
import MealLayout from './client/components/mealLayout.jsx';
import PeopleLayout from './client/components/peopleLayout.jsx';
import TierLayout from './client/components/tierLayout.jsx';
import CheckList from  './client/components/checkList.jsx';
import PassengerList from  './client/components/passengersList.jsx';
import Notification from './client/views/notificationSummary.jsx';
import ComplaintRegister from './client/views/complaintRegister.jsx';
import SeatLayout from './client/components/seatLayout.jsx';

ReactDOM.render(<HashRouter>
      <div>
        <Route exact path='/' component={LoginPage} />
      {/* <Route exact path='/LoginPage' component={MainLandingPage} /> */}
        <Route exact path='/MainLandingPage' component={MainLandingPage} />
        <Route exact path='/mealLayout' component={MealLayout} />
        <Route exact path='/peopleLayout' component={PeopleLayout} />
        <Route exact path='/tierLayout' component={TierLayout} />
        <Route exact path='/checkList' component={CheckList} />
      <Route exact path='/passengerList' component={PassengerList} />
    <Route exact path='/notification' component={Notification} />
  <Route exact path='/complaintRegister' component={ComplaintRegister} />
<Route exact path='/seatLayout' component={SeatLayout}/>
        <Route exact path='/ShoppingPage' component={ShoppingPage} />
      </div>
    </HashRouter>, document.getElementById('app'));



// import React from 'react';
// import ReactDOM from 'react-dom';
// import LoginPage from './client/views/loginPage.jsx';
// import {HashRouter, Route, Link} from 'react-router-dom';
// import MainLandingPage from './client/views/mainLandingPage.jsx';
// import CrewLandingPage from './client/views/crewLandingPage.jsx';
// // import Analysis from './client/views/Analysis.jsx';
//
//
// ReactDOM.render(<HashRouter>
//       <div>
//         <Route exact path='/' component={LoginPage} />
//         {/* <Route exact path='/mainLandingPage' component={MainLandingPage} /> */}
//         <Route exact path='/crewlandingpage' component={crewLandingPage} />
//         {/* <Route exact path='/analysis' component={Analysis} /> */}
//       </div>
//     </HashRouter>, document.getElementById('app'));
