import React, { useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { searchRobotsAction, updateRobotsAction } from "../redux/actions";

const App = () => {
  const { searchField, robots,isPending } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateRobotsAction());
  }, []);

  const onSearchChange = (event) => {
    dispatch(searchRobotsAction(event.target.value));
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });
  return isPending ? (
    <h1>Loading...</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
};

export default App;
