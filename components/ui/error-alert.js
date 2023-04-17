import s from './error-alert.module.css';

const ErrorAlert = (props) => {
  return <div className={s.alert}>{props.children}</div>;
}

export default ErrorAlert;
