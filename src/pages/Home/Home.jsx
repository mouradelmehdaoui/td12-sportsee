import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavHeader from "../../components/static/NavHeader";
import NavSideBar from "../../components/static/NavSideBar";
import Dashboard from "../../components/body/Dashsboard/Dashboard";
import {
  getMainData,
  getActivityData,
  getSessionsData,
  getPerformanceData,
} from "../../treatments/services/SportSeeService.js";

const Home = () => {
  const [data, setData] = useState({
    main: null,
    activity: null,
    sessions: null,
    performance: null,
  });

  const { userId } = useParams();
  const navigate = useNavigate();

  const redirectToErrorPage = (condition, errorMessage) => {
    if (condition) {
      navigate("/404", { state: { message: errorMessage } });
    }
  };

  const checkUserId = (userId) => {
    redirectToErrorPage(userId !== "12" && userId !== "18", "Invalid user ID");
  };

  const checkData = (data) => {
    redirectToErrorPage(!data, "Can't get data");
  };

  // Function to fetch data and update state
  const fetchData = async () => {
    try {
      const [mainResponse, activity, sessions, performance] = await Promise.all(
        [
          getMainData(userId),
          getActivityData(userId),
          getSessionsData(userId),
          getPerformanceData(userId),
        ]
      );

      if (mainResponse.errorCode === "ERR_NETWORK") {
        redirectToErrorPage(true, "API_ERROR");
        return;
      }

      setData((prevState) => ({
        ...prevState,
        main: mainResponse.data,
        activity,
        sessions,
        performance,
      }));

      // Check user ID after fetching data
      checkUserId(userId);
      checkData(data);
    } catch (error) {
      redirectToErrorPage(true, "Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, [userId]);

  if (!data.main || !data.activity || !data.sessions || !data.performance) {
    return <div className="serverOff">No response from server.....</div>;
  }

  return (
    // Render the Dashboard component if data is available
    data && (
      <>
        <NavHeader />
        <NavSideBar />
        <Dashboard
          userId={userId}
          user={data.main?.getFirstName() || ""}
          sessions={data.activity?.getSessions() || []}
          nutritionData={data.main?.getKeyData() || []}
          todayScore={data.main?.getTodayScore() || 0}
          performanceData={data.performance?.getData() || []}
          sessionLength={data.sessions?.getSessions() || []}
        />
      </>
    )
  );
};

export default Home;
