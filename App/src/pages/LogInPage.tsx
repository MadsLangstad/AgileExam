const LogInPage = () => {
  return (
    <div className={"w-screen h-screen"}>
      <div className={"grid grid-cols-2"}>
        <div className={"text-center pl-2"}>
          <img
            className={"object-center"}
            src={""}
            alt={`picture of a woman, dog and a computer at a desk`}
          />
          <h3 className={"text-blue-700"}>KPMG Super Screen Infoplatform</h3>
          <p>
            Unleash your creative side, and take part in sharing motivation or
            reminders in your office
          </p>
        </div>
        <div className={"bg-sky-600\t pl-2"}>
          <img
            className={"object-center"}
            src={"/public/KPMG_logo_blue.png"}
            alt={"KPMG Logo"}
            width="20%"
          />
          <p>Username or Email</p>
          <input type="text" id="username" />
          <p>Password</p>
          <input type="text" id="password" />
          <p className={"text-center"}>---------- Forgot Password ----------</p>
          <button
            className={"object-center btn bg-blue-900 text-white rounded w-80"}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
