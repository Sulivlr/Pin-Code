
const Password = () => {



  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h4>Enter Password here:</h4>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-md-6 text-center">
          <h4></h4>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <div className="d-flex flex-column text-center">
          <div className="btn-group-lg">
            {[1, 2, 3].map((digit) => (
              <button key={digit} className="btn btn-primary m-1">
                {digit}
              </button>
            ))}
          </div>
          <div className="btn-group-lg">
            {[4, 5, 6].map((digit) => (
              <button key={digit} className="btn btn-primary m-1">
                {digit}
              </button>
            ))}
          </div>
          <div className="btn-group-lg">
            {[7, 8, 9].map((digit) => (
              <button key={digit} className="btn btn-primary m-1">
                {digit}
              </button>
            ))}
          </div>
          <div>
            <div className="btn-group-lg">
              {[0].map((digit) => (
                <button key={digit} className="btn btn-primary m-2">{digit}</button>
              ))}
            </div>
            <button className="btn btn-warning me-3">
              Clear
            </button>
            <button className="btn btn-success">
              Enter
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Password;