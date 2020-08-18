import floorInfo from '../constants/floor_info.json';
import studioInfo from '../constants/studio_info.json';

// returns list of {elemName, count}
const getElements = () => {
  const roomList = Object.keys(studioInfo).concat(Object.keys(floorInfo));
  return roomList.reduce((elemsList, elemName) => {
    return elemsList.concat({
      roomName: elemName,
      count: (studioInfo[elemName] || floorInfo[elemName]).length,
    });
  }, []);
};

export { getElements };
