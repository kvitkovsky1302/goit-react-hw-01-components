import './App.css';
import Profile from './components/ProfileCard/Profile';
import Statistics from './components/StatisticCard/Statistic';
import FriendList from './components/FriendsCollection/FriendList';
import TransactionHistory from './components/TransactionsList/TransactionHistory';

import statisticalData from './Data/statistical-data.json';
import user from './Data/user.json';
import friends from './Data/friends.json';
import transactions from './Data/transactions.json';

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
