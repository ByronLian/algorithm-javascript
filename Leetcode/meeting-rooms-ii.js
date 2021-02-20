// https://leetcode.com/problems/meeting-rooms-ii/

/*
 * @param {number[][]} intervals
 * @return {number}
 */

var minMeetingRooms = function (intervals) {
  if (intervals.length === 1) return 1;

  intervals.sort((a, b) => a[0] - b[0]);
  let rooms = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const [smallest, smallestIdx] = getFirstFinishMeetingRoom(rooms);
    let current = intervals[i];

    // If current one start time bigger or equals with first finish meeting
    // Then we can use this room
    if (smallest <= current[0]) {
      rooms[smallestIdx] = current;
    } else {
      rooms.push(current);
    }
  }

  return rooms.length;
};

const getFirstFinishMeetingRoom = (rooms) => {
  let smallest = Infinity;
  let smallestIdx = -1;

  for (let i = 0; i < rooms.length; i++) {
    if (rooms[i][1] < smallest) {
      smallest = rooms[i][1];
      smallestIdx = i;
    }
  }

  return [smallest, smallestIdx];
};
