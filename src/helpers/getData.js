import floorInfo from '../constants/floor_info.json';
import studioInfo from '../constants/studio_info.json';

// returns list of {elemName, count}
const getElements = () => {
  const roomList = Object.keys(studioInfo).concat(Object.keys(floorInfo));
  const roomObjList = roomList.reduce((elemsList, elemName) => {
    return elemsList.concat({
      roomName: elemName,
      count: (studioInfo[elemName] || floorInfo[elemName]).length,
    });
  }, []);
  return roomObjList.sort((a, b) => {
    const nameA = a.roomName.toLowerCase(); // ignore upper and lowercase
    const nameB = b.roomName.toLowerCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
};

const getElementList = roomName => {
  return floorInfo[roomName] || studioInfo[roomName] || [];
};

export { getElements, getElementList };
