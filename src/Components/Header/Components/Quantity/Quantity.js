import styles from './Quantity.module.scss';

function Quantity({ count, x, y }) {
    const inlineStyle = {
        left: `${x}px`,
        top: `${y}px`,
    };
    return (
        <div className={styles.main} style={inlineStyle}>
            <span className={styles.quantity}>{count}</span>
        </div>
    );
}

export default Quantity;
