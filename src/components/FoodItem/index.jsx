import clock from '../../acess/clock.png';

function FoodItem({ image, time, description }) {
    return (
        <div style={{ width: '345px' }}>
            <img style={{ width: '345px', height: '214px' }} src={image} alt="" />
            <div style={{ display: 'flex', alignItems: 'center', height: '42px' }}>
                <img style={{ width: '24px', height: '24px', marginRight: '4px' }} src={clock} alt="" />
                <span style={{ color: 'rgba(127, 127, 127, 1)' }}>{time}</span>
            </div>
            <div>
                <span style={{ color: 'black', fontWeight: '700', fontSize: '20px' }}>{description}</span>
            </div>
        </div>
    );
}

export default FoodItem;
