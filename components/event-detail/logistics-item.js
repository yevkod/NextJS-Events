import s from './logistics-item.module.css';

const LogisticsItem = (props) => {
    const {icon: Icon} = props;

    return (
        <li className={s.item}>
            <span className={s.icon}>
                <Icon />
            </span>
            <span className={s.content}>{props.children}</span>
        </li>
    );
};

export default LogisticsItem;
