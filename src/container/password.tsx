import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../app/store.ts';
import {deleteDigit, truePassword, writeDigit} from './passwordSlice.ts';

const Password = () => {

  const password = useSelector((state: RootState) => state.password.value);
  const isCorrect = useSelector((state: RootState) => state.password.isCorrect);
  const dispatch = useDispatch();

  const click = (digit: number) => {
    dispatch(writeDigit(digit));
  };

  const deleteClick = () => {
    dispatch(deleteDigit());
  };

  const enterClick = () => {
    dispatch(truePassword());
  };

  const digitStars = () => {
    return '*'.repeat(password.length);
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h4>Enter Password here:</h4>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-md-6 text-center">
          <h4>{digitStars()}</h4>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <div className="d-flex flex-column text-center">
          <div className="btn-group-lg">
            {[1, 2, 3].map((digit) => (
              <button
                key={digit}
                className="btn btn-primary m-1"
                onClick={() => click(digit)}
              >
                {digit}
              </button>
            ))}
          </div>
          <div className="btn-group-lg">
            {[4, 5, 6].map((digit) => (
              <button
                key={digit}
                className="btn btn-primary m-1"
                onClick={() => click(digit)}

              >
                {digit}
              </button>
            ))}
          </div>
          <div className="btn-group-lg">
            {[7, 8, 9].map((digit) => (
              <button
                key={digit}
                className="btn btn-primary m-1"
                onClick={() => click(digit)}
              >
                {digit}
              </button>
            ))}
          </div>
          <div>
            <div className="btn-group-lg">
              {[0].map((digit) => (
                <button
                  key={digit}
                  className="btn btn-primary m-2"
                  onClick={() => click(digit)}

                >
                  {digit}</button>
              ))}
            </div>
            <button
              className="btn btn-danger me-3"
              onClick={() => deleteClick()}

            >
              Clear
            </button>
            <button
              className="btn btn-success"
              onClick={() => enterClick()}
            >
              Enter
            </button>
            {isCorrect !== null && (
              <div className="row justify-content-center mt-3">
                <div className="col-md-6 text-center">
                  <p style={{color: isCorrect ? 'green' : 'red'}}>
                    {isCorrect ? 'Access Granted' : 'Access Denied'}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      </div>
  );
};

export default Password;