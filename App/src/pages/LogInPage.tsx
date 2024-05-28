import frontSideImg from "../../public/The_Little_Things_Working.png";
import {useNavigate} from "react-router-dom";

const LogInPage = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Logic for handling sign-in can be added here
    // For now, we'll just navigate to the dashboard, needs further development to handel username and password
    navigate('/dashboard');
  };

  return (
    <div className={"w-screen h-screen"}>
      <div className={"grid grid-cols-2 h-full"}>
        <div className={"flex flex-col items-center justify-center pl-2"}>
          <img
            className={"object-center"}
            src={frontSideImg}
            alt={`picture of a woman, dog and a computer at a desk`}
          />
          <h3 className={"text-blue-700 font-bold text-2xl"}>
            KPMG Super Screen Infoplatform
          </h3>
          <p>
            Unleash your creative side, and take part in sharing
            <br /> motivation or reminders in your office
          </p>
        </div>
        <div
          className={
            "bg-sky-600\t pl-2 flex flex-col items-center justify-center"
          }
        >
          <img
            className={"object-center mb-8"}
            src={"/public/KPMG_logo_blue.png"}
            alt={"KPMG Logo"}
            width="20%"
          />
          <p className={"font-thin"}>Username or Email</p>
          <input
            type="text"
            id="username"
            className={"rounded-md h-10 w-2/3 mb-8"}
          />
          <p className={"font-thin"}>Password</p>
          <input
            type="text"
            id="password"
            className={"rounded-md h-10 w-2/3 "}
          />
          <p>---------- Forgot Password ----------</p>
            <button
                className={
                  "object-center btn bg-blue-900 text-white rounded w-2/3 h-10 mt-4"
                }
                onClick={handleSignIn}
            >Sign In
            </button>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
