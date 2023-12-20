import clock from '../../acess/clock.png';

function FoodItem({ image, time, description }) {
    return (
      
        <div style={{ maxWidth: '315px', marginRight: '10px', marginBottom:'20px'}}>
            <img style={{ width:'300px',maxWidth: '300px', height: '214px',borderRadius: '15px' }} src={image} alt="" />
            <div style={{ display: 'flex', alignItems: 'center', height: '42px' }}>
                <img style={{ width: '24px', height: '24px', marginRight: '4px' }} src={clock} alt="" />
                <span style={{ color: 'rgba(127, 127, 127, 1)' , width:'100%'}}>{time} phút</span>
            </div>
            <div>
                <span style={{ color: 'black', fontWeight: '700', fontSize: '18px' }}>{description}</span>
            </div>
        </div>
    );
}

export default FoodItem;
