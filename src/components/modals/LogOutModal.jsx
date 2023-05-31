import { signOut } from "firebase/auth";
import IconButton from "../buttons/IconButton";
import { IoMdClose } from "react-icons/io";
import { firebaseAuth } from "../../utils/firebase/firebase-config";

const LogOutModal = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-[2px]
        flex justify-center items-center z-50"
    >
      <div className="w-[95%] md:w-[80%] lg:w-[60%] max-w-2xl">
        <div className="flex flex-col justify-center p-4 bg-p w-full rounded-3xl">
          <span className="place-self-end m-1">
            <IconButton
              value={
                <IoMdClose
                  className=""
                  onClick={() => {
                    onClose();
                  }}
                  size={50}
                />
              }
            />
          </span>
          <div className="px-8 py-6 w-full flex flex-col gap-8 bg-black bg-opacity-70 rounded-xl shadow-lg">
            <p className="text-xl font-semibold text-white">
              Do you want to log out of your account?
            </p>
            <div className="flex justify-end items-center gap-5">
              <button
                className="accounting-button"
                onClick={() => {
                  onClose();
                  signOut(firebaseAuth);
                }}
              >
                Log Out
              </button>
              <button
                className="bg-green-600 text-white font-bold text-lg px-4 py-1 rounded-lg hover:bg-green-800 hover:scale-105 duration-300"
                onClick={() => onClose()}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogOutModal;
