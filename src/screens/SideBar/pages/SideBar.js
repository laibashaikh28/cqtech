import React, { useState } from "react";
import Sidebar from "../components/SideBar";

const SideBarPage = () => {
  const [showList, setShowList] = useState(true);
  const [showEdit, setShowEdit] = useState(false);

  const onClickList = () => {
    setShowList(true);
    setShowEdit(false);
  };
  const onClickEdit = () => {
    setShowList(false);
    setShowEdit(true);
  };
  return (
    <Sidebar
      showEdit={showEdit}
      showList={showList}
      onClickList={onClickList}
      onClickEdit={onClickEdit}
    />
  );
};

export default SideBarPage;
