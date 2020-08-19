import floorInfo from '../constants/floor_info.json';
import studioInfo from '../constants/studio_info.json';

const TRANSLATE_X = 9680;
const TRANSLATE_Y = -520;

// returns list of {elemName, count}
const getElements = () => {
  const roomList = Object.keys(studioInfo).concat(Object.keys(floorInfo));
  const roomObjList = roomList.reduce((elemsList, elemName) => {
    return elemsList.concat({
      elemName: elemName,
      count: (studioInfo[elemName] || floorInfo[elemName]).length,
    });
  }, []);
  return roomObjList.sort((a, b) => {
    const nameA = a.elemName.toLowerCase(); // ignore upper and lowercase
    const nameB = b.elemName.toLowerCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
};

// return list of rooms for a specified element
const getElementList = elemName => {
  const getData = floorInfo[elemName] || studioInfo[elemName] || [];
  return getData.map(pointList => {
    return pointList.map(point => {
      if (point.length > 2) return point.slice(0, 2);
      return point;
    });
  });
};

// get translated XY values
const transformPoints = pointList => {
  return pointList.map((coord, i) => {
    return [coord[0] - TRANSLATE_X, coord[1] - TRANSLATE_Y];
  });
};

export { getElements, getElementList, transformPoints };
