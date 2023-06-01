"use client";
import { AiOutlineSetting } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { settingBoxActions } from "@/store/slice/settingBox.slice";
import Theme from "./theme/Theme";
import Language from "./language/Language";
import { SettingBoxRootState } from "@/types/settingBox";

const Settings = () => {
  const dispatch = useDispatch();

  const isSettingBoxOpen = useSelector(
    (state: SettingBoxRootState) => state.settingBox.isOpen
  );

  const toggleShowSettingBox = () => {
    dispatch(settingBoxActions.toggleSettingBox());
  };

  const onCloseSettingBox = () => {
    dispatch(settingBoxActions.closeSettingBox());
  };

  return (
    <div className="relative md:hidden flex justify-between items-center z-[150]">
      <div onClick={toggleShowSettingBox}>
        <AiOutlineSetting style={{ fontSize: "1.5rem" }} />
      </div>
      {isSettingBoxOpen ? (
        <>
          <div
            className="fixed inset-0 -z-1 bg-black/20"
            onClick={onCloseSettingBox}
          />
          <div className="absolute top-8 right-0  bg-palette-card shadow-md rounded-lg px-6 py-3 ">
            <Language />
            <hr className="my-1" />
            <Theme />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Settings;
