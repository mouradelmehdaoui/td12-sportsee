import axios from "axios";
import MainData from "../model/MainData";
import Activity from "../model/Activity";
import Sessions from "../model/Sessions";
import Performance from "../model/Performance";
import environment from "../../environment/environment";

const HOST = environment.production ? "http://localhost:3001" : "/mocks";

const loadUserData = async (user, dataKey) => {
  try {
    if (!environment.production) {
      let mockData = await loadMockData(`userData`);
      const userMainFilter = mockData.find(({ id }) => id === parseInt(user));

      switch (dataKey) {
        case "MainData":
          return new MainData(userMainFilter);
        case "Activity":
          mockData = await loadMockData(`userActivityData`);
          const userActivity = mockData.filter(
            (data) => data.userId === userMainFilter.id
          );
          return new Activity(userActivity[0]);
        case "Sessions":
          mockData = await loadMockData(`userSessionsData`);
          const userSessions = mockData.filter(
            (data) => data.userId === userMainFilter.id
          );
          return new Sessions(userSessions[0]);
        case "Performance":
          mockData = await loadMockData(`userPerformanceData`);
          const userSPerformance = mockData.filter(
            (data) => data.userId === userMainFilter.id
          );
          return new Performance(userSPerformance[0]);
        default:
          throw new Error(`Invalid dataKey: ${dataKey}`);
      }
    } else {
      let userData = await axios.get(`${HOST}/user/${user}`);
      let userDataObject = userData.data.data;

      switch (dataKey) {
        case "MainData":
          return new MainData(userDataObject);
        case "Activity":
          userData = await axios.get(`${HOST}/user/${user}/activity`);
          userDataObject = userData.data.data;
          return new Activity(userDataObject);
        case "Sessions":
          userData = await axios.get(`${HOST}/user/${user}/average-sessions`);
          userDataObject = userData.data.data;
          return new Sessions(userDataObject);
        case "Performance":
          userData = await axios.get(`${HOST}/user/${user}/performance`);
          userDataObject = userData.data.data;
          return new Performance(userDataObject);
        default:
          throw new Error(`Invalid dataKey: ${dataKey}`);
      }
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

const loadMockData = async (fileName) => {
  try {
    const response = await axios.get(`${HOST}/${fileName}.json`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Failed to fetch mock data: ${response.statusText}`);
    }
  } catch (error) {
    throw new Error(`Failed to load mock data: ${error.message}`);
  }
};

export const getMainData = async (user) => {
  const dataKey = "MainData";
  const userMainData = await loadUserData(user, dataKey);
  return {
    data: userMainData,
    errorCode: userMainData ? null : new Error("Failed to load data"),
  };
};

export const getActivityData = async (user) => {
  const dataKey = "Activity";
  return await loadUserData(user, dataKey);
};

export const getSessionsData = async (user) => {
  const dataKey = "Sessions";
  return await loadUserData(user, dataKey);
};

export const getPerformanceData = async (user) => {
  const dataKey = "Performance";
  return await loadUserData(user, dataKey);
};
