import React, { useState, useEffect } from "react";
import axios from "axios";
const Chatpage = () => {
  const [chats, setchats] = useState([]);
  const fatchdata = async () => {
    const { data } = await axios.get("/api/chat");
    setchats(data);
  };
  useEffect(() => {
    fatchdata();
  }, []);
  return <div>{chats.map()}</div>;
};

export default Chatpage;
