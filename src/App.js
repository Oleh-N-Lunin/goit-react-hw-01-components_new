import React from "react";

// Component's
import CreateUser from "./components/UserProfile/User";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendsList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

//Component's data
import user from './components/data/user.json';
import statisticalData from './components/data/statistical-data.json';
import friends from './components/data/friends.json'
import transactions from './components/data/transactions.json';

function App() {
  return (
    <div className="App">
      <CreateUser name={user.name} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
