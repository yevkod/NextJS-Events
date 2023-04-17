import Link from "next/link";
import s from './button.module.css';

const Button = (props) => {
    if (props.link) {
        return (
            <Link href={props.link} legacyBehavior>
                <a className={s.btn} >{props.children}</a>
            </Link>
        );
    }
    return <button className={s.btn} onClick={props.onClick}>{props.children}</button>

};

export default Button;
